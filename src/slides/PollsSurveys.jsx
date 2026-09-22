
// src/slides/PollsSurveys.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const PollsSurveys = () => (
  <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
    <div className="max-w-3xl w-full">
      <SlideHeading icon={PieChart}>
        Polls & Surveys
      </SlideHeading>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
          bg-white
          border
          border-slate-200
          rounded-2xl
          p-8
          shadow-sm
        "
      >
        <h3 className="text-slate-900 font-heading font-bold text-xl mb-6">
          📊 Community Park Timing
        </h3>

        <div className="space-y-4">
          {[
            { option: '5 AM – 9 AM', percent: 35, selected: false },
            { option: '6 AM – 10 AM', percent: 48, selected: true },
            { option: '4 PM – 9 PM', percent: 17, selected: false },
          ].map((poll, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span
                  className={`font-body ${
                    poll.selected
                      ? 'text-blue-600 font-bold'
                      : 'text-slate-500'
                  }`}
                >
                  {poll.selected ? '● ' : '○ '}
                  {poll.option} {poll.selected && '✅'}
                </span>

                <span className="text-slate-900 font-bold">
                  {poll.percent}%
                </span>
              </div>

              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${poll.percent}%` }}
                  transition={{
                    delay: 0.5 + i * 0.2,
                    duration: 1
                  }}
                  className={`h-full ${
                    poll.selected
                      ? 'bg-blue-600'
                      : 'bg-blue-200'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between text-sm">
          <span className="text-slate-500">
            Total Votes:{' '}
            <span className="text-slate-900 font-bold">
              156
            </span>
          </span>

          <span className="text-amber-600 font-medium">
            ⏰ 2 days left
          </span>
        </div>
      </motion.div>
    </div>
  </div>
);

export default PollsSurveys;
