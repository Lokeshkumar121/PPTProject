
// src/slides/OneCommunity.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const OneCommunity = () => (
  <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
    <div className="max-w-5xl w-full">
      <SlideHeading icon={Globe}>
        One Community — One Digital Space
      </SlideHeading>

      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="
            px-10
            py-5
            rounded-2xl
            bg-gradient-to-r
            from-blue-700
            to-blue-500
            text-white
            font-heading
            font-extrabold
            text-2xl
            shadow-lg
            shadow-blue-200/60
          "
        >
          ONE COMMUNITY
        </motion.div>

        <div className="grid grid-cols-3 gap-6 w-full">
          {[
            { title: 'PEOPLE', items: ['Posts', 'Events'] },
            { title: 'PLACES', items: ['Business', 'Services'] },
            { title: 'PROBLEMS', items: ['Solutions', 'Projects'] },
          ].map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
                text-center
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <h4 className="text-slate-900 font-heading font-bold text-lg mb-3">
                {col.title}
              </h4>

              {col.items.map((item, j) => (
                <p
                  key={j}
                  className="text-slate-500 font-body text-sm"
                >
                  {item}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="
            px-10
            py-4
            rounded-2xl
            bg-blue-600
            text-white
            font-heading
            font-bold
            text-lg
            shadow-lg
            shadow-blue-200/60
          "
        >
          COMMUNITY FEED
        </motion.div>
      </div>
    </div>
  </div>
);

export default OneCommunity;
