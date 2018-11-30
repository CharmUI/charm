import React from 'react';

import { NavProps } from '../proptypes';

function Nav({
  title,
  lastUpdate,
  version,
  withButton,
  buttonName,
  onButtonClick,
}) {
  return (
    <nav className="nav">
      <ul className="list list--inline list--style-none">
        { withButton && (
          <li className="display-sm--none display--inline-block text--secondary">
            <button
              type="button"
              className="button text--small text--blue"
              onClick={onButtonClick}
            >
              { buttonName }
            </button>
          </li>
        )}
        { version && <li className="text--secondary"><small className="small">{ `v${version}` }</small></li> }
        { title && <li className="text--secondary"><small className="small">{ title }</small></li> }
        { lastUpdate && <li className="text--light"><small className="small">{ lastUpdate }</small></li> }
      </ul>
    </nav>
  );
}

Nav.defaultProps = {
  title: null,
  lastUpdate: null,
  version: null,
  withButton: true,
  buttonName: 'Menu',
  onButtonClick: () => {},
};

Nav.propTypes = NavProps;

export default Nav;
