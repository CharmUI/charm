import Main from './main.mdx';

import withRouteScroll from '../components/scroll';

const rewritedComponents = {
  h1: (props) => {
    const { children } = props;

    return (
      <h1 {...props}>
        { children }
        <p className="lead text--light margin-top--1">
          This page is an overview of the React documentation and related resources.
        </p>
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
    lastUpdate: '20th November',
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
    component: withRouteScroll(<Main components={rewritedComponents} />),
  },
  {
    key: '2',
    path: '/about',
    name: 'About',
    lastUpdate: '22th November',
    component: withRouteScroll(<Main components={rewritedComponents} />),
  },
];

export default contents;
