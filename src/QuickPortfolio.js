
import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { cardVariants } from './animations/animations.js'

function QuickPortfolio() {

    return (
        <motion.div variants = {cardVariants}>
            <Row className="justify-content-center">
                <Col lg={10} className = "mainContentHeader">
                <div className = "justify-content-center">
                <h1>Portfolio</h1>
                <motion.hr style ={{border: '1px solid #47748b', width: '33%', marginLeft: '33%'}}/>
                </div>
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