import { useState } from 'react';
import React from 'react'
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './animations/animations.js';
import { faBrush, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function WorkCard({ id, title, description }) {

    const [hovering, setHovering] = useState(false);

    const iconPick = (title) => {
        switch (title) {
            case 'Open Sketch':
                return faBrush

            case 'XCoach':
                return faStopwatch
            default:
                return {}
        }
    }

    return (
        <motion.div
            onHoverStart={() => setHovering(true)}
            onHoverEnd={() => setHovering(false)}
            className="workCard"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            style={{ overflow: "hidden" }}>
            <AnimatePresence exitBeforeEnter>
                {!hovering && (<motion.span style={{ position: 'absolute' }}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, staggerChildren: 1 } }}
                    exit={{ opacity: 0, scale: 0.4, transition: { duration: 0.6 } }}>
                    <FontAwesomeIcon className ="cardIcon" icon={iconPick(title)} size = "10x"/>
                </motion.span>)}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>

                {hovering && <motion.div style={{ position: 'relative', width: '100%', height: '300px', background: '#262d38', textAlign: 'center', padding: '15px' }}
                    transition={pageTransition}
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 50, opacity: 1, transition: { duration: 0.4, staggerChildren: 1 } }}
                    exit={{ y: 200, opacity: 0, transition: { duration: 0.6 } }}>

                    <motion.div animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </motion.div>
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}

export default WorkCard;

