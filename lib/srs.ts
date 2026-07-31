export type SrsStatus = 'learning' | 'reviewing' | 'mastered';

export interface SrsRecord {
  id?: string;
  user_id?: string;
  content_type: 'vocab' | 'kanji' | 'kana' | 'grammar';
  content_id: string;
  status: SrsStatus;
  next_review: string; // ISO date string
  last_reviewed: string; // ISO date string
  interval: number; // in days
  ease_factor: number;
  mistake_count: number;
}

/**
 * SuperMemo-2 (SM-2) inspired algorithm for Spaced Repetition.
 */
export function calculateNextReview(
  currentRecord: Partial<SrsRecord> | null,
  isCorrect: boolean
): Partial<SrsRecord> {
  const now = new Date();
  
  // Default new record
  if (!currentRecord) {
    if (isCorrect) {
      // First time correct -> Review in 1 day
      const nextDate = new Date(now);
      nextDate.setDate(now.getDate() + 1);
      return {
        status: 'reviewing',
        next_review: nextDate.toISOString(),
        last_reviewed: now.toISOString(),
        interval: 1,
        ease_factor: 2.5,
        mistake_count: 0
      };
    } else {
      // First time wrong -> Review immediately (0 days)
      return {
        status: 'learning',
        next_review: now.toISOString(),
        last_reviewed: now.toISOString(),
        interval: 0,
        ease_factor: 2.5,
        mistake_count: 1
      };
    }
  }

  // Existing record
  let { interval = 0, ease_factor = 2.5, mistake_count = 0 } = currentRecord;

  if (isCorrect) {
    if (interval === 0) {
      interval = 1;
    } else if (interval === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * ease_factor);
    }
    // Slightly increase ease factor if they got it right
    ease_factor = Math.min(ease_factor + 0.1, 3.0);
  } else {
    // Forgot: reset interval, decrease ease factor, increment mistakes
    interval = 0;
    ease_factor = Math.max(ease_factor - 0.2, 1.3);
    mistake_count += 1;
  }

  const nextDate = new Date(now);
  nextDate.setDate(now.getDate() + interval);

  let newStatus: SrsStatus = 'reviewing';
  if (interval === 0) newStatus = 'learning';
  if (interval > 21) newStatus = 'mastered';

  return {
    ...currentRecord,
    status: newStatus,
    next_review: nextDate.toISOString(),
    last_reviewed: now.toISOString(),
    interval,
    ease_factor,
    mistake_count
  };
}


import { supabase } from './supabase';

export async function processReview(
  userId: string,
  contentType: 'vocab' | 'kanji' | 'kana' | 'grammar',
  contentId: string,
  isCorrect: boolean
) {
  // Fetch current record
  const { data: existing } = await supabase
    .from('learning_history')
    .select('*')
    .eq('user_id', userId)
    .eq('content_type', contentType)
    .eq('content_id', contentId)
    .single();

  const currentRecord = existing || null;
  const nextRecord = calculateNextReview(currentRecord, isCorrect);

  const payload = {
    user_id: userId,
    content_type: contentType,
    content_id: contentId,
    status: nextRecord.status,
    next_review: nextRecord.next_review,
    last_reviewed: nextRecord.last_reviewed,
    interval: nextRecord.interval,
    ease_factor: nextRecord.ease_factor,
    mistake_count: nextRecord.mistake_count,
  };

  const { error } = await supabase
    .from('learning_history')
    .upsert(payload, { onConflict: 'user_id,content_type,content_id' });
    
  return { success: !error, error, nextRecord };
}
