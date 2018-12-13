import React from 'react';

import { AsideProps } from '../proptypes';

function Aside({
  children,

  logo,
  isShown,
  className,
  ...restProps
}) {
  return isShown
    ? (
      <>
        <div className={`aside__logo ${className + 1}`} {...restProps}>
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
  className: 1,
};

Aside.propTypes = AsideProps;

export default Aside;
