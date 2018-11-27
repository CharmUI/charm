import { Route as MdContent } from 'react-router-dom';

import Shell from './components/shell';
import withRouteScroll from './components/scroll';

import contents from './content/contents';

export default function Content() {
  return (
    <Shell contents={contents}>
      { contents.map(content => (
        <MdContent
          {...content}
          component={withRouteScroll(content.component)}
        />
      )) }
    </Shell>
  );
}
