// src/slides/NgoBenefits.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const NgoBenefits = () => {
  const benefits = ['🔍 Community problems identify', '🏗️ Projects identify', '📢 Local campaigns organize', '📊 Impact document', '📈 Community engagement measure'];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-4xl w-full">
        <SlideHeading icon={Heart}>Benefits for NGOs / Organizations</SlideHeading>
        <div className="space-y-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ x: 10 }}
              className="glass rounded-2xl p-5 cursor-pointer"
            >
              <p className="text-white/90 font-body">{b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NgoBenefits;