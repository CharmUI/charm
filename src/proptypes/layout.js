import PropTypes from 'prop-types';

const NavProps = PropTypes.shape({
  content: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
}).isRequired;

const AsideProps = PropTypes.shape({
  children: PropTypes.node,

  logo: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.string,
}).isRequired;

const LayoutProps = PropTypes.shape({
  children: PropTypes.node,

  footer: PropTypes.node,
  aside: PropTypes.node,
  nav: PropTypes.node,
  isAsideShown: PropTypes.bool,
  className: PropTypes.string,
}).isRequired;

export {
  LayoutProps,
  NavProps,
  AsideProps,
};
