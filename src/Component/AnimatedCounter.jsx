// src/components/AnimatedCounter.jsx
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const AnimatedCounter = ({ end }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // 60% visible
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    }
  }, [isInView]);

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-5xl dm font-medium"
    >
      {startCount ? <CountUp end={end} duration={1} /> : "0"}+
    </motion.h2>
  );
};

export default AnimatedCounter;

