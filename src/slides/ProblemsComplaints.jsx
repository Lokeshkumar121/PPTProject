
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
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-6xl w-full">
        <SlideHeading icon={AlertTriangle}>
          Problems & Complaints
        </SlideHeading>

        <p className="text-center text-slate-500 mb-8 font-body">
          Platform ka{' '}
          <span className="text-blue-600 font-bold">
            important differentiating feature
          </span>
        </p>

        {/* Problem Categories */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-xl
                p-4
                text-center
                cursor-pointer
                shadow-sm
                hover:border-blue-200
                hover:bg-blue-50/40
                hover:shadow-md
                transition-all
              "
            >
              <div className="text-3xl mb-2">
                {cat.emoji}
              </div>

              <p className="text-slate-600 text-xs font-body font-medium">
                {cat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reporting Steps */}
        <div className="grid grid-cols-5 gap-3">
          {[
            'Report',
            'Category',
            'Description',
            'Photo/Video',
            'Location'
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-xl
                p-3
                text-center
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <div className="text-xs text-blue-600 font-bold mb-1">
                STEP {i + 1}
              </div>

              <p className="text-slate-700 text-xs font-body font-medium">
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemsComplaints;
