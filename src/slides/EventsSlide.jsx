
// src/slides/EventsSlide.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const EventsSlide = () => {
  const events = [
    { emoji: '🎭', title: 'Festival', desc: 'Diwali Celebration', date: '15 Nov' },
    { emoji: '🏃', title: 'Sports', desc: 'Cricket Tournament', date: '20 Oct' },
    { emoji: '🏥', title: 'Health Camp', desc: 'Free Checkup', date: '25 Sept' },
    { emoji: '🌱', title: 'Plantation', desc: 'Tree Plantation', date: '5 Oct' },
    { emoji: '🧹', title: 'Cleanliness', desc: 'Society Cleanup', date: '2 Oct' },
    { emoji: '📚', title: 'Education', desc: 'Computer Classes', date: '1 Oct' },
    { emoji: '🩸', title: 'Blood Donation', desc: 'Donation Camp', date: '10 Oct' },
    { emoji: '🎪', title: 'Cultural', desc: 'Dance/Music', date: '12 Oct' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-6xl w-full">
        <SlideHeading icon={Calendar}>Events</SlideHeading>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
                text-center
                cursor-pointer
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <div className="text-4xl mb-3">
                {event.emoji}
              </div>

              <h4 className="text-slate-900 font-heading font-bold text-sm mb-1">
                {event.title}
              </h4>

              <p className="text-slate-500 text-xs font-body mb-2">
                {event.desc}
              </p>

              <span className="text-blue-600 text-xs font-bold">
                {event.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSlide;
