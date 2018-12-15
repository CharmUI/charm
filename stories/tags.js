import React from 'react';
import { storiesOf } from '@storybook/react';

import '../src/css/tags/all.css';

storiesOf('1. Tags', module)
  .add('All', () => (
    <div>
      <h1>
        Getting Started
        <p className="lead text--color--light margin-top--1">This page is an overview of the React documentation and related resources.</p>
      </h1>
      <hr />
      <p>
        React is a JavaScript library for building user interfaces.
        Learn what React is all about on our homepage or in the tutorial.
      </p>
      <h2>Try React</h2>
      <p>
        React has been designed from the start for gradual adoption, and
        you can use as little or as much React as you need.
        Whether you want to get a taste of React, add some interactivity
        to a simple HTML page, or start a complex React-powered app,
        the links in this section will help you get started.
      </p>
      <blockquote>
        If you’re interested in playing around with React, you can use an online code playground.
        Try a Hello World template on CodePen or CodeSandbox.
        If you prefer to use your own text editor, you can also download this HTML file
      </blockquote>
      <h3>More on react</h3>
      <p>
        React has been designed from the start for gradual adoption, and
        you can use as little or as much React as you need.
        Whether you want to get a taste of React, add some interactivity
        to a simple HTML page, or start a complex React-powered app,
        the links in this section will help you get started.
      </p>
      <ul>
        <li>If you prefer to <strong>learn by doing</strong>, start with our practical <a href="http://example.net/">tutorial</a>.</li>
        <li>If you prefer to <strong>learn concepts step</strong> by step, start with our guide <a href="http://example.net/">to main concepts</a>.</li>
      </ul>
    </div>
  ));
