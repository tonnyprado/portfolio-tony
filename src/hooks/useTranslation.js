import { useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Translation hook - provides a t() function for bilingual content
 * Works with objects like { es: '...', en: '...' }
 */
export function useTranslation() {
  const { lang, setLang, toggleLanguage, isSpanish, isEnglish } = useLanguage();

  const t = useCallback((obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] ?? obj.en ?? obj.es ?? '';
  }, [lang]);

  return {
    t,
    lang,
    setLang,
    toggleLanguage,
    isSpanish,
    isEnglish
  };
}

export default useTranslation;
