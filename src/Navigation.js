import React, { Fragment, Component, useState, useEffect } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import meSmile from './images/ME.jpg'
import { Navbar, Col, Nav, Image, Button, NavItem, ListGroup, ListGroupItem } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBuilding, faPencilRuler, faFolderOpen, faMobileAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion';
import { NavTitle } from './NavTitle';
import { useLocation } from 'react-router-dom';
function Navigation({ location }) {
    const [navText, setNavText] = useState("");
    const [activeNavText, setActiveNavText] = useState("");
    const hey = useLocation();

    const theHandOff = ({ location }) => {

    }
    useEffect(() => {
        console.log(1.5 % 0.2)
        let output = '';
        if (location.pathname === "/") {
            output = location.pathname.substr(1) + "home";
        } else {
            output = `${location.pathname.substr(1)}`
        }
        setActiveNavText(output)
        console.log(hey)
    }, [location.pathname])

    return (
        <Fragment>
            <Col md={1} lg={1} id="sidebar">

                <Nav activeKey="/">

                    <ListGroup className="list-unstyled components" variant="flush">
                        <ListGroup.Item >
                            <LinkContainer exact to='/' >
                                <Nav.Link name="home" className="spin navIcon" ><FontAwesomeIcon icon={faHome} /></Nav.Link>
                            </LinkContainer>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <LinkContainer to='/work'>
                                <Nav.Link value="work" className="spin navIcon"  ><FontAwesomeIcon icon={faBuilding} /></Nav.Link>
                            </LinkContainer>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <LinkContainer to='/portfolio'>
                                <Nav.Link value="portfolio" className="spin navIcon" ><FontAwesomeIcon icon={faFolderOpen} /></Nav.Link>
                            </LinkContainer>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <LinkContainer to='/art' >
                                <Nav.Link value="art" className="spin navIcon" ><FontAwesomeIcon icon={faPencilRuler} /></Nav.Link>
                            </LinkContainer>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <LinkContainer to='/contact' >
                                <Nav.Link value="contact" className="spin navIcon" ><FontAwesomeIcon icon={faMobileAlt} /></Nav.Link>
                            </LinkContainer>
                        </ListGroup.Item>
                    </ListGroup>

                </Nav>
                <AnimatePresence >
                    <motion.div className="navTextContainer">
                        
                            {activeNavText && (
                                <NavTitle activeNavText={activeNavText} />
                            )}
                        
                    </motion.div>
                </AnimatePresence>

            </Col>
        </Fragment>
    )
}

export default Navigation;