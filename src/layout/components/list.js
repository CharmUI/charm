import { Fragment } from 'react';

import Link from './link';

function List({ links, isInner }) {
  return (
    <ul
      className={
        isInner
          ? 'list--aside margin-bottom--1'
          : 'list--aside'
      }
    >
      { links.map((link) => {
        const {
          bullet,
          content,
          isCurrentPath = false,
        } = link;

        return (
          <Fragment key={bullet}>
            <Link {...link} isHashed={isInner} />
            { content && (isCurrentPath || isInner)
              ? (
                <li className="list-item--style-none">
                  <List links={content} isInner />
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
  links: [],
  isInner: false,
};

List.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape()),
  isInner: PropTypes.bool,
};

export default List;
