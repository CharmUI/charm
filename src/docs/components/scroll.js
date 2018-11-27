import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

ScrollToTop.defaultProps = {
  location: null,
  children: null,
};

ScrollToTop.propTypes = {
  location: PropTypes.shape(),
  children: PropTypes.node,
};

const WithRouteScroll = withRouter(ScrollToTop);

export default function (Component) {
  return () => (
    <WithRouteScroll>
      { Component }
    </WithRouteScroll>
  );
}
