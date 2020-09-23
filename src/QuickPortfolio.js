
import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { motion } from 'framer-motion';


function QuickPortfolio() {

    return (
        <motion.div>
            <Row className="justify-content-center">
                <Col lg={10} className = "mainContentHeader">
                    <h1>Portfolio</h1>
                    <div>
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