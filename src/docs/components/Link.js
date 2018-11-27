import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

function Link({
  path,
  name,
  exact,
}) {
  return (
    <li className="list-item--style-none">
      <NavLink
        to={path}
        exact={exact || false}
        className="link_main"
        activeClassName="is-active"
      >
        { name }
      </NavLink>
    </li>
  );
}

function HashLink({
  path,
  name,
}) {
  return (
    <li>
      <NavHashLink
        to={path}
        className="link_main link_small"
        activeClassName="is-active"
      >
        { name }
      </NavHashLink>
    </li>
  );
}

HashLink.defaultProps = {
  path: null,
  name: null,
};

HashLink.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
};

Link.defaultProps = {
  path: null,
  name: null,
  exact: false,
};

Link.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  exact: PropTypes.bool,
};

export default function (isHashed = false) {
  return isHashed
    ? memo(HashLink)
    : memo(Link);
}
