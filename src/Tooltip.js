import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

export const Tooltip = ({ hovering, key, info }) => {
    return (
        <AnimatePresence>
            {

                hovering && (

                    <motion.span
                        key={key}
                        style={{ position: 'absolute', display: 'inline', left: 0, right: 0, textAlign: 'center', whiteSpace: 'nowrap'}}
                        initial={{ opacity: 0, height: '100%', y: -25, x: -40 }}
                        animate={{ opacity: 1, height: '100%', y:-30}}
                        exit={{opacity: 0, y: -25}}>
                        {info}
                    </motion.span>
                )

            }
        </AnimatePresence>
    )
}