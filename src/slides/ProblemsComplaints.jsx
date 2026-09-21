// src/slides/ProblemsComplaints.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const ProblemsComplaints = () => {
  const categories = [
    { emoji: '🛣️', label: 'Road' },
    { emoji: '💧', label: 'Water' },
    { emoji: '⚡', label: 'Electricity' },
    { emoji: '💡', label: 'Street Light' },
    { emoji: '🗑️', label: 'Garbage' },
    { emoji: '🚰', label: 'Drainage' },
    { emoji: '🔒', label: 'Security' },
    { emoji: '🏗️', label: 'Public Infra' },
    { emoji: '🏢', label: 'Society Maint.' },
    { emoji: '📦', label: 'Other' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-6xl w-full">
        <SlideHeading icon={AlertTriangle}>Problems & Complaints</SlideHeading>
        <p className="text-center text-white/70 mb-8 font-body">
          Platform ka <span className="text-primary font-bold">important differentiating feature</span>
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass rounded-xl p-4 text-center cursor-pointer"
            >
              <div className="text-3xl mb-2">{cat.emoji}</div>
              <p className="text-white/80 text-xs font-body">{cat.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-3">
          {['Report', 'Category', 'Description', 'Photo/Video', 'Location'].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="glass rounded-xl p-3 text-center"
            >
              <div className="text-xs text-primary font-bold mb-1">STEP {i + 1}</div>
              <p className="text-white text-xs font-body">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemsComplaints;