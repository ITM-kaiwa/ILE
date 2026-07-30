import { VakType, VakResult } from '@/data/vak-questions';

export type JlptLevel = 'N5' | 'N4';
export type QuestionCategory =
  | 'grammar_particle'
  | 'grammar_conjugation'
  | 'grammar_sentence'
  | 'vocabulary_daily'
  | 'vocabulary_time'
  | 'kanji_reading'
  | 'kanji_meaning';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  primaryVak: VakType;
  vakResult?: VakResult;
  targetGoal: string;
  updatedAt: string;
}

export interface GrammarCard {
  id: string;
  level: JlptLevel;
  title: string;
  structure: string;
  meaning: string;
  vietnameseExplanation: string;
  category: QuestionCategory;
  categoryName: string;
  vnjpclubUrl: string;
  vakContent: {
    visual: string;
    auditory: string;
    kinesthetic: string;
  };
}

export interface LearningLog {
  id: string;
  userId: string;
  topic: string;
  jlptLevel: JlptLevel;
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
  category: QuestionCategory;
  categoryName: string;
  incorrectAnswer: string;
  correctAnswer: string;
  errorType: 'grammar' | 'spelling' | 'vocabulary' | 'kanji';
  vakRecommendation: {
    visual: string;
    auditory: string;
    kinesthetic: string;
  };
  createdAt: string;
}

export interface JlptQuestion {
  id: string;
  level: JlptLevel;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  errorType: 'grammar' | 'spelling' | 'vocabulary' | 'kanji';
  category: QuestionCategory;
  categoryName: string;
  vakRecommendation: {
    visual: string;
    auditory: string;
    kinesthetic: string;
  };
}

export interface CalendarEventSchedule {
  title: string;
  date: string;
  time: string;
  durationMinutes: number;
  description: string;
  vakFocus: VakType;
}
