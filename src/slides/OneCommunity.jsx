// src/slides/OneCommunity.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const OneCommunity = () => (
  <div className="w-full h-full flex items-center justify-center px-16 py-20">
    <div className="max-w-5xl w-full">
      <SlideHeading icon={Globe}>One Community — One Digital Space</SlideHeading>
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-heading font-extrabold text-2xl shadow-xl glow"
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
              className="glass rounded-2xl p-5 text-center"
            >
              <h4 className="text-white font-heading font-bold text-lg mb-3">{col.title}</h4>
              {col.items.map((item, j) => (
                <p key={j} className="text-white/70 font-body text-sm">{item}</p>
              ))}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="px-10 py-4 rounded-2xl bg-gradient-to-r from-accent to-success text-white font-heading font-bold text-lg shadow-lg"
        >
          COMMUNITY FEED
        </motion.div>
      </div>
    </div>
  </div>
);

export default OneCommunity;