import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

export default ProgressBar;
