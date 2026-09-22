
// src/slides/FutureFeatures.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const FutureFeatures = () => {
  const categories = [
    {
      title: '🤖 AI',
      color: 'from-blue-700 to-blue-500',
      items: [
        'Complaint categorization',
        'Duplicate detection',
        'Spam detection',
        'Content moderation',
        'Language translation',
        'Post summarization'
      ]
    },
    {
      title: '🗺️ MAPS',
      color: 'from-blue-600 to-sky-400',
      items: [
        'Problem location',
        'Project location',
        'Business discovery',
        'Community boundaries'
      ]
    },
    {
      title: '📱 MOBILE',
      color: 'from-blue-700 to-cyan-500',
      items: [
        'Android',
        'iOS',
        'Push notifications',
        'SMS',
        'Email'
      ]
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Rocket}>
          Future Features
        </SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-6
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <div
                className={`
                  inline-block
                  px-4
                  py-2
                  rounded-xl
                  bg-gradient-to-r
                  ${cat.color}
                  text-white
                  font-heading
                  font-bold
                  mb-4
                `}
              >
                {cat.title}
              </div>

              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li
                    key={j}
                    className="
                      text-slate-600
                      text-sm
                      font-body
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureFeatures;
