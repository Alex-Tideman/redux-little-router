// @flow
import type { Href } from '../types';

export default (href: Href, basename: ?string) => {
  if (typeof href === 'string') {
    return `${basename || ''}${href}`;
  }

  console.log('Href: ', href);
  const { pathname, search, hash } = href;
  console.log('Pathname: ', pathname, 'Hash: ', hash, 'Search: ', search);
  const url = `${basename || ''}${pathname}${hash || ''}${search || ''}`;
  console.log('Url: ', url);

  return url;
};
