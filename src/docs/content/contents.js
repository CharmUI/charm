import Main from './main.mdx';
import { Lead } from '../../components/index';

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

const routes = [
  {
    key: 1,
    path: '/',
    exact: true,
    component: () => <Main components={rewritedComponents} />,
  },
  {
    key: 2,
    path: '/about',
    component: () => <Main components={rewritedComponents} />,
  },
];

const contents = [
  {
    path: '/',
    name: 'Getting started',
    exact: true,
    paths: [
      {
        path: '/#try-react',
        name: 'Try React',
        paths: [
          {
            path: '/#more-on-react',
            name: 'More on react',
          },
          {
            path: '/#learn-react',
            name: 'Learn React',
          },
        ],
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
  },
];

export {
  routes,
  contents,
};
