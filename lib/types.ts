import { VakType, VakResult } from '@/data/vak-questions';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  primaryVak: VakType;
  vakResult?: VakResult;
  targetGoal: string;
  updatedAt: string;
}

export interface LearningLog {
  id: string;
  userId: string;
  topic: string;
  jlptLevel: 'N5' | 'N4';
  score: number;
  vakTypeUsed: VakType;
  createdAt: string;
}

export interface SpacedRepetitionSchedule {
  id: string;
  itemId: string;
  userId: string;
  topic: string;
  lastReviewedAt: string;
  nextReviewDate: string;
  intervalStage: number;
  status: 'due' | 'scheduled' | 'completed';
}

export interface WeaknessRecord {
  id: string;
  userId: string;
  topic: string;
  incorrectAnswer: string;
  correctAnswer: string;
  errorType: 'grammar' | 'spelling' | 'vocabulary' | 'kanji';
  vakRecommendation: string;
  createdAt: string;
}

export interface JlptQuestion {
  id: string;
  level: 'N5' | 'N4';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  errorType: 'grammar' | 'spelling' | 'vocabulary' | 'kanji';
}

export interface CalendarEventSchedule {
  title: string;
  date: string;
  time: string;
  durationMinutes: number;
  description: string;
  vakFocus: VakType;
}
