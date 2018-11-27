import { memo } from 'react';

function Lead(props) {
  const {
    children,
  } = props;

  return (
    <p className="lead text--light margin-top--1">
      { children }
    </p>
  );
}

Lead.defaultProps = {
  children: null,
};

Lead.propTypes = {
  children: PropTypes.node,
};

export default memo(Lead);
