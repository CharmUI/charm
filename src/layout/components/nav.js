function Nav({
  title,
  lastUpdate,
  version,
}) {
  return (
    <nav className="nav">
      <ul className="list list--inline list--style-none">
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
};

Nav.propTypes = {
  title: PropTypes.string,
  lastUpdate: PropTypes.string,
  version: PropTypes.string,
};

export default Nav;
