import React from 'react';
import './App.css';
import { Container, ResponsiveEmbed, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import resume from './images/SamuelBrittResume.pdf'
import QuickContact from './QuickContact.js';
import { pageTransition, pageVariants, pageStyle } from './animations/animations.js';
function Work(props) {

    return (
        // Render a Thumbnail component
        <Container fluid>
            <motion.div

                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}>
                <QuickContact />
                <Row className="justify-content-center">
                    <Col lg={10} className="p-0">
                        <ResponsiveEmbed aspectRatio="16by9" style={{ height: '100%' }}>
                            <embed src={resume} />
                        </ResponsiveEmbed>
                    </Col>
                </Row>
            </motion.div>
        </Container>

    )
}

export default Work;