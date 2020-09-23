
import React from 'react'
import { Container } from 'react-bootstrap';
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
                <div className ="mainContentHeader">
                    <form id = "contactForm">
                        <label htmlFor="firstName">First Name</label>
                        <input type = "text" id="firstName" name="firstName"/>
                        <label htmlFor="lastName">Last Name</label>
                        <input type = "text" id="lastName" name="lastName"/>
                        <label htmlFor="emailHeading">Heading</label>
                        <input type = "text" id="emailHeading" name="emailHeading"/>
                        <label htmlFor="message">Message</label>
                        <input type = "text" id="message" name="message"/>
                    </form>
                </div>
            </motion.div>
        </Container>
    );
}

export default Contact;