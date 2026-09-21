// src/slides/Discussions.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const Discussions = () => (
  <div className="w-full h-full flex items-center justify-center px-16 py-20">
    <div className="max-w-4xl w-full">
      <SlideHeading icon={MessageSquare}>Community Discussions</SlideHeading>
      <div className="space-y-6">
        {[
          { q: 'Park mein evening sports activity start karni chahiye?', replies: ['Haan, badminton court bana sakte hain', 'Kids ke liye skating rink bhi', 'Timing 5-7 PM rakhein'], likes: 45 },
          { q: 'Society mein security timing change honi chahiye?', replies: ['Night shift mein guard badhana chahiye', 'CCTV coverage bhi increase karein'], likes: 38 },
        ].map((thread, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-white font-heading font-bold text-lg mb-4">💬 {thread.q}</p>
            <div className="space-y-2 mb-4 pl-4 border-l-2 border-primary/30">
              {thread.replies.map((reply, j) => (
                <motion.p
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + j * 0.1 }}
                  className="text-white/70 text-sm font-body"
                >
                  👤 {reply}
                </motion.p>
              ))}
            </div>
            <div className="flex gap-4 text-white/60 text-xs">
              <span>❤️ {thread.likes}</span>
              <span>💬 {thread.replies.length}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Discussions;