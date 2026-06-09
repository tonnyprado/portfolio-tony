import { useTranslation } from '../../hooks/useTranslation';

/**
 * Floating "Get in touch" button
 * Used in TestPage and other pages
 */
export function GetInTouchButton({ onClick, visible = true, className = '' }) {
  const { t } = useTranslation();

  return (
    <button
      className={`v2-get-in-touch ${visible ? 'visible' : ''} ${className}`}
      onClick={onClick}
    >
      {t({ es: 'Hablemos!', en: 'Get in touch!' })}
    </button>
  );
}

export default GetInTouchButton;
