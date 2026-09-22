
// src/slides/Differentiation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const Differentiation = () => {
  const comparisons = [
    {
      platform: '📱 Traditional Social Media',
      focus: 'Entertainment + General Social Networking'
    },
    {
      platform: '💬 WhatsApp Groups',
      focus: 'Messaging'
    },
    {
      platform: '🗺️ Google Maps',
      focus: 'Places + Navigation'
    },
    {
      platform: '🏛️ Government Portals',
      focus: 'Official Services'
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-5xl w-full">
        <SlideHeading icon={Target}>
          What Makes It Different?
        </SlideHeading>

        <div className="space-y-3 mb-6">
          {comparisons.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-4
                grid
                grid-cols-2
                gap-4
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <span className="text-slate-900 font-heading font-semibold">
                {c.platform}
              </span>

              <span className="text-slate-500 font-body text-sm">
                {c.focus}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="
            rounded-2xl
            p-6
            bg-blue-50
            border-2
            border-blue-200
            shadow-sm
          "
        >
          <div className="grid grid-cols-2 gap-4">
            <span className="text-blue-700 font-heading font-bold text-xl">
              🌐 PROPOSED PLATFORM
            </span>

            <span className="text-slate-700 font-body">
              Local People + Local Information + Local Problems + Local Development + Community Interaction
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-blue-600 font-heading font-bold mt-6"
        >
          ✅ UNIQUE COMBINATION OF SOCIAL + LOCAL + STRUCTURED
        </motion.p>
      </div>
    </div>
  );
};

export default Differentiation;
