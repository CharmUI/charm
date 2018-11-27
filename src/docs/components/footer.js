import { withRouter } from 'react-router-dom';

function FooterButton({ onClick, route, isRight }) {
  return (
    <button
      onClick={() => onClick(route.path)}
      type="button"
      className={
        isRight
          ? 'text--right'
          : ''
      }
    >
      { isRight ? 'Next' : 'Previsous' }
      <br />
      <span className="text--blue">
        {isRight
          ? null
          : '— '
        }
        {route.name}
        {isRight
          ? ' —'
          : null
        }
      </span>
    </button>
  );
}

FooterButton.defaultProps = {
  route: null,
  isRight: false,
  onClick: null,
};

FooterButton.propTypes = {
  route: PropTypes.shape(),
  isRight: PropTypes.bool,
  onClick: PropTypes.func,
};

function Footer({ contents, location, history }) {
  const contentIndex = contents.reduce((acc, content, i) => {
    if (content.path === location.pathname) return i;
    return acc;
  }, null);

  const prevRoute = contents[contentIndex - 1];
  const nextRoute = contents[contentIndex + 1];

  function onClickHandler(path) {
    history.push(path);
  }

  return contentIndex >= 0
    ? (
      <footer className="display--flex justify-content--between">
        { prevRoute
          ? (
            <FooterButton onClick={onClickHandler} route={prevRoute} />
          )
          : <div />
        }

        { nextRoute
          ? (
            <FooterButton onClick={onClickHandler} route={nextRoute} isRight />
          )
          : <div />
        }
      </footer>
    )
    : null;
}

Footer.defaultProps = {
  contents: [],
  location: null,
  history: null,
};

Footer.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.shape()),
  location: PropTypes.shape(),
  history: PropTypes.shape(),
};

export default withRouter(Footer);
