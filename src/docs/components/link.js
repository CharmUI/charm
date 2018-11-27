import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

function Link({
  isHashed,
  path,
  name,
  exact,
}) {
  return isHashed
    ? (
      <li>
        <NavHashLink
          to={path}
          className="link link_main link_small"
          activeClassName="is-active"
        >
          { name }
        </NavHashLink>
      </li>
    )
    : (
      <li className="list-item--style-none">
        <NavLink
          to={path}
          exact={exact || false}
          className="link link_main"
          activeClassName="is-active"
        >
          { name }
        </NavLink>
      </li>
    );
}

Link.defaultProps = {
  isHashed: false,
  path: null,
  name: null,
  exact: false,
};

Link.propTypes = {
  isHashed: PropTypes.bool,
  path: PropTypes.string,
  name: PropTypes.string,
  exact: PropTypes.bool,
};

export default memo(Link);
