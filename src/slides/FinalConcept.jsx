// src/slides/FinalConcept.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const FinalConcept = () => {
  const items = [
    '🌐 Social Network',
    '🏘️ Community Platform',
    '📰 Local Information Platform',
    '⚠️ Problem Tracking System',
    '🏗️ Development Tracking System',
    '🔍 Local Discovery Platform',
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-4xl w-full">
        <SlideHeading icon={Target}>Final Concept</SlideHeading>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white/70 text-lg mb-8 font-body"
        >
          Ye project sirf ek social-media application nahi hai.
          <br />
          Ye <span className="text-primary font-bold">combination</span> hai:
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-5"
            >
              <p className="text-white font-heading font-semibold text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-success font-heading font-bold text-xl mt-8"
        >
          ✅ A COMPLETE DIGITAL ECOSYSTEM FOR LOCAL COMMUNITIES
        </motion.p>
      </div>
    </div>
  );
};

export default FinalConcept;