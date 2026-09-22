
// src/slides/BusinessBenefits.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Store } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const BusinessBenefits = () => {
  const benefits = [
    '🎯 Local audience tak reach',
    '🔍 Business discovery',
    '💻 Digital presence',
    '👥 Local customers',
    '🤝 Community engagement'
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-4xl w-full">
        <SlideHeading icon={Store}>
          Benefits for Local Businesses
        </SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -30 : 30
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: i * 0.12
              }}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <p className="text-slate-700 font-body">
                {b}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="
            bg-white
            rounded-2xl
            p-5
            border
            border-slate-200
            border-l-4
            border-l-amber-400
            shadow-sm
          "
        >
          <p className="text-amber-600 font-body text-sm">
            ⚠️ Advertising ko controlled rakhna important hoga, warna user experience traditional ad-heavy platforms jaisa ho sakta hai.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessBenefits;
