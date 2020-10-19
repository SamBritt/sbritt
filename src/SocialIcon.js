import React, { useState } from 'react'
import { motion } from 'framer-motion';
import {Tooltip} from './Tooltip'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function SocialIcon({ icon, tooltipKey, info }) {
    const [hovering, setHovering] = useState(false);
    return (
        <motion.div style={{ position: 'relative', textAlign: 'center' }}
            onHoverStart={() => setHovering(hovering => !hovering)}
            onHoverEnd={() => setHovering(hovering => !hovering)}>
            <Tooltip key={tooltipKey} info={info} hovering={hovering} />
            <span>
            <FontAwesomeIcon icon={icon} size="2x" />
            </span>
        </motion.div>
    )

}
