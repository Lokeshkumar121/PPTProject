// src/slides/Scalability.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const Scalability = () => (
  <div className="w-full h-full flex items-center justify-center px-16 py-20">
    <div className="max-w-5xl w-full">
      <SlideHeading icon={TrendingUp}>Scalability</SlideHeading>
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-heading font-extrabold text-2xl glow"
        >
          PLATFORM
        </motion.div>
        <div className="grid grid-cols-3 gap-6 w-full">
          {[
            { name: 'VILLAGE', users: '1,000+', emoji: '🏘️' },
            { name: 'SOCIETY', users: '1,000+', emoji: '🏢' },
            { name: 'CITY', users: '100+', emoji: '🌆' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-5xl mb-3">{item.emoji}</div>
              <h4 className="text-white font-heading font-bold mb-2">{item.name}</h4>
              <p className="text-primary font-heading font-bold text-2xl">{item.users}</p>
              <p className="text-white/50 text-xs">users</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-success/30 to-accent/30 border border-success/50 text-center"
        >
          <p className="text-white font-heading font-bold text-lg">
            One Platform → Thousands of Communities → Millions of Users
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Scalability;