// src/slides/GovernmentBenefits.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Building } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const GovernmentBenefits = () => {
  const benefits = [
    { emoji: '📢', text: 'Public information' },
    { emoji: '🏗️', text: 'Development updates' },
    { emoji: '💬', text: 'Community feedback' },
    { emoji: '📋', text: 'Issue tracking' },
    { emoji: '📚', text: 'Public awareness' },
    { emoji: '📁', text: 'Project documentation' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-5xl w-full">
        <SlideHeading icon={Building}>Benefits for Government / Local Bodies</SlideHeading>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className="text-3xl mb-2">{b.emoji}</div>
              <p className="text-white/80 text-sm font-body">{b.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass rounded-2xl p-5 border-l-4 border-warning"
        >
          <p className="text-warning/90 font-body text-sm">
            ⚠️ Initially ise community communication and coordination layer ke roop mein position karna safer aur practical hai.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GovernmentBenefits;