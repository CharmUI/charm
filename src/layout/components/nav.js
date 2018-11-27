import Package from 'Root/package.json';

function Nav({ contents, location }) {
  const currentRoute = contents.reduce((acc, content) => {
    if (content.path === location.pathname) return Object.assign({}, acc, content);
    return acc;
  }, {});

  return (
    <nav className="nav">
      <ul className="list--inline list--style-none">
        <li className="text--secondary"><small className="small">{ `v${Package.version}` }</small></li>
        <li className="text--secondary"><small className="small">{ currentRoute.name }</small></li>
        <li className="text--light"><small className="small">{ currentRoute.lastUpdate }</small></li>
      </ul>
    </nav>
  );
}

Nav.defaultProps = {
  contents: [],
  location: null,
};

Nav.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.shape()),
  location: PropTypes.shape(),
};

export default Nav;
