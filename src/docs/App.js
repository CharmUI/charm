import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

export default function () {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Charm</title>
      </Helmet>
      
      <div className="layout">
        <nav className="nav">
          <ul className="list list--inline list--style-none">
            <li className="list__item text--secondary"><small className="small">v16.7.0</small></li>
            <li className="list__item text--secondary"><small className="small">Getting Started</small></li>
            <li className="list__item text--light"><small className="small">20th November</small></li>
          </ul>
        </nav>

        <div className="content">
          <h1 className="h1">
            Getting Started
            <p className="lead text--light margin-top--1">This page is an overview of the React documentation and related resources.</p>
          </h1>
      
          <hr className="hr" />
          <p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
      
          <h2 className="h2">Try React</h2>
      
          <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
          
          <h3 className="h3">More on react</h3>
          <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
      
          <h3 className="h3">Learn react</h3>
          <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
      
          <ul className="list">
            <li>If you prefer to <span className="strong">learn by doing</span>, start with our practical <a href="" className="link">tutorial</a>.</li>
            <li className="list-item--style-none">
              <ul className="list">
                <li>If you prefer to <span className="strong">learn by doing</span>, start with our practical <a href="" className="link">tutorial</a>.</li>
              </ul>
            </li>
            <li>If you prefer to <span className="strong">learn concepts step</span> by step, start with our guide <a href="" className="link">to main concepts</a>.</li>
          </ul>
      
          <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>

          <blockquote className="blockquote">
            <p>If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen or CodeSandbox. If you prefer to use your own text editor, you can also download this HTML file</p>
          </blockquote>
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
      </div>

      <div className="aside">
        <div className="aside__logo">
          <small className="small text--bold">React Library</small>
        </div>

        <ul className="list--aside">
          <li className="list-item--style-none"><a href="" className="link link_main is-active">Getting started</a></li>
          <li className="list-item--style-none">
            <ul className="list--aside margin-bottom--1">
              <li><a href="" className="link link_main link_small">Try React</a></li>
              <li className="list-item--style-none">
                <ul className="list--aside">
                  <li><a href="" className="link link_main link_small">More on react</a></li>
                  <li><a href="" className="link link_main link_small">Work with react</a></li>
                  <li><a href="" className="link link_main link_small">Contributions</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="list-item--style-none"><a href="" className="link link_main">Contributions</a></li>
          <li className="list-item--style-none"><a href="" className="link link_main">GitHub</a></li>
        </ul>
      </div>
    </Fragment>
  );
}
