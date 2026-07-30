import { SpacedRepetitionSchedule } from './types';

const SRS_INTERVALS_DAYS = [1, 3, 7, 21];

export function calculateNextReviewDate(currentStage: number): { nextDate: string; newStage: number } {
  const stage = Math.min(Math.max(currentStage, 1), SRS_INTERVALS_DAYS.length);
  const daysToAdd = SRS_INTERVALS_DAYS[stage - 1];

  const now = new Date();
  now.setDate(now.getDate() + daysToAdd);

  const newStage = stage < SRS_INTERVALS_DAYS.length ? stage + 1 : stage;

  return {
    nextDate: now.toISOString().split('T')[0],
    newStage,
  };
}

export function generateInitialSchedule(itemId: string, userId: string, topic: string): SpacedRepetitionSchedule {
  const today = new Date().toISOString().split('T')[0];
  const { nextDate, newStage } = calculateNextReviewDate(1);

  return {
    id: `srs_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    itemId,
    userId,
    topic,
    lastReviewedAt: today,
    nextReviewDate: nextDate,
    intervalStage: newStage,
    status: 'scheduled',
  };
}
