export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5
    }
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
export const cardVariants = {
  initial: { x: 20, opacity: 0 },
  in: { x: 0, opacity: 1},
  out: { x: 20, opacity: 0}
}

export const navTextVariants = {
  initial: {
    opacity: 0,
    x:0
  },
  show: {
    opacity: 1,
    x: 60,
    transition: {duration: 0.5}
  },
  hide: {
    x:0,
    opacity: 0,
    transition: {duration: 0.5}
  }
}

export const navTextStyle = {
  activated:{
    WebkitTextStroke: '0.4px rgba(188, 219, 114, 1)'
  },
  idol:{
    WebkitTextStroke: '0.4px #47748b'
  }
}
export const cardSlide = {
  slide: {
    
  }
}

