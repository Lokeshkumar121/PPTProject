import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const ProblemSlide = () => {
  const sources = [
    { icon: '💬', label: 'WhatsApp Groups' },
    { icon: '📘', label: 'Facebook Groups' },
    { icon: '📄', label: 'Posters' },
    { icon: '🗣️', label: 'Word of Mouth' },
    { icon: '📋', label: 'Office Notices' },
    { icon: '🌐', label: 'Local Websites' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={AlertTriangle}>Current Problem: Information Scattered Hai</SlideHeading>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {sources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <span className="text-3xl">{source.icon}</span>
              <p className="text-white/80 text-sm mt-2 font-body">{source.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-danger/30 blur-3xl rounded-full" />
            <div className="relative glass rounded-2xl px-12 py-8 border-2 border-danger/50">
              <p className="text-4xl font-heading font-extrabold text-danger text-center">
                SCATTERED INFORMATION
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <p className="text-2xl text-white/80 font-body">
            ❌ Users ko relevant information <span className="text-danger font-bold">timely nahi milti</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSlide;