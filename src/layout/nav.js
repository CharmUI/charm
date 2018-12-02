import React from 'react';

import { NavProps } from '../proptypes';

function Nav({
  content,
}) {
  return (
    <nav className="nav">
      <ul className="list list--inline list--style-none">
        { content && content.map((item, index) => (
          <li key={index} className="text--secondary">
            { item.type && item.type === 'button'
              ? (
                <button
                  type="button"
                  className={`button text--small ${item.className}`}
                  onClick={item.onClick}
                >
                  <small className="small">{ item.name }</small>
                </button>
              )
              : (<small className="small">{ item.name }</small>)
            }
          </li>
        )) }
      </ul>
    </nav>
  );
}

Nav.defaultProps = {
  content: null,
};

Nav.propTypes = NavProps;

export default Nav;
