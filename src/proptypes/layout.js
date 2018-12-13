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
  isShown: PropTypes.bool,
  className: PropTypes.string,
}).isRequired;

const LayoutProps = PropTypes.shape({
  children: PropTypes.node,

  footer: PropTypes.node,
  aside: PropTypes.node,
  nav: PropTypes.node,
  className: PropTypes.string,
}).isRequired;

export {
  LayoutProps,
  NavProps,
  AsideProps,
};
