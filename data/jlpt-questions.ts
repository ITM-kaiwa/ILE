import { JlptQuestion, JlptLevel, QuestionCategory } from '@/lib/types';
import { JLPT_N5_QUESTIONS } from './jlpt-n5-questions';
import { JLPT_N4_QUESTIONS } from './jlpt-n4-questions';

export const ALL_JLPT_QUESTIONS: JlptQuestion[] = [
  ...JLPT_N5_QUESTIONS,
  ...JLPT_N4_QUESTIONS,
];

export function getQuestionsByLevel(level: JlptLevel): JlptQuestion[] {
  return ALL_JLPT_QUESTIONS.filter((q) => q.level === level);
}

export function getRandomQuestions(count: number = 10, level?: JlptLevel): JlptQuestion[] {
  const pool = level ? getQuestionsByLevel(level) : ALL_JLPT_QUESTIONS;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getQuestionsByCategory(category: QuestionCategory, level?: JlptLevel): JlptQuestion[] {
  const pool = level ? getQuestionsByLevel(level) : ALL_JLPT_QUESTIONS;
  return pool.filter((q) => q.category === category);
}
