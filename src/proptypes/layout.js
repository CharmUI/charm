import PropTypes from 'prop-types';

import { ContentProps, RouteProps } from './content';

const FooterProps = PropTypes.shape({
  prevRoute: RouteProps,
  nextRoute: RouteProps,
  onFooterLinkClick: PropTypes.func,
}).isRequired;

const NavProps = PropTypes.shape({
  content: PropTypes.arrayOf(PropTypes.node),
}).isRequired;

const AsideProps = PropTypes.shape({
  children: PropTypes.node,

  logo: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  isShown: PropTypes.bool,
}).isRequired;

const LayoutProps = PropTypes.shape({
  children: PropTypes.node,

  footer: PropTypes.node,
  aside: PropTypes.node,
  nav: PropTypes.node,
}).isRequired;

export {
  LayoutProps,
  FooterProps,
  NavProps,
  AsideProps,
};
