
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import QuickPortfolio from './QuickPortfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './animations/animations.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush, faStopwatch, faCopy, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { RepoTable } from './RepoTable';

import cardData from './data/cardData.js';
import WorkCard from './WorkCard';

function Portfolio() {

    return (
        <Container fluid>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}>

                <QuickPortfolio />
                <Row className="justify-content-center">
                    <Col lg={10} className="p-0">

                        <div id="workGrid">

                            {
                                cardData.map((data, idx) => {
                                    return <WorkCard key = {idx} {...data}/>
                                })
                            }

                        </div>
                        <RepoTable />
                    </Col>
                </Row>
            </motion.div>

        </Container>
    );
}
export default Portfolio



