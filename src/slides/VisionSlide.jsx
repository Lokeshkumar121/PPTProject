
// src/slides/VisionSlide.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const VisionSlide = () => (
  <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
    <div className="max-w-5xl w-full text-center">
      <SlideHeading icon={Eye}>
        Platform Vision
      </SlideHeading>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          p-10
          mb-8
          shadow-sm
        "
      >
        <p className="text-2xl md:text-3xl text-slate-800 font-heading font-semibold leading-relaxed">
          "To build a digital layer for local communities where people can connect with their surroundings, access relevant information, participate in community life, report local issues, discover services and track development."
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="
          inline-block
          px-10
          py-6
          rounded-2xl
          bg-blue-50
          border-2
          border-blue-200
          shadow-sm
        "
      >
        <p className="text-3xl font-heading font-extrabold gradient-text">
          "Internet ko local community ke closer lana."
        </p>
      </motion.div>
    </div>
  </div>
);

export default VisionSlide;
