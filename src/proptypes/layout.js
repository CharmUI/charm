import PropTypes from 'prop-types';

import { ContentProps, RouteProps } from './content';

const FooterProps = PropTypes.shape({
  prevRoute: RouteProps,
  nextRoute: RouteProps,
  onClickHandler: PropTypes.func,
}).isRequired;

const ListProps = PropTypes.shape({
  listContents: ContentProps,
  isInner: PropTypes.bool,
  onLinkClick: PropTypes.func,
  LinkComponent: PropTypes.element,
}).isRequired;

const AsideProps = PropTypes.shape({
  logo: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  list: PropTypes.element,
  listProps: ListProps,
  isShown: PropTypes.bool,
}).isRequired;

const NavProps = PropTypes.shape({
  title: PropTypes.string,
  lastUpdate: PropTypes.string,
  version: PropTypes.string,
  withButton: PropTypes.bool,
  onButtonClick: PropTypes.func,
  buttonName: PropTypes.string,
}).isRequired;

const LayoutProps = PropTypes.shape({
  children: PropTypes.node,

  footer: PropTypes.element,
  aside: PropTypes.element,
  nav: PropTypes.element,

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
