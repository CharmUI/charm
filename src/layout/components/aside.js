import Package from 'Root/package.json';

import List from './list';

function Aside(props) {
  const { contents, location } = props;

  const updatedContent = contents.map(content => Object.assign({}, content, {
    isCurrentPath: location.pathname === content.path,
  }));

  return (
    <div className="aside">
      <div className="aside__logo">
        <small className="small text--bold">{ Package.name }</small>
      </div>

      <List links={updatedContent} />
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
