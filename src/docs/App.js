import { Route as MdContent } from 'react-router-dom';

import contents from './content/contents';

import Shell from './Shell';

export default function Content() {
  return (
    <Shell>
      <div className="content">
        {contents.map(content => (
          <MdContent
            {...content}
          />
        ))}
      </div>
    </Shell>
  );
}
