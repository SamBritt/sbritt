
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
                    <Col lg={10} className="p-0">
                        <form id="contactForm">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" />

                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" />

                            <label htmlFor="emailHeading">Heading</label>
                            <input type="text" id="emailHeading" name="emailHeading" />

                            <label htmlFor="message">Message</label>
                            <textarea style={{ height: '200px' }} id="message" name="message" placeholder="How can I help?" />
                        </form>
                    </Col>
                </Row>

            </motion.div>
        </Container>
    );
}

export default Contact;