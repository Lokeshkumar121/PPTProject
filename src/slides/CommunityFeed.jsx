
// src/slides/CommunityFeed.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Rss } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const CommunityFeed = () => (
  <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
    <div className="max-w-7xl w-full">
      <SlideHeading icon={Rss}>
        Community Feed
      </SlideHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feed Features */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-6
            shadow-sm
            hover:shadow-md
            transition-all
          "
        >
          <h3 className="text-slate-900 font-heading font-bold text-xl mb-4">
            Users Dekh Sakte Hain:
          </h3>

          <ul className="space-y-3">
            {[
              'Posts',
              'Photos',
              'Videos',
              'Announcements',
              'Events',
              'Community Updates',
              'Development Updates',
              'Local Achievements'
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-600
                  font-body
                "
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Feed Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-6
            shadow-sm
            hover:shadow-md
            transition-all
          "
        >
          <div
            className="
              bg-slate-50
              border
              border-slate-200
              rounded-xl
              p-4
              mb-3
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-blue-100
                  border
                  border-blue-200
                "
              />

              <div>
                <p className="text-slate-800 font-heading font-bold text-sm">
                  Rahul Sharma
                </p>

                <p className="text-slate-400 text-xs">
                  XYZ Society • 2 hours ago
                </p>
              </div>
            </div>

            <p className="text-slate-600 font-body text-sm mb-3">
              "Society park mein new lights install ho gayi hain."
            </p>

            <div className="flex gap-4 text-slate-400 text-xs">
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
