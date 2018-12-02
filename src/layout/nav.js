import React from 'react';

import { NavProps } from '../proptypes';

function Nav({
  content,
  withButton,
  buttonName,
  onButtonClick,
}) {
  return (
    <nav className="nav">
      <ul className="list list--inline list--style-none">
        { withButton
          ? (
            <li className="display-sm--none display--inline-block text--secondary">
              <button
                type="button"
                className="button text--small text--blue"
                onClick={onButtonClick}
              >
                { buttonName }
              </button>
            </li>
          )
          : null
        }
        { content && content.map((text, index) => (
          <li key={index} className="text--secondary"><small className="small">{ text }</small></li>
        ))}
      </ul>
    </nav>
  );
}

Nav.defaultProps = {
  content: null,
  withButton: true,
  buttonName: 'Menu',
  onButtonClick: () => {},
};

Nav.propTypes = NavProps;

export default Nav;
