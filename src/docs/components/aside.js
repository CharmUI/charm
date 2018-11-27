import { Fragment } from 'react';
import Link from './link';

// Contstructs aside nav links from Array of paths
function getContentPaths(paths, isInner = false) {
  return (
    <ul
      className={
        isInner
          ? 'list--aside margin-bottom--1'
          : 'list--aside'
      }
    >
      { paths.map((props) => {
        const {
          key,
          content,
          isCurrentPath = false,
        } = props;

        return (
          <Fragment key={key}>
            <Link {...props} isHashed={isInner} />
            { content && (isCurrentPath || isInner)
              ? (
                <li className="list-item--style-none">{ getContentPaths(content, true) }</li>
              )
              : null
            }
          </Fragment>
        );
      })}
    </ul>
  );
}

function Aside(props) {
  const { contents, location } = props;

  const updatedContent = contents.map(content => Object.assign({}, content, {
    isCurrentPath: location.pathname === content.path,
  }));

  return (
    <div className="aside">
      <div className="aside__logo">
        <small className="small text--bold">React Library</small>
      </div>

      { getContentPaths(updatedContent) }
    </div>
  );
}

Aside.defaultProps = {
  contents: [],
  location: null,
};

Aside.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.shape()),
  location: PropTypes.shape(),
};

export default Aside;
