
// src/slides/AdminBenefits.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const AdminBenefits = () => {
  const benefits = [
    { emoji: '📢', text: 'Announcements centralized' },
    { emoji: '📋', text: 'Problems organized' },
    { emoji: '🏗️', text: 'Projects trackable' },
    { emoji: '📁', text: 'Digital records' },
    { emoji: '🤝', text: 'Community engagement' },
    { emoji: '📞', text: 'Better communication' },
    { emoji: '📊', text: 'Status reporting' },
    { emoji: '📈', text: 'Historical data' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-5xl w-full">
        <SlideHeading icon={Shield}>
          Benefits for Community Administration
        </SlideHeading>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
                text-center
                cursor-pointer
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <div className="text-3xl mb-2">
                {b.emoji}
              </div>

              <p className="text-slate-600 text-sm font-body">
                {b.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBenefits;
