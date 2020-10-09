import { useState } from 'react';
import React from 'react'
import './App.css';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
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
                onHoverStart={() => setHovering(hovering => !hovering)}
                onHoverEnd={() => setHovering(hovering => !hovering)}
                className="workCard"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                style={{ overflow: "hidden", position: 'relative' }}>


                <motion.span key='pp' style={{ position: 'absolute' }}
                    initial={{ opacity: 0, x: 0, marginRight: 0 }}
                    animate={{ opacity: 1, x: 0, scale: hovering ? 0.7 : 1, marginRight: hovering ? '50%' : 0, transition: { type: "tween", ease: "anticipate", duration: 0.5, staggerChildren: 1 } }}
                >
                    <FontAwesomeIcon className="cardIcon" icon={iconPick(title)} size="10x" />
                </motion.span>
                <motion.div style={{ position: 'absolute', height: '100%', background: '#262d38' }}
                    transition={pageTransition}
                    initial={{ width: 0, right: 0, marginLeft: '100%' }}
                    animate={{ width: hovering ? '50%' : 0, marginLeft: hovering ? 0 : '50%', opacity: 1, transition: { type: "tween", ease: "anticipate", duration: 0.5, staggerChildren: 1 } }}
        
                >
                    <motion.div style={{ padding: '20px' }} animate={{ y: 0, opacity: hovering ? 1 : 0, transition: { delayChildren: 1 } }}>
                        <h1 style={{ textOverflow: "clip", whiteSpace: "nowrap" }}>{title}</h1>
                        <hr style={{ border: '1px solid #47748b' }} />
                        <motion.p animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ textOverflow: "ellipsis"}}>{description}</motion.p>
                    </motion.div>


                </motion.div>

            </motion.div>

    )
}

export default WorkCard;

