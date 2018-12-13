import React from 'react';

import { AsideProps } from '../proptypes';

function Aside({
  children,

  logo,
  isShown,
  className,
  ...restProps
}) {
  return (
    <>
      <div className={`aside__logo ${className} ${isShown ? 'is-shown' : ''}`} {...restProps}>
        { logo }
      </div>

      { children }
    </>
  );
}

Aside.defaultProps = {
  logo: null,
  children: null,
  isShown: true,
  className: '',
};

Aside.propTypes = AsideProps;

export default Aside;
