import React, { Fragment } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import meSmile from './images/ME.jpg'
import { Navbar, Col, Nav, Image, Button, NavItem, ListGroup, ListGroupItem } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBuilding, faPencilRuler, faFolderOpen, faMobileAlt, faHome } from '@fortawesome/free-solid-svg-icons'

function Navigation(props) {

    return (
        <Fragment>
            <Col md = {1} lg={1} id="sidebar">
                <Nav activeKey="/">
               
                    <ListGroup className="list-unstyled components" variant="flush">
                        <ListGroup.Item>
                            <LinkContainer exact to='/' >
                                <Nav.Link className = "spin navIcon"><FontAwesomeIcon icon={faHome}/></Nav.Link>
                            </LinkContainer>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <LinkContainer to='/work'>
                                <Nav.Link className = "spin navIcon" >
                                    <FontAwesomeIcon icon={faBuilding} />
                                </Nav.Link>
                            </LinkContainer>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <LinkContainer to='/portfolio'>
                                <Nav.Link className = "spin navIcon"><FontAwesomeIcon icon={faFolderOpen} /></Nav.Link>
                            </LinkContainer>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <LinkContainer to='/art' >
                                <Nav.Link className = "spin navIcon"><FontAwesomeIcon icon={faPencilRuler} /></Nav.Link>
                            </LinkContainer>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <LinkContainer to='/contact' >
                                <Nav.Link className = "spin navIcon"><FontAwesomeIcon icon={faMobileAlt} /></Nav.Link>
                            </LinkContainer>
                        </ListGroup.Item>
                    </ListGroup>
                </Nav>
            </Col>
        </Fragment>
    )
}

export default Navigation;