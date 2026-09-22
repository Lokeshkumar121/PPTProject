
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
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={AlertTriangle}>
          Current Problem: Information Scattered Hai
        </SlideHeading>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {sources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-xl
                p-4
                text-center
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <div
                className="
                  w-12
                  h-12
                  mx-auto
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-50
                  border
                  border-blue-100
                "
              >
                <span className="text-3xl">{source.icon}</span>
              </div>

              <p className="text-slate-600 text-sm mt-3 font-body font-medium">
                {source.label}
              </p>
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
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />

            <div
              className="
                relative
                bg-white
                rounded-2xl
                px-12
                py-8
                border-2
                border-blue-200
                shadow-lg
              "
            >
              <p className="text-4xl font-heading font-extrabold text-blue-700 text-center tracking-wide">
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
          <p className="text-2xl text-slate-600 font-body">
            ❌ Users ko relevant information{' '}
            <span className="text-blue-600 font-bold">
              timely nahi milti
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSlide;
