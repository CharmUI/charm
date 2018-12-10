import React, { Fragment } from 'react';

import { ListProps } from '../proptypes';

function List(props) {
  const {
    listContents,
    isInner,
    LinkComponent,
    onLinkClick,
  } = props;

  return (
    <ul
      className="aside__list"
    >
      { listContents.map((linkProps) => {
        const {
          bullet,
          content,
          isCurrentPath = false,
        } = linkProps;

        return (
          <Fragment key={bullet}>
            <li className={isInner ? '' : 'list-item--style-none'}>
              <LinkComponent
                {...linkProps}
                onClick={onLinkClick}
                className={isInner ? 'link_small' : ''}
              />
            </li>
            { content && (isCurrentPath || isInner)
              ? (
                <li
                  className={
                    isInner
                      ? 'list-item--style-none'
                      : 'list-item--style-none margin-bottom--1'
                  }
                >
                  <List
                    {...props}
                    listContents={content}
                    isInner
                  />
                </li>
              )
              : null
            }
          </Fragment>
        );
      })}
    </ul>
  );
}

List.defaultProps = {
  listContents: [],
  isInner: false,
  LinkComponent: null,
  onLinkClick: () => {},
};

List.propTypes = ListProps;

export default List;
