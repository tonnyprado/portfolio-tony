import { useTranslation } from '../../hooks/useTranslation';

/**
 * Scroll hint indicator
 * Shows animated arrow to indicate scrollable content
 */
export function ScrollHint({ className = 'v2-scroll-hint', visible = true }) {
  const { t } = useTranslation();

  if (!visible) return null;

  return (
    <div className={className}>
      <span className="scroll-text">{t({ es: 'Scroll', en: 'Scroll' })}</span>
      <svg
        width="16"
        height="24"
        viewBox="0 0 16 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M8 4v16M2 14l6 6 6-6" />
      </svg>
    </div>
  );
}

export default ScrollHint;
