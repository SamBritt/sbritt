
import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { motion } from 'framer-motion';


function QuickPortfolio() {

    return (
        <motion.div>
            <Row className="justify-content-center">
                <Col lg={10} className = "mainContentHeader">
                    <h1>Portfolio</h1>
                    <motion.hr style ={{border: '1px solid #47748b'}} 
                        initial={{width: 0, marginRight: '100%'}}
                        animate ={{width: '100%',marginRight: 0, transition: {duration: 0.6}}}/>
                    <div className="cardTextOutline">
                        <p>Not all projects and repositories are listed below. Below you will see XCoach and Open Sketch.
                        Open Sketch is currently my main side-project</p>
                        <p>If you would like to see more projects, head over to my GitHub page.</p>
                    </div>
                </Col>
            </Row>
        </motion.div>
    );
}

export default QuickPortfolio;