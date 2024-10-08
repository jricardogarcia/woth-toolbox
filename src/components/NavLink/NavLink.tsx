import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import type { NavLinkProps } from './types';

export const NavLink = (props: NavLinkProps) => {
  const {
    active = false,
    activeClassName = 'active',
    children,
    className,
    exact = true,
    ...linkProps
  } = props;

  const pathname = usePathname();

  // Flag indicating that link's href matches the current path
  const [hasPathMatch, setHasPathMatch] = useState(false);

  // Update path match status
  useEffect(() => {
    // Dynamic routes are matched via props.as and static ones via props.href
    const targetPath = new URL(
      (linkProps.as || linkProps.href) as string,
      location.href,
    ).pathname;

    // Only keep the actual path part
    const currentPath = new URL(pathname, location.href).pathname;

    const isMatch = exact
      ? currentPath === targetPath
      : currentPath.startsWith(targetPath);
    setHasPathMatch(isMatch);
  }, [pathname, exact, linkProps.as, linkProps.href]);

  // Generate component's class name
  const componentClassName = useMemo(
    () =>
      clsx(className, {
        [activeClassName]: active || hasPathMatch,
      }),
    [active, activeClassName, className, hasPathMatch],
  );

  return (
    <Link {...linkProps} className={componentClassName}>
      {children}
    </Link>
  );
};
