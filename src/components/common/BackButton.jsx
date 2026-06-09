/**
 * Back navigation button component
 * Used in AboutPage, PortfolioPage, ProjectPage
 */
export function BackButton({ onClick, href = '/', className = 'v2-back-circle' }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </a>
  );
}

export default BackButton;
