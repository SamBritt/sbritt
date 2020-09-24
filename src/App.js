import React, { Fragment, useEffect } from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Work from './Work';
import Contact from './Contact';
import About from './About';
import Art from './Art';
import Portfolio from './Portfolio';
import Navigation from './Navigation';
import { Container, Col } from 'react-bootstrap'
import { AnimatePresence } from 'framer-motion'
import "typeface-montserrat";

function App() {
  const location = useLocation();

  useEffect(() => {
    fetch("https://api.github.com/users/SamBritt")
      .then(res => res.json())
      .then(data => console.log(data))

  }, [])

  return (
    <Fragment>
      <div id="backgroundWrapper">
        <div className="wrapper">
          <Navigation location = {location}/>

          <Col sm={{ span:11, offset: 1 }} id="content">

            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/art" component={Art} />

                <Route path="/contact" component={Contact} />
              </Switch>
            </AnimatePresence>
          </Col>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
