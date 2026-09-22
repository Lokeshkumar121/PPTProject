
// src/slides/CommunityStructure.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const CommunityStructure = () => {
  const levels = [
    { label: 'PLATFORM' },
    { label: 'STATE' },
    { label: 'DISTRICT' },
    { label: 'CITY / TOWN / VILLAGE' },
    { label: 'LOCAL AREA' },
    { label: 'SOCIETY / COLONY' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-3xl w-full">
        <SlideHeading icon={Network}>
          Community Structure
        </SlideHeading>

        <div className="flex flex-col items-center gap-3">
          {levels.map((level, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="
                  px-8
                  py-4
                  rounded-xl
                  bg-white
                  border
                  border-blue-200
                  text-blue-700
                  font-heading
                  font-bold
                  shadow-sm
                  hover:border-blue-400
                  hover:shadow-md
                  transition-all
                  text-center
                "
                style={{ width: `${100 - i * 10}%` }}
              >
                {level.label}
              </motion.div>

              {i < levels.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 20 }}
                  transition={{ delay: i * 0.15 + 0.1 }}
                  className="w-0.5 bg-blue-200"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-slate-500 text-sm mt-6 font-body"
        >
          ✅ Exact hierarchy business requirements ke according flexible rakhi ja sakti hai
        </motion.p>
      </div>
    </div>
  );
};

export default CommunityStructure;
