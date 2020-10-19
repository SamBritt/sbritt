
import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './animations/animations.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { SocialIcon } from './SocialIcon';

function Contact() {
    const [hovering, setHovering] = useState(false);
    return (
        <Container fluid>
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <Row className="justify-content-center">
                    <Col md={10} className="mainContentHeader">
                        
                                <div style={{ padding: '1.6rem' }}>
                                    <div style={{ paddingBottom: '1.6rem' }}>
                                        <h1>Contact</h1>
                                        <hr style={{ border: '1px solid #47748b', width: '33%', margin: '0% 33% 0% 33%' }} />
                                    </div>
                                    <p className="cardTextOutline">Do you have a project that needs fixin' or makin'? Need a developer that can create both a beautiful site <u>and</u> hook it up with live data?
                                    Whether it's Interface/Experience design, animations, custom graphics or logos, backend integrations – I'm the guy for you. </p>
                                </div>

                                <ul className="socialList">
                                    <li>
                                        <SocialIcon key={'phone'} info={'(615)719-1123'} icon={faMobileAlt} />
                                    </li>
                                    <li>
                                        <SocialIcon key={"email"} info={'sam.britt2@yahoo.com'} icon={faEnvelope}/>

                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sam-britt/">
                                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/SamBritt?tab=repositories">
                                            <FontAwesomeIcon icon={faGithub} size="2x" />
                                        </a>
                                    </li>
                                </ul>

                        <hr style={{ border: '1px solid #47748b', width: '100%', margin: '0%' }}/>

                        <Row>
                            <Col md={{ span: 8, offset: 2 }}>
                                <form id="contactForm">
                                    <div>
                                        <label htmlFor="messageName">Name</label>
                                        <input type="text" id="messageName" name="messageName"/>
                                    </div>

                                    <label htmlFor="emailHeading">Heading</label>
                                    <input type="text" id="emailHeading" name="emailHeading" />

                                    <label htmlFor="message">Message</label>
                                    <textarea style={{ height: '200px' }} id="message" name="message" placeholder="How can I help?" />
                                </form>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </motion.div>
        </Container>
    );
}

export default Contact;