// src/slides/PptFlow.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { List } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const PptFlow = () => {
  const flow = [
    'Problem', 'Current Gap', 'Our Solution', 'How It Works',
    'Core Features', 'Problem Tracking', 'Development Tracking',
    'Social Features', 'User Roles', 'Real-Life Use Case',
    'Benefits', 'Different Communities', 'Future Vision',
    'Business Model', 'Technology', 'Vision',
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-5xl w-full">
        <SlideHeading icon={List}>PPT Flow Structure</SlideHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {flow.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-3 flex items-center gap-2"
            >
              <span className="text-primary font-heading font-bold text-sm">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-white/80 text-xs font-body">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PptFlow;