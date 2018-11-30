import React from 'react';

import { List } from './index';

function Aside({
  logo,
  nav,
  listContents,
  LinkComponent,
}) {
  const ListComponent = (
    <List
      links={listContents}
      LinkComponent={LinkComponent}
    />
  );

  return (
    <div className="aside">
      <div className="aside__logo">
        <small className="small text--bold">{ logo }</small>
      </div>

      { nav || ListComponent }
    </div>
  );
}

Aside.defaultProps = {
  logo: null,
  nav: null,
  LinkComponent: null,
  listContents: null,
};

Aside.propTypes = {
  logo: PropTypes.string,
  nav: PropTypes.element,
  LinkComponent: PropTypes.element,
  listContents: PropTypes.arrayOf(PropTypes.shape()),
};

export default Aside;
