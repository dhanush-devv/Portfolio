import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amount = 0.15,
}) => {
  const offset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
