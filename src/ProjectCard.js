import { useState } from 'react';
import React from 'react'
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './animations/animations.js';

export const ProjectCard = ({hovering, setHovering}) => (
    <motion.div
                                onHoverStart={() => setHovering(true)}
                                onHoverEnd={() => setHovering(false)}
                                className="workCard"
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                style={{ overflow: "hidden" }}>

                                <AnimatePresence exitBeforeEnter>

                                    {hovering && <motion.div style={{ position: 'relative', width: '100%', height: '200px', background: '#262d38', textAlign: 'center' }}
                                        transition={pageTransition}
                                        initial={{ y: 200, opacity: 0 }}
                                        animate={{ y: 100, opacity: 1, transition: { duration: 0.4 } }}
                                        exit={{y:200, opacity: 0, transition:{duration: 0.6}}}
                                    >
                                        <motion.div 
                                            
                                              animate={{y:0, opacity: 1}}
                                              exit={{y: 5, opacity: 0}}  
                                        >
                                            <h1>XCoach</h1>
                                            <p>lorem ipsum</p>
                                        </motion.div>
                                    </motion.div>}
                                </AnimatePresence>
                            </motion.div>
)