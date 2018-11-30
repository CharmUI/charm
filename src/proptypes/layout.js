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
  LinkComponent: PropTypes.oneOfType([null, PropTypes.node]),
});

const AsideProps = PropTypes.shape({
  logo: PropTypes.oneOfType([
    PropTypes.oneOfType([null, PropTypes.node]),
    PropTypes.string,
  ]),
  list: PropTypes.oneOfType([null, PropTypes.node]),
  listProps: ListProps,
});

const NavProps = PropTypes.shape({
  title: PropTypes.string,
  lastUpdate: PropTypes.string,
  version: PropTypes.string,
});

const LayoutProps = {
  children: PropTypes.node,

  footer: PropTypes.oneOfType([null, PropTypes.node]),
  aside: PropTypes.oneOfType([null, PropTypes.node]),
  nav: PropTypes.oneOfType([null, PropTypes.node]),

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
