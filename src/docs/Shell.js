import { Helmet } from 'react-helmet';

export default function Shell({ children }) {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Charm</title>
      </Helmet>

      <div className="layout">
        {children}
      </div>

      <nav className="nav">
        <ul className="list--inline list--style-none">
          <li className="text--secondary"><small className="small">v16.7.0</small></li>
          <li className="text--secondary"><small className="small">Getting Started</small></li>
          <li className="text--light"><small className="small">20th November</small></li>
        </ul>
      </nav>

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
