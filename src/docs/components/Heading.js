import React from 'react';

export default function (props) {
  const { lead, children } = props;

  return (
    <h1>
      { children }
      <p className="lead text--light margin-top--1">{ lead }</p>
    </h1>
  );
}
