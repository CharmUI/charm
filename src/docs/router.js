// pages
import Main from './content/main.mdx';
import { Heading } from '../components/index';

const rewritedComponents = {
  h1: props => (
    <Heading
      {...props}
      lead="This page is an overview of the React documentation and related resources."
    />
  ),
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

export default routes;
