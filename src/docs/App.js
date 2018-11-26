import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import Main from './mdx/main.mdx';
import { Heading } from '../components/index';

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
    <>
      <Helmet>
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
    </>
  );
}
