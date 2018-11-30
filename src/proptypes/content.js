import PropTypes from 'prop-types';

export const RouteProps = PropTypes.shape({
  bullet: PropTypes.string,
  path: PropTypes.string,
  exact: PropTypes.bool,
  name: PropTypes.string,
  lastUpdate: PropTypes.string,
});

export const ContentProps = PropTypes.arrayOf({
  bullet: PropTypes.string,
  path: PropTypes.string,
  exact: PropTypes.bool,
  name: PropTypes.string,
  lastUpdate: PropTypes.string,
  content: PropTypes.arrayOf(RouteProps),
});
