import { memo } from 'react';

import Main from './mdx/main.mdx';
import { Heading } from '../components/index';

import Shell from './Shell';

const rewriteComponents = {
  h1: memo(props => (
    <Heading
      {...props}
      lead="This page is an overview of the React documentation and related resources."
    />
  )),
};

export default function App() {
  return (
    <Shell>
      <>
        <div className="content">
          <Main
            components={rewriteComponents}
          />
        </div>

        <div className="content">
          <hr className="hr" />

          <div className="display--flex justify-content--between">
            <button type="button" className="button">
              Previous
              <br />
              <span className="text--blue">— Contents</span>
            </button>

            <button type="button" className="button text--right">
              <span className="text--secondary">Next</span>
              <br />
              <span className="text--blue">Contributions —</span>
            </button>
          </div>
        </div>
      </>
    </Shell>
  );
}
