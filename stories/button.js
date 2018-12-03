import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('Default', () => (
    <button className="button text--right" type="button">
    Read more
    </button>
  ))
  .add('Next', () => (
    <button className="button text--right" type="button">
      Next
      <br />
      <span className="text--blue">About&nbsp;—</span>
    </button>
  ));
