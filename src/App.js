import React, { Fragment, useState, useEffect} from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Work from './Work';
import Contact from './Contact';
import About from './About';
import Art from './Art';
import Portfolio from './Portfolio';
import Navigation from './Navigation';
import {Col } from 'react-bootstrap'
import { AnimatePresence } from 'framer-motion'
import "typeface-montserrat";

function App() {
  const location = useLocation();
  
  const [repos, setRepos] = useState([{}])
    const [loading, setloading] = useState(true);


    useEffect(() => {
        let mounted = true;

        fetch("https://api.github.com/users/SamBritt/repos?per_page=10")
            .then(res => res.json())
            .then((data) => {
                if (mounted) {
                    setloading(false);
                    setData(data);
                }
            });

        return function cleanup() {
            mounted = false
        }
    }, [])

    const setData = (repos) => {
        setRepos(repos)
    }

  return (
    <Fragment>
      <div id="backgroundWrapper">
        <div className="wrapper">
          <AnimatePresence exitBeforeEnter>
            <Navigation location={location} />
          </AnimatePresence>

          <Col sm={{ span: 11, offset: 1 }} id="content">

            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/portfolio" component = {() => <Portfolio repos = {repos} />} />
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
