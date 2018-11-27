import { Fragment } from 'react';

function List(props) {
  const {
    links,
    isInner,
    LinkComponent,
    HashLinkComponent,
  } = props;

  return (
    <ul
      className={
        isInner
          ? 'aside__list margin-bottom--1'
          : 'aside__list'
      }
    >
      { links.map((linkProps) => {
        const {
          bullet,
          content,
          isCurrentPath = false,
        } = linkProps;

        return (
          <Fragment key={bullet}>
            { isInner
              ? <HashLinkComponent {...linkProps} />
              : <LinkComponent {...linkProps} />
            }
            { content && (isCurrentPath || isInner)
              ? (
                <li className="list-item--style-none">
                  <List
                    {...props}
                    links={content}
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
  links: [],
  isInner: false,
  LinkComponent: null,
  HashLinkComponent: null,
};

List.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape()),
  isInner: PropTypes.bool,
  LinkComponent: PropTypes.shape(),
  HashLinkComponent: PropTypes.shape(),
};

export default List;
