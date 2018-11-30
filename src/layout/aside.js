import React from 'react';

import { List } from './index';
import { AsideProps } from '../proptypes';

function Aside({
  logo,
  list,
  listProps,
  isShown,
}) {
  const ListComponent = (
    <List
      listContents={listProps.listContents}
      LinkComponent={listProps.LinkComponent}
      onLinkClick={listProps.onLinkClick}
    />
  );

  return (
    <div className={isShown ? 'aside is-shown' : 'aside'}>
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
  isShown: false,
};

Aside.propTypes = AsideProps;

export default Aside;
