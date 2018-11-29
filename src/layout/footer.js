import React from 'react';

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

Footer.propTypes = {
  prevRoute: PropTypes.shape(),
  nextRoute: PropTypes.shape(),
  onClickHandler: PropTypes.func,
};

export default Footer;
