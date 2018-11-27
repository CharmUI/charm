import { withRouter } from 'react-router-dom';

import Main from './main.mdx';

import { Lead } from '../../components/index';

import ScrollToTop from '../components/scroll';

const WithRouterScroll = withRouter(ScrollToTop);

const rewritedComponents = {
  h1: (props) => {
    const { children } = props;

    return (
      <h1 {...props}>
        {children}
        <Lead>
          This page is an overview of the React documentation and related resources.
        </Lead>
      </h1>
    );
  },
};

const contents = [
  {
    key: '1',
    path: '/',
    exact: true,
    name: 'Getting started',
    content: [
      {
        key: '1.1',
        path: '/#try-react',
        name: 'Try React',
        content: [
          {
            key: '1.1.1',
            path: '/#more-on-react',
            name: 'More on react',
          },
          {
            key: '1.1.2',
            path: '/#learn-react',
            name: 'Learn React',
          },
        ],
      },
    ],
    component: () => <WithRouterScroll><Main components={rewritedComponents} /></WithRouterScroll>,
  },
  {
    key: '2',
    path: '/about',
    name: 'About',
    hashPath: '/#about',
    component: () => <WithRouterScroll><Main components={rewritedComponents} /></WithRouterScroll>,
  },
];

export default contents;
