import { createContext, useContext, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const LanguageContext = createContext(null);

const SUPPORTED_LANGUAGES = ['es', 'en'];
const DEFAULT_LANGUAGE = 'es';
const STORAGE_KEY = 'port_lang';

export function LanguageProvider({ children }) {
  const [lang, setLangStorage] = useLocalStorage(STORAGE_KEY, DEFAULT_LANGUAGE);

  const setLang = useCallback((newLang) => {
    if (SUPPORTED_LANGUAGES.includes(newLang)) {
      setLangStorage(newLang);
    }
  }, [setLangStorage]);

  const toggleLanguage = useCallback(() => {
    setLangStorage((prev) => (prev === 'es' ? 'en' : 'es'));
  }, [setLangStorage]);

  const value = {
    lang,
    setLang,
    toggleLanguage,
    isSpanish: lang === 'es',
    isEnglish: lang === 'en',
    supportedLanguages: SUPPORTED_LANGUAGES
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

export default LanguageContext;
