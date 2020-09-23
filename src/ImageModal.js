import * as React from "react";
import { motion } from "framer-motion";

const shade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.15 } }
};

export default function ImageModal({ close }) {
  return (
    <motion.div initial="hidden" animate="visible" exit="hidden">
      <motion.div
        variants={shade}
        transition={{ duration: 0.2 }}
        className="modal-shade"
        onClick={close}
      />
      <div className="modal-container">
        <motion.div className="modal" variants={modal} />
      </div>
    </motion.div>
  );
}
