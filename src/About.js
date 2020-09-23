
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import QuickAbout from './QuickAbout';
import { pageTransition, pageVariants, pageStyle } from './animations/animations.js';
import { Scroll } from 'framer';
function About() {

    return (
        <Container fluid>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <QuickAbout />
                <Row className="justify-content-center">
                    <Col lg={10} className = "p-0">
                        <div>
                            <p>
                                I am a Software Developer currently working on web applications and websites. I have been developing professionally for around 2 years. Since I was little, I have had an innate passion for art and design, which I've mostly fulfilled through drawing and painting. Yet over the years, the more I tinkered with code, the more I realized I was tapping into the same creative processes as I did when working with traditional mediums. Software Development is just another one of those mediums. It's a fun, rewarding experience that I am glad to have as a tool and career.
                            </p>
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </Container>
    );
}

export default About;