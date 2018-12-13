import React from 'react';

import { FooterProps } from '../proptypes';

function Footer({
  prevRoute,
  nextRoute,
  onFooterLinkClick,
}) {
  return (
    <>
      { prevRoute
        ? (
          <button
            className="button"
            type="button"
            onClick={() => onFooterLinkClick(prevRoute.path)}
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
            onClick={() => onFooterLinkClick(nextRoute.path)}
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
    </>
  );
}

Footer.defaultProps = {
  prevRoute: null,
  nextRoute: null,
  onFooterLinkClick: () => {},
};

Footer.propTypes = FooterProps;

export default Footer;
