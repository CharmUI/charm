import React, { memo } from 'react';

import { NavProps } from '../proptypes';

function Nav({
  content,
  className,
  ...restProps
}) {
  return (
    <ul className={`list list--inline list--style-none ${className}`} {...restProps}>
      { content && content.map((item, index) => (
        <li key={index} className="text--color--secondary">
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

export default memo(Nav);
