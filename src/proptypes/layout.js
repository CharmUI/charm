import PropTypes from 'prop-types';

import { ContentProps, RouteProps } from './content';

const FooterProps = PropTypes.shape({
  prevRoute: RouteProps,
  nextRoute: RouteProps,
  onClickHandler: PropTypes.func,
});

const ListProps = PropTypes.shape({
  listContents: ContentProps,
  isInner: PropTypes.bool,
  LinkComponent: PropTypes.element,
});

const AsideProps = PropTypes.shape({
  logo: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  list: PropTypes.element,
  listProps: ListProps,
});

const NavProps = PropTypes.shape({
  title: PropTypes.string,
  lastUpdate: PropTypes.string,
  version: PropTypes.string,
});

const LayoutProps = {
  children: PropTypes.node,

  footer: PropTypes.element,
  aside: PropTypes.element,
  nav: PropTypes.element,

  listProps: ListProps,
  asideProps: AsideProps,
  navProps: NavProps,
  footerProps: FooterProps,
};

export {
  LayoutProps,
  FooterProps,
  NavProps,
  AsideProps,
  ListProps,
};
