import FooterButton from './button';

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
            <FooterButton
              onClick={() => onClickHandler(prevRoute.path)}
              path={prevRoute.path}
            >
              { prevRoute.name }
            </FooterButton>
          )
          : <div />
        }

        { nextRoute
          ? (
            <FooterButton
              onClick={() => onClickHandler(nextRoute.path)}
              path={nextRoute.path}
              isRight
            >
              { nextRoute.name }
            </FooterButton>
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

export default Footer;
