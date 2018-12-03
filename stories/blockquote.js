import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Blockquote', module)
  .add('Default', () => (
    <blockquote className="blockquote">
      If you’re interested in playing around with React, you can use an online code playground.
      Try a Hello World template on CodePen or CodeSandbox.
      If you prefer to use your own text editor, you can also download this HTML file
    </blockquote>
  ));
