import PropTypes from 'prop-types';

import { ContentProps, RouteProps } from './content';

const FooterProps = PropTypes.shape({
  prevRoute: RouteProps,
  nextRoute: RouteProps,
  onFooterLinkClick: PropTypes.func,
}).isRequired;

const ListProps = PropTypes.shape({
  listContents: ContentProps,
  isInner: PropTypes.bool,
  LinkComponent: PropTypes.node,
  onLinkClick: PropTypes.func,
}).isRequired;

const NavProps = PropTypes.shape({
  content: PropTypes.arrayOf(PropTypes.string),
  withButton: PropTypes.bool,
  buttonName: PropTypes.string,
  onButtonClick: PropTypes.func,
}).isRequired;

const AsideProps = PropTypes.shape({
  logo: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  list: PropTypes.node,
  listProps: ListProps,
  isShown: PropTypes.bool,
}).isRequired;

const LayoutProps = PropTypes.shape({
  children: PropTypes.node,

  footer: PropTypes.node,
  aside: PropTypes.node,
  nav: PropTypes.node,

  asideProps: AsideProps,
  navProps: NavProps,
  footerProps: FooterProps,
}).isRequired;

export {
  LayoutProps,
  FooterProps,
  NavProps,
  AsideProps,
  ListProps,
};
