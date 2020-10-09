
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import QuickAbout from './QuickAbout';
import { pageTransition, pageVariants, pageStyle } from './animations/animations.js';
import { Scroll } from 'framer';
function About() {


    return (
        <Container fluid>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <QuickAbout />
                
            </motion.div>
        </Container>
    );
}

export default About;