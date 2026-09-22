
// src/slides/Achievements.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const Achievements = () => {
  const achievements = [
    { emoji: '🏆', title: 'Student Achievement', desc: 'Priya Sharma - District Topper (95%)' },
    { emoji: '🏆', title: 'Sports Achievement', desc: 'XYZ Cricket Team - Inter-Society Champions' },
    { emoji: '🌳', title: 'Plantation Campaign', desc: '500 Trees Planted in Community Area' },
    { emoji: '🧹', title: 'Cleanliness Drive', desc: '"Swachh Colony" Award - Cleanest Society 2026' },
    { emoji: '🏥', title: 'Health Camp', desc: '200+ People Benefited from Free Health Checkup' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-4xl w-full">
        <SlideHeading icon={Trophy}>
          Community Achievements
        </SlideHeading>

        <p className="text-center text-slate-500 mb-6 font-body">
          Sirf problems nahi,{' '}
          <span className="text-blue-600 font-bold">
            positive progress bhi visible hogi
          </span>
        </p>

        <div className="space-y-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="
                bg-white
                border
                border-slate-200
                border-l-4
                border-l-blue-500
                rounded-2xl
                p-5
                flex
                items-center
                gap-4
                shadow-sm
                hover:shadow-md
                hover:border-blue-200
                transition-all
              "
            >
              <span className="text-3xl">
                {ach.emoji}
              </span>

              <div>
                <h4 className="text-slate-900 font-heading font-bold">
                  {ach.title}
                </h4>

                <p className="text-slate-500 text-sm font-body">
                  {ach.desc}
                </p>
              </div>

              <span className="ml-auto text-blue-600 text-xs font-bold">
                🎉
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
