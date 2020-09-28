
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import QuickPortfolio from './QuickPortfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './animations/animations.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush, faStopwatch, faCopy } from '@fortawesome/free-solid-svg-icons';
import { RepoTable } from './RepoTable';

function Portfolio() {
    

    return (
        <Container fluid>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <QuickPortfolio />
                <Row className="justify-content-center">
                    <Col lg={10} className="p-0">

                        <div id="workGrid">

                            <motion.div
                                className="workCard"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}>

                                <FontAwesomeIcon className="cardIcon" icon={faBrush} size="10x" />

                            </motion.div>


                            <motion.div
                                className="workCard"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}>

                                <FontAwesomeIcon className="cardIcon" icon={faStopwatch} size="10x" />

                            </motion.div>
                        
                            
                        </div>
                        <RepoTable/>
                    </Col>
                </Row>
            </motion.div>

        </Container>
    );
}
export default Portfolio



