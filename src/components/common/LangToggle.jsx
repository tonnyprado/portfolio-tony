import { useTranslation } from '../../hooks/useTranslation';

/**
 * Language toggle button component
 * Shows current language with click to switch
 */
export function LangToggle({ className = 'v2-lang' }) {
  const { lang, setLang, isSpanish, isEnglish } = useTranslation();

  const handleToggle = () => {
    setLang(isSpanish ? 'en' : 'es');
  };

  return (
    <button className={className} onClick={handleToggle}>
      <span className={isEnglish ? 'active' : ''}>EN</span>
      <span className="divider">/</span>
      <span className={isSpanish ? 'active' : ''}>ES</span>
    </button>
  );
}

export default LangToggle;
