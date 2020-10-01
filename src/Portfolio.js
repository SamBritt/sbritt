
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import QuickPortfolio from './QuickPortfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './animations/animations.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush, faStopwatch, faCopy, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { RepoTable } from './RepoTable';
import { ProjectCard } from './ProjectCard.js';
function Portfolio() {
    const [hovering, setHovering] = useState(false);

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

                        <div id="workGrid"
                            style={{}}>

                            <motion.div
                                onHoverStart={() => setHovering(true)}
                                onHoverEnd={() => setHovering(false)}
                                className="workCard"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                style={{ overflow: "hidden" }}>
                                <AnimatePresence exitBeforeEnter>
                                    {!hovering && (<motion.span style={{position: 'absolute'}}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 1 } }}
                                        exit={{ opacity: 0, y: 40, transition: { duration: 0.6 } }}>
                                        <FontAwesomeIcon className="cardIcon" icon={faBrush} size="10x" />
                                    </motion.span>)}
                                </AnimatePresence>
                                <AnimatePresence exitBeforeEnter>

                                    {hovering && <motion.div style={{ position: 'relative', width: '100%', height: '300px', background: '#262d38', textAlign: 'center', padding: '15px' }}
                                        transition={pageTransition}
                                        initial={{ y: 200, opacity: 0 }}
                                        animate={{ y: 50, opacity: 1, transition: { duration: 0.4, staggerChildren: 1 } }}
                                        exit={{ y: 200, opacity: 0, transition: { duration: 0.6 } }}
                                    >
                                        <motion.div

                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: 5, opacity: 0 }}
                                        >

                                            <h1>Open Sketch</h1>
                                            <p>
                                                XCoach is a management app built for Cross Country and Track coaches.
                                                Coaches can add new runners to the roster, record race results, and create and assign workouts.
                                                XCoach was built to help maximize an athlete's progress and minimize a coach's potential for error.
                                            </p>
                                        </motion.div>
                                    </motion.div>}
                                </AnimatePresence>
                            </motion.div>


                            <motion.div
                                onHoverStart={() => setHovering(true)}
                                onHoverEnd={() => setHovering(false)}
                                className="workCard"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                style={{ overflow: "hidden" }}>
                                <AnimatePresence exitBeforeEnter>
                                    {!hovering && (<motion.span style={{position: 'absolute'}}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 1 } }}
                                        exit={{ opacity: 0, y: 40, transition: { duration: 0.6 } }}>
                                        <FontAwesomeIcon className="cardIcon" icon={faStopwatch} size="10x" />
                                    </motion.span>)}
                                </AnimatePresence>
                                <AnimatePresence exitBeforeEnter>

                                    {hovering && <motion.div style={{ position: 'relative', width: '100%', height: '300px', background: '#262d38', textAlign: 'center', padding: '15px' }}
                                        transition={pageTransition}
                                        initial={{ y: 200, opacity: 0 }}
                                        animate={{ y: 50, opacity: 1, transition: { duration: 0.4, staggerChildren: 1 } }}
                                        exit={{ y: 200, opacity: 0, transition: { duration: 0.6 } }}
                                    >
                                        <motion.div

                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: 5, opacity: 0 }}
                                        >

                                            <h1>XCoach</h1>
                                            <p>
                                                XCoach is a management app built for Cross Country and Track coaches.
                                                Coaches can add new runners to the roster, record race results, and create and assign workouts.
                                                XCoach was built to help maximize an athlete's progress and minimize a coach's potential for error.
                                            </p>
                                        </motion.div>
                                    </motion.div>}
                                </AnimatePresence>
                            </motion.div>


                        </div>
                        <RepoTable />
                    </Col>
                </Row>
            </motion.div>

        </Container>
    );
}
export default Portfolio



