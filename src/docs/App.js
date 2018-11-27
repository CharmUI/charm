import { Route as MdContent } from 'react-router-dom';

import Shell from './components/shell';

import { routes, contents } from './content/contents';

export default function Content() {
  return (
    <Shell contents={contents}>
      {routes.map(content => (
        <MdContent
          {...content}
        />
      ))}
    </Shell>
  );
}
