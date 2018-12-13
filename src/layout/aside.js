import React from 'react';

import { AsideProps } from '../proptypes';

function Aside({
  children,

  logo,
  isShown,
  className,
}) {
  return isShown
    ? (
      <>
        <div className={`aside__logo ${className}`}>
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
  className: '',
};

Aside.propTypes = AsideProps;

export default Aside;
