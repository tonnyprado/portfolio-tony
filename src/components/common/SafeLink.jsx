import { getSafeLinkProps } from '../../utils/sanitize';

/**
 * Safe link component with XSS protection
 * Automatically adds security attributes for external links
 */
export function SafeLink({ href, children, className, onClick, ...props }) {
  const linkProps = getSafeLinkProps(href);

  if (!linkProps.safe) {
    console.warn(`Blocked unsafe link: ${href}`);
    return <span className={className}>{children}</span>;
  }

  return (
    <a
      href={linkProps.href}
      className={className}
      target={linkProps.target}
      rel={linkProps.rel}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
}

export default SafeLink;
