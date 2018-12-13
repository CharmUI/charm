import React from 'react';

import { NavProps } from '../proptypes';

function Nav({
  content,
}) {
  return (
    <>
      <ul className="list list--inline list--style-none">
        { content && content.map((item, index) => (
          <li key={index} className="text--secondary">
            { item }
          </li>
        )) }
      </ul>
    </>
  );
}

Nav.defaultProps = {
  content: null,
};

Nav.propTypes = NavProps;

export default Nav;
