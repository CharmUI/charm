import React from 'react';

import { AsideProps } from '../proptypes';

function Aside({
  children,

  logo,
  isShown,
}) {
  return isShown
    ? (
      <>
        <div className="aside__logo">
          { logo }
        </div>

        { children }
      </>
    )
    : null;
}

Aside.defaultProps = {
  logo: null,
  children: null,
  isShown: false,
};

Aside.propTypes = AsideProps;

export default Aside;
