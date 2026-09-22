
// src/slides/Announcements.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const Announcements = () => {
  const announcements = [
    {
      priority: '🔴 URGENT',
      color: 'border-l-red-400',
      title: '💧 Water Supply',
      desc: 'Kal 10 AM - 2 PM tak band rahegi',
      loc: 'XYZ Colony'
    },
    {
      priority: '🟡 IMPORTANT',
      color: 'border-l-amber-400',
      title: '⚡ Electricity Maintenance',
      desc: 'Sunday 6 AM - 10 AM',
      loc: 'ABC Society'
    },
    {
      priority: '🟢 GENERAL',
      color: 'border-l-blue-500',
      title: '🎉 Society Meeting',
      desc: '15 Sept, 7 PM at Community Hall',
      loc: 'XYZ Society'
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-5xl w-full">
        <SlideHeading icon={Megaphone}>
          Local Announcements
        </SlideHeading>

        <div className="space-y-4">
          {announcements.map((ann, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`
                bg-white
                rounded-2xl
                p-5
                border
                border-slate-200
                border-l-4
                ${ann.color}
                shadow-sm
                hover:shadow-md
                hover:border-blue-200
                transition-all
              `}
            >
              <div className="text-xs font-bold text-slate-400 mb-1">
                {ann.priority}
              </div>

              <h4 className="text-slate-900 font-heading font-bold text-lg mb-1">
                {ann.title}
              </h4>

              <p className="text-slate-600 font-body text-sm">
                {ann.desc}
              </p>

              <p className="text-slate-400 text-xs mt-2">
                📍 {ann.loc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
