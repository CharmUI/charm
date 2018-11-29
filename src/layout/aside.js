import React from 'react';

function Aside({
  logo,
  nav,
}) {
  return (
    <div className="aside">
      <div className="aside__logo">
        <small className="small text--bold">{ logo }</small>
      </div>

      { nav }
    </div>
  );
}

Aside.defaultProps = {
  logo: null,
  nav: null,
};

Aside.propTypes = {
  logo: PropTypes.string,
  nav: PropTypes.element,
};

export default Aside;
