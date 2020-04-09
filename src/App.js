import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Icon from 'react-feather';

import './App.scss';

import Home from './components/Screens/home';
import Services from './components/Screens/Services';

import Navbar from './components/navbar';
import Links from './components/links';
import FAQ from './components/faq';
import Banner from './components/banner';
import PatientDB from './components/patientdb';
import DeepDive from './components/deepdive';

const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
    },
    // {
    //   pageLink: '/demographics',
    //   view: PatientDB,
    //   displayName: 'Demographics',
    //   animationDelayForNavbar: 0.3,
    // },
    {
      pageLink: '/services',
      view: Services,
      displayName: 'Services',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Helpful Links',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/faq',
      view: FAQ,
      displayName: 'About',
      animationDelayForNavbar: 0.5,
    },
  ];

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              {/* <Banner /> */}
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
            </div>
          )}
        />
      </Router>

      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        {/* <img
          src="/icon.png"
          alt="https://www.covid19india.org | Coronavirus cases live dashboard"
        /> */}

        <h5>Powered by:</h5>
        <a
          href="http://enrootmumbai.in/"
          className="button enroot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="emlogo.png"
            alt="Enroot Mumbai"
            style={{width:'60%',height:'60%'}}
          />
          {/* <span>Enroot Mumbai</span> */}
        </a>
        <h5>Inspired by:</h5>
        <a
          href="https://www.covid19india.org/"
          className="button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Icon.GitHub /> */}
          <span>Covid 19 India</span>
        </a>

        <h5>Join the volunteers:</h5>
        <a
          href="https://chat.whatsapp.com/LUE5qRKSkm7ERVZqrbokV7"
          className="button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>WhatsApp Group</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
