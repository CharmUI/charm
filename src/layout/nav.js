import React from 'react';

import { NavProps } from '../proptypes';

function Nav({
  content,
  className,
  ...restProps
}) {
  return (
    <ul className={`list list--inline list--style-none ${className}`} {...restProps}>
      { content && content.map((item, index) => (
        <li key={index} className="text--secondary">
          { item }
        </li>
      )) }
    </ul>
  );
}

Nav.defaultProps = {
  content: null,
  className: '',
};

Nav.propTypes = NavProps;

export default Nav;
