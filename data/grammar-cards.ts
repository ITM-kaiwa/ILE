import { GrammarCard, JlptLevel, QuestionCategory } from '@/lib/types';
import { VNJPCLUB_N5_GRAMMAR_CARDS } from './grammar-n5-cards';
import { VNJPCLUB_N4_GRAMMAR_CARDS } from './grammar-n4-cards';

export const ALL_GRAMMAR_CARDS: GrammarCard[] = [
  ...VNJPCLUB_N5_GRAMMAR_CARDS,
  ...VNJPCLUB_N4_GRAMMAR_CARDS,
];

export function getGrammarCardsByLevel(level: JlptLevel): GrammarCard[] {
  return ALL_GRAMMAR_CARDS.filter((c) => c.level === level);
}

export function getGrammarCardsByCategory(category: QuestionCategory): GrammarCard[] {
  return ALL_GRAMMAR_CARDS.filter((c) => c.category === category);
}
