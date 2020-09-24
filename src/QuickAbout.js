
import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { motion } from 'framer-motion';
import meSmile from './images/MeSmiling.jpg'
import { cardVariants } from './animations/animations.js'

function QuickAbout() {

    return (
        <motion.div
            variants={cardVariants}>
            <Row className="justify-content-center">
                <Col md={10} className="mainContentHeader">
                    <Row className="justify-content-center">
                        <Col md={4} className ="mainImageWrapper">
                            <Image src={meSmile} fluid style={{ maxWidth:'200px', minWidth: 'auto', minHeight: '200px', objectFit: 'cover', borderRadius: '100%', padding: '5px' }} />
                        </Col>
                        <Col md={10} lg={8}>

                            <h1>Samuel James Britt</h1>
                            <p>Software Developer</p>
                            
                            <div id="quickAboutDesc" className="cardTextOutline">
                                <p>I am a full stack developer specialising in frontend development. Creating works of art is my passion. Whatever medium I may choose – UI/UX and frontend design, paint, clay, metal; I can't keep my hands from tinkering, fixing, building, and creating. Check out my Portfolio and Art section for more!</p>
                            </div>
                            <div>

                                <motion.button
                                    className="linkButton"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}>
                                    Portfolio
                            </motion.button>
                                <motion.button
                                    className="linkButton"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}>
                                    Resume
                            </motion.button>


                            </div>
                        </Col>

                    </Row>


                </Col>
            </Row>
        </motion.div>
    );
}

export default QuickAbout;