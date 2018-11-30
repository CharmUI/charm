import React from 'react';

import { FooterProps } from '../proptypes';

function Footer({
  prevRoute,
  nextRoute,
  onClickHandler,
}) {
  return (
    <footer className="footer">
      { prevRoute
        ? (
          <button
            className="button"
            type="button"
            onClick={() => onClickHandler(prevRoute.path)}
          >
            Previous
            <br />
            <span className="text--blue">
              —&nbsp;
              { prevRoute.name }
            </span>
          </button>
        )
        : <div />
      }

      { nextRoute
        ? (
          <button
            className="button text--right"
            type="button"
            onClick={() => onClickHandler(nextRoute.path)}
          >
            Next
            <br />
            <span className="text--blue">
              { nextRoute.name }
              &nbsp;—
            </span>
          </button>
        )
        : <div />
      }
    </footer>
  );
}

Footer.defaultProps = {
  prevRoute: null,
  nextRoute: null,
  onClickHandler: () => {},
};

Footer.propTypes = FooterProps;

export default Footer;
