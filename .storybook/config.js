import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withOptions, setOptions } from '@storybook/addon-options';

const req = require.context('../stories/', true, /\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <div style={{ padding: '66px 99px 66px 66px', maxWidth: '715px' }}>{story()}</div>);
addDecorator(
  withOptions({
    name: 'Charm UI',
    url: '#',
    showAddonPanel: false,
    showSearchBox: false,
    addonPanelInRight: true,
    // TODO: sort
    sortStoriesByKind: true
  })
);
setOptions({
  theme: {
    mainBackground: '#fdfdfd',
    mainBorder: '1px solid rgba(0,0,0,0.05)',
    mainTextFace: '"Inter UI",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    mainTextColor: '#333',
    mainTextSize: '14px',
    dimmedTextColor: '#4a4a4a',
    brand: {
      background: '#fdfdfd',
      //marginBottom: '253px'
    }
  }
});

configure(loadStories, module);