import { TranslationType, Language } from './types';
import { en } from './en';
import { sv } from './sv';

export const translations: Record<Language, TranslationType> = {
  en,
  sv
};

export type { Language, TranslationType };