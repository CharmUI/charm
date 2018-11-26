import React, { memo } from 'react';

function Heading(props) {
  const {
    lead,
    children,
  } = props;

  return (
    <h1>
      { children }
      { lead && <p className="lead text--light margin-top--1">{ lead }</p> }
    </h1>
  );
}

Heading.defaultProps = {
  lead: null,
  children: null,
};

Heading.propTypes = {
  lead: PropTypes.string,
  children: PropTypes.node,
};

export default memo(Heading);
