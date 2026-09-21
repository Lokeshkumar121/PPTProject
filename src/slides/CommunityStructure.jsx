// src/slides/CommunityStructure.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const CommunityStructure = () => {
  const levels = [
    { label: 'PLATFORM', color: 'from-purple-500 to-pink-500' },
    { label: 'STATE', color: 'from-blue-500 to-indigo-500' },
    { label: 'DISTRICT', color: 'from-cyan-500 to-blue-500' },
    { label: 'CITY / TOWN / VILLAGE', color: 'from-green-500 to-emerald-500' },
    { label: 'LOCAL AREA', color: 'from-yellow-500 to-orange-500' },
    { label: 'SOCIETY / COLONY', color: 'from-red-500 to-rose-500' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-3xl w-full">
        <SlideHeading icon={Network}>Community Structure</SlideHeading>
        <div className="flex flex-col items-center gap-3">
          {levels.map((level, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className={`px-8 py-4 rounded-xl bg-gradient-to-r ${level.color} text-white font-heading font-bold shadow-lg`}
                style={{ width: `${100 - i * 10}%` }}
              >
                {level.label}
              </motion.div>
              {i < levels.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 20 }}
                  transition={{ delay: i * 0.15 + 0.1 }}
                  className="w-0.5 bg-white/30"
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-white/60 text-sm mt-6 font-body"
        >
          ✅ Exact hierarchy business requirements ke according flexible rakhi ja sakti hai
        </motion.p>
      </div>
    </div>
  );
};

export default CommunityStructure;