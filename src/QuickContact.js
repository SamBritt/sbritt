
import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { motion } from 'framer-motion';
import meSmile from './images/MeSmiling.jpg'
import { cardVariants } from './animations/animations.js' 

function QuickContact() {

    return (
        <motion.div
            variants = {cardVariants}>

            <Row className="justify-content-center">
                <Col lg={10} className="mainContentHeader">
                    <h1>Contact</h1>
                    <motion.hr style ={{border: '1px solid #47748b'}}
                    initial={{width: '33%', margin: '0% 20% 0% 20%'}}
                    animate={{width: '33%', margin: '0% 33% 0% 33%' }}/>
                    <div className = "cardTextOutline">
                        <p>Interested in hiring me? Click the button below to contact me, or email me at</p>
                        <p>sam.britt2@yahoo.com</p>
                    </div>
                    <div>
                        <motion.button
                            className="linkButton"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>Contact Me</motion.button>
                    </div>
                </Col>
            </Row>

        </motion.div>
    );
}

export default QuickContact;