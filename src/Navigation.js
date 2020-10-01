import React, { Fragment, useState, useEffect } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Col, Nav, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faPencilRuler, faFolderOpen, faMobileAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import { NavTitle } from './NavTitle';



function Navigation({ location }) {
    const [navText, setNavText] = useState("");
    const [activeNavText, setActiveNavText] = useState("");
    const [isOpen, toggleOpen] = useState(true);
    const [hovering, isHovering] = useState(false);
    const theHandOff = (e) => {
        isHovering(!isHovering);

        console.log(e)
    }
    useEffect(() => {

        let output = '';
        if (location.pathname === "/") {
            output = location.pathname.substr(1) + "home";
        } else {
            output = `${location.pathname.substr(1)}`
        }
        setActiveNavText(output)

    }, [location.pathname])

    return (
        <Fragment>
            <Col md={1} lg={1} id="sidebar">

                <Nav activeKey="/">

                    <ListGroup className="list-unstyled components" variant="flush">

                        <motion.div
                            value="home"
                            onClick = {() => setActiveNavText('home')}
                            onHoverStart={() => {
                                isHovering(true);
                                setNavText('home');
                            }}
                            onHoverEnd={() => {
                                isHovering(false)
                                setNavText('')
                            }}
                        >
                            <ListGroup.Item >
                                <LinkContainer exact to='/' >
                                    <motion.a
                                        className="spin navIcon" ><FontAwesomeIcon icon={faHome} /></motion.a>
                                </LinkContainer>
                            </ListGroup.Item>
                        </motion.div>

                        <motion.div
                            name="work"
                            onClick = {() => setActiveNavText('work')}
                            onHoverStart={() => {
                                isHovering(true);
                                setNavText('work');
                            }}
                            onHoverEnd={() => {
                                isHovering(false)
                                setNavText('')
                            }}
                        >
                            <ListGroup.Item >
                                <LinkContainer to='/work'>
                                    <motion.a
                                        className="spin navIcon"  ><FontAwesomeIcon icon={faBuilding} /></motion.a>
                                </LinkContainer>
                            </ListGroup.Item>
                        </motion.div>

                        <motion.div
                            name="portfolio"
                            onClick = {() => setActiveNavText('portfolio')}
                            onHoverStart={() => {
                                isHovering(true);
                                setNavText('portfolio');
                            }}
                            onHoverEnd={() => {
                                isHovering(false)
                                setNavText('')
                            }}
                        >
                            <ListGroup.Item >
                                <LinkContainer to='/portfolio'>
                                    <motion.a
                                        className="spin navIcon" ><FontAwesomeIcon icon={faFolderOpen} /></motion.a>
                                </LinkContainer>
                            </ListGroup.Item>
                        </motion.div>

                        <motion.div
                            name="art"
                            onClick = {() => setActiveNavText('art')}
                            onHoverStart={() => {
                                isHovering(true);
                                setNavText('art');

                            }}
                            onHoverEnd={() => {
                                isHovering(false)
                                setNavText('')
                            }}
                        >
                            <ListGroup.Item >
                                <LinkContainer to='/art' >
                                    <motion.a
                                        className="spin navIcon" ><FontAwesomeIcon icon={faPencilRuler} /></motion.a>
                                </LinkContainer>
                            </ListGroup.Item>
                        </motion.div>

                        <motion.div
                            name="contact"
                            onClick = {() => setActiveNavText('contact')}
                            onHoverStart={() => {
                                isHovering(true);
                                setNavText('contact');

                            }}
                            onHoverEnd={() => {
                                isHovering(false)
                                setNavText('')
                            }}
                        >
                            <ListGroup.Item >
                                <LinkContainer to='/contact' >
                                    <motion.a
                                        className="spin navIcon" ><FontAwesomeIcon icon={faMobileAlt} /></motion.a>
                                </LinkContainer>
                            </ListGroup.Item>
                        </motion.div>
                    </ListGroup>

                </Nav>
                <AnimatePresence exitBeforeEnter>

                    <div
                        className="navTextContainer"
                    >
                        {hovering && (

                            <NavTitle activeNavText = {activeNavText} navText={navText} hovering={hovering} />
                        )
                        }
                    </div>

                </AnimatePresence>

            </Col>
        </Fragment>
    )
}

export default Navigation;