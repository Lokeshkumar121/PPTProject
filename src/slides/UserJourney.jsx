
// src/slides/UserJourney.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Route } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const UserJourney = () => {
  const steps = [
    'Application open karta hai',
    'Location/community select karta hai',
    'Community join karta hai',
    'Personalized local feed milta hai',
    'Posts, announcements aur events dekhta hai',
    'Problem report karta hai',
    'Admin problem verify karta hai',
    'Problem ka status update hota hai',
    'Work complete hota hai',
    'Community ko result visible hota hai',
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-4xl w-full">
        <SlideHeading icon={Route}>
          Example User Journey
        </SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {steps.map((step, i) => (
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
                delay: i * 0.08
              }}
              className="
                bg-white
                border
                border-slate-200
                rounded-xl
                p-4
                flex
                items-center
                gap-3
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <span className="
                w-8
                h-8
                rounded-full
                bg-blue-600
                text-white
                text-sm
                font-bold
                flex
                items-center
                justify-center
                flex-shrink-0
              ">
                {i + 1}
              </span>

              <p className="text-slate-700 font-body text-sm">
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserJourney;
