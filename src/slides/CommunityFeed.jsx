// src/slides/CommunityFeed.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Rss } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const CommunityFeed = () => (
  <div className="w-full h-full flex items-center justify-center px-16 py-20">
    <div className="max-w-7xl w-full">
      <SlideHeading icon={Rss}>Community Feed</SlideHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-white font-heading font-bold text-xl mb-4">Users Dekh Sakte Hain:</h3>
          <ul className="space-y-3">
            {['Posts', 'Photos', 'Videos', 'Announcements', 'Events', 'Community Updates', 'Development Updates', 'Local Achievements'].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-white/80 font-body"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-2xl p-6"
        >
          <div className="bg-white/5 rounded-xl p-4 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/30" />
              <div>
                <p className="text-white font-heading font-bold text-sm">Rahul Sharma</p>
                <p className="text-white/40 text-xs">XYZ Society • 2 hours ago</p>
              </div>
            </div>
            <p className="text-white/80 font-body text-sm mb-3">
              "Society park mein new lights install ho gayi hain."
            </p>
            <div className="flex gap-4 text-white/60 text-xs">
              <span>❤️ 32</span>
              <span>💬 8</span>
              <span>🔗 Share</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default CommunityFeed;