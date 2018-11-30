import React from 'react';

import { List } from './index';
import { AsideProps } from '../proptypes';

function Aside({
  logo,
  list,
  listProps,
}) {
  const ListComponent = (
    <List
      listContents={listProps.listContents}
      LinkComponent={listProps.LinkComponent}
    />
  );

  return (
    <div className="aside">
      <div className="aside__logo">
        <small className="small text--bold">{ logo }</small>
      </div>

      { list || ListComponent }
    </div>
  );
}

Aside.defaultProps = {
  logo: null,
  list: null,
  listProps: null,
};

Aside.propTypes = AsideProps;

export default Aside;
