// @flow
import type { Href } from '../types';

export default (href: Href, basename: ?string) => {
  if (typeof href === 'string') {
    return `${basename || ''}${href}`;
  }

  let { pathname } = href;
  const { search, hash } = href;
  if (hash && hash !== '') {
    if (pathname.slice(-1) === '/') {
      pathname = `${pathname.slice(0, pathname.length - 1)}${hash}/`;
    } else {
      pathname += hash;
    }
  }

  return `${basename || ''}${pathname}${search || ''}`;
};
