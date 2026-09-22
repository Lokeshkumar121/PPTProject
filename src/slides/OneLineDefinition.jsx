
// src/slides/OneLineDefinition.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const OneLineDefinition = () => (
  <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
    <div className="max-w-5xl w-full text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
          inline-flex
          p-4
          rounded-full
          bg-blue-50
          border
          border-blue-100
          mb-8
        "
      >
        <Quote className="w-12 h-12 text-blue-600" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="
          text-3xl
          md:text-4xl
          font-heading
          font-bold
          text-slate-900
          leading-relaxed
          mb-12
        "
      >
        "A hyperlocal social platform that connects people with their community, local information, problems, services, events and development."
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="
          bg-white
          border-2
          border-blue-200
          rounded-3xl
          p-8
          shadow-sm
        "
      >
        <p className="text-blue-600 font-heading font-bold text-sm mb-4">
          HINDI / HINGLISH MEIN:
        </p>

        <p className="
          text-2xl
          md:text-3xl
          font-heading
          font-semibold
          text-slate-800
          leading-relaxed
        ">
          "Ek aisa digital platform jahan kisi bhi village, society, colony ya city ki community apne logon, information, problems, events, services aur development ko ek hi jagah connect aur manage kar sake."
        </p>
      </motion.div>
    </div>
  </div>
);

export default OneLineDefinition;
