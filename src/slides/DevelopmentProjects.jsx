
// src/slides/DevelopmentProjects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Hammer } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const DevelopmentProjects = () => (
  <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
    <div className="max-w-5xl w-full">
      <SlideHeading icon={Hammer}>Development Projects Tracking</SlideHeading>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          bg-white
          border
          border-slate-200
          rounded-2xl
          p-8
          shadow-sm
        "
      >
        <h3 className="text-slate-900 font-heading font-bold text-2xl mb-2">
          Main Road Construction
        </h3>

        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200 text-sm font-bold">
            🟡 IN PROGRESS
          </span>

          <span className="text-slate-500 text-sm">
            Start: 10 Sept 2026
          </span>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-slate-500 text-sm">
              Progress
            </span>

            <span className="text-slate-900 font-bold">
              65%
            </span>
          </div>

          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="h-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400"
            />
          </div>
        </div>

        <div className="space-y-3">
          {[
            { done: true, text: 'Measurement completed', date: '12 Sept' },
            { done: true, text: 'Material delivered', date: '15 Sept' },
            { done: true, text: 'Construction started', date: '18 Sept' },
            { done: false, text: 'Final work pending', date: '' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span
                className={`
                  w-6
                  h-6
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-xs
                  ${
                    item.done
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-400 border border-slate-200'
                  }
                `}
              >
                {item.done ? '✓' : '○'}
              </span>

              <span
                className={
                  item.done
                    ? 'text-slate-800'
                    : 'text-slate-400'
                }
              >
                {item.text}
              </span>

              {item.date && (
                <span className="text-slate-400 text-xs ml-auto">
                  {item.date}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default DevelopmentProjects;
