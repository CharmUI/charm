import React from 'react';

import { AsideProps } from '../proptypes';

function Aside({
  children,

  logo,
  className,
  ...restProps
}) {
  return (
    <>
      <div className={`aside__logo ${className}`} {...restProps}>
        { logo }
      </div>

      { children }
    </>
  );
}

Aside.defaultProps = {
  logo: null,
  children: null,
  className: '',
};

Aside.propTypes = AsideProps;

export default Aside;
