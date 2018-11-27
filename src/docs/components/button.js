import { memo } from 'react';

function Button({ onClick, children, isRight }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={
        isRight
          ? 'text--right'
          : ''
      }
    >
      { isRight ? 'Next' : 'Previsous' }
      <br />
      <span className="text--blue">
        { isRight
          ? null
          : '— '
        }
        { children }
        { isRight
          ? ' —'
          : null
        }
      </span>
    </button>
  );
}

Button.defaultProps = {
  children: null,
  isRight: false,
  onClick: null,
};

Button.propTypes = {
  children: PropTypes.node,
  isRight: PropTypes.bool,
  onClick: PropTypes.func,
};

export default memo(Button);
