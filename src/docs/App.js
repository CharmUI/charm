import { Route } from 'react-router-dom';

import routes from './router';

import Shell from './Shell';

export default function Content() {
  return (
    <Shell>
      <div className="content">
        {routes.map(route => (
          <Route
            {...route}
          />
        ))}
      </div>
    </Shell>
  );
}
