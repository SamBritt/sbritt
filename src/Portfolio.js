
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

function Portfolio({repos}) {

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
                        <h1>Featured Projects</h1>
                        <motion.hr style ={{border: '1px solid #47748b'}} 
                        initial={{width: 0, marginRight: '100%'}}
                        animate ={{width: '100%',marginRight: 0, transition: {duration: 0.6}}}/>
                        <div id="workGrid">

                            {
                                cardData.map((data, idx) => {
                                    return <WorkCard key = {idx} {...data}/>
                                })
                            }

                        </div>
                        <h1>Github Repositories</h1>
                        <hr style ={{border: '1px solid #47748b'}} />
                        <RepoTable repos = {repos}/>
                    </Col>
                </Row>
            </motion.div>

        </Container>
    );
}
export default Portfolio



