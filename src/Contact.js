
import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './animations/animations.js';
function Contact() {
    return (
        <Container fluid>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}>

                <Row className="justify-content-center">
                    <Col md={10} className="p-0 formOutline">
                        <Row className="justify-content-center">
                            <Col style={{
                                textAlign: 'center',
                                borderRight: '0.5px solid #47748b',
                                padding: '1.6rem'
                            }} md={6}>
                                <h2>Leave a message below</h2>

                            </Col>
                            <Col style={{ 
                                textAlign: 'center', 
                                borderLeft: '0.5px solid #47748b',
                                padding: '1.6rem'
                             }} md={6}>
                                <h2>Reach Out</h2>
                                <ul>
                                    <li>Phone</li>
                                    <li>Email</li>
                                    <li>Linkedin</li>
                                    <li>GitHub</li>
                                </ul>
                            </Col>
                        </Row>
                        <motion.hr style={{ border: '1px solid #47748b' }}
                            initial={{ width: 0, margin: '0% 100% 0% 0%' }}
                            animate={{ width: '100%', margin: '0% 0% 0% 0%', transition: { duration: 0.6 } }} />
                        <Row>
                            <Col md={{ span: 8, offset: 2 }}>
                                <form id="contactForm">
                                    <div>
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" name="firstName" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" name="lastName" />
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