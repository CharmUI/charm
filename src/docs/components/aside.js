import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

// Contstructs aside nav links from Array of paths
function getContentPaths(paths, isInner = false) {
  return paths.map((innerContent, i) => (
    <ul
      key={i}
      className={
        isInner
          ? 'list--aside'
          : 'list--aside margin-bottom--1'
      }
    >
      <>
        {isInner
          ? (
            <li>
              <NavHashLink
                to={innerContent.path}
                className="link link_main link_small"
              >
                { innerContent.name }
              </NavHashLink>
            </li>
          )
          : (
            <li className="list-item--style-none">
              <NavLink
                to={innerContent.path}
                exact={innerContent.exact || false}
                className="link link_main"
                activeClassName="is-active"
              >
                { innerContent.name }
              </NavLink>
            </li>
          )
        }
        { innerContent.paths
          ? (
            <li className="list-item--style-none">{ getContentPaths(innerContent.paths, true) }</li>
          )
          : null
        }
      </>
    </ul>
  ));
}

function Aside(props) {
  const { contents } = props;

  return (
    <div className="aside">
      <div className="aside__logo">
        <small className="small text--bold">React Library</small>
      </div>

      { getContentPaths(contents) }
    </div>
  );
}

Aside.defaultProps = {
  contents: [],
};

Aside.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.shape()),
};

export default Aside;
