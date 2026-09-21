// src/slides/BusinessModel.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const BusinessModel = () => {
  const models = [
    { emoji: '🏪', title: 'Local Business Promotion', desc: 'Businesses paid visibility le sakte hain' },
    { emoji: '⭐', title: 'Premium Community Tools', desc: 'Advanced analytics, management tools, automated notifications' },
    { emoji: '📢', title: 'Sponsored Local Content', desc: 'Controlled local sponsorships' },
    { emoji: '💻', title: 'SaaS Model', desc: 'Societies, RWAs, organizations ke liye subscription-based features' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-5xl w-full">
        <SlideHeading icon={DollarSign}>Business Model - Future</SlideHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {models.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-2xl p-5"
            >
              <div className="text-3xl mb-2">{m.emoji}</div>
              <h4 className="text-white font-heading font-bold mb-1">{m.title}</h4>
              <p className="text-white/60 text-sm font-body">{m.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="glass rounded-2xl p-5 border-l-4 border-warning"
        >
          <p className="text-warning/90 font-body text-sm">
            ⚠️ Monetization ko user trust ke baad introduce karna better hoga. Excessive advertising trust ko damage kar sakti hai.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessModel;