export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -10
  }
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3
};

export const pageStyle = {
  position: "absolute"
};
export const cardVariants ={
  initial:{ x: 20, opacity: 0 },
  in:{ x: 0, opacity: 1, transition: { duration: 1 } },
  out:{ x: 20, opacity: 0, transition: { duration: 1 } }
}

