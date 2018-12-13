import React from 'react';

import { FooterProps } from '../proptypes';

function Footer({
  prevRouteName,
  nextRouteName,
  onFooterPrevLinkClick,
  onFooterNextLinkClick,
}) {
  return (
    <>
      { prevRoute
        ? (
          <button
            className="button"
            type="button"
            onClick={onFooterPrevLinkClick}
          >
            Previous
            <br />
            <span className="text--blue">
              —&nbsp;
              { prevRouteName }
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
            onClick={onFooterNextLinkClick}
          >
            Next
            <br />
            <span className="text--blue">
              { nextRouteName }
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
