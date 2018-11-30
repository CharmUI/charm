import PropTypes from 'prop-types';

import { ContentProps, RouteProps } from './content';

export const FooterProps = {
  prevRoute: RouteProps,
  nextRoute: RouteProps,
  onClickHandler: PropTypes.func,
};

export const ListProps = {
  listContents: ContentProps,
  isInner: PropTypes.bool,
  LinkComponent: PropTypes.element,
};

export const AsideProps = {
  logo: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  list: PropTypes.element,
  listProps: ListProps,
};

export const NavProps = {
  title: PropTypes.string,
  lastUpdate: PropTypes.string,
  version: PropTypes.string,
};

export const LayoutProps = {
  children: PropTypes.node,
  footer: PropTypes.element,
  aside: PropTypes.element,
  nav: PropTypes.element,
  // componentProps
  listProps: ListProps,
  asideProps: AsideProps,
  navProps: NavProps,
  footerProps: FooterProps,
};
