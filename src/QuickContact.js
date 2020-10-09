
import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { motion } from 'framer-motion';
import meSmile from './images/MeSmiling.jpg'

function QuickContact() {

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: 20, transition: { duration: 1 } }}>

            <Row className="justify-content-center">
                <Col lg={10} className="mainContentHeader">
                    <h1>Contact</h1>
                    <motion.hr style ={{border: '1px solid #47748b'}} 
                        initial={{width: 0, marginRight: '100%'}}
                        animate ={{width: '100%',marginRight: 0, transition: {duration: 0.6}}}/>
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