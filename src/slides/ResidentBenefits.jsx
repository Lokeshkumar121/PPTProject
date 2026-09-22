
// src/slides/ResidentBenefits.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const ResidentBenefits = () => {
  const benefits = [
    '📍 Important local information ek place par',
    '🤝 Community se connection',
    '📝 Problems report karne ka structured method',
    '📊 Problem status tracking',
    '🎉 Local events ki information',
    '💬 Community discussions',
    '🏆 Community achievements',
    '🚨 Emergency alerts',
    '🔍 Local services discover karna',
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-5xl w-full">
        <SlideHeading icon={Users}>
          Benefits for Residents
        </SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
                cursor-pointer
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <p className="text-slate-700 font-body text-sm">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentBenefits;
