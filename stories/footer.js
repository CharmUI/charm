import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Footer } from '../src/layout';

const prevRoute = {
  path: '/',
  name: 'Getting Started',
};

const nextRoute = {
  path: '/',
  name: 'About',
};

const onFooterLinkClick = () => {};

storiesOf('Footer', module)
  .addDecorator(withInfo)
  .add('Default', () => (
    <Footer
      prevRoute={prevRoute}
      nextRoute={nextRoute}
      onFooterLinkClick={onFooterLinkClick}
    />
  ));
