import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { navTextVariants, navTextStyle, pageTransition} from './animations/animations.js';

export const NavTitle = ({ activeNavText, navText, hovering}) => (

    
        <motion.h1
            id="navTextBold"
            key="ttt"
            variants={navTextVariants}
            initial = 'initial'
            animate= {hovering ? 'show' : 'hide'}
            exit='hide'
            style = {navText === activeNavText ? navTextStyle.activated :  navTextStyle.idol}
            transition={pageTransition}
        >
            {navText}
        </motion.h1>
    
    
)


