// src/slides/Announcements.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const Announcements = () => {
  const announcements = [
    { priority: '🔴 URGENT', color: 'border-danger', title: '💧 Water Supply', desc: 'Kal 10 AM - 2 PM tak band rahegi', loc: 'XYZ Colony' },
    { priority: '🟡 IMPORTANT', color: 'border-warning', title: '⚡ Electricity Maintenance', desc: 'Sunday 6 AM - 10 AM', loc: 'ABC Society' },
    { priority: '🟢 GENERAL', color: 'border-success', title: '🎉 Society Meeting', desc: '15 Sept, 7 PM at Community Hall', loc: 'XYZ Society' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-5xl w-full">
        <SlideHeading icon={Megaphone}>Local Announcements</SlideHeading>
        <div className="space-y-4">
          {announcements.map((ann, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`glass rounded-2xl p-5 border-l-4 ${ann.color}`}
            >
              <div className="text-xs font-bold text-white/60 mb-1">{ann.priority}</div>
              <h4 className="text-white font-heading font-bold text-lg mb-1">{ann.title}</h4>
              <p className="text-white/70 font-body text-sm">{ann.desc}</p>
              <p className="text-white/40 text-xs mt-2">📍 {ann.loc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;