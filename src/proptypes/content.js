import PropTypes from 'prop-types';

const RouteShape = {
  bullet: PropTypes.string,
  path: PropTypes.string,
  exact: PropTypes.bool,
  name: PropTypes.string,
  lastUpdate: PropTypes.string,
};

export const RouteProps = PropTypes.shape({
  ...RouteShape,
});

export const ContentProps = PropTypes.arrayOf({
  ...RouteShape,
  content: PropTypes.arrayOf(RouteProps),
});
