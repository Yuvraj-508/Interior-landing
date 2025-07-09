// src/components/ScrollFadeIn.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollFadeIn = ({ children, delay = 0 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.6 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : {}
      }
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
