
// src/slides/LocalBusinesses.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Store } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const LocalBusinesses = () => {
  const businesses = [
    { emoji: '🏪', name: 'Sharma Store', type: 'Grocery', rating: '4.5' },
    { emoji: '💊', name: 'HealthPlus', type: 'Pharmacy', rating: '4.8' },
    { emoji: '🍴', name: 'Annapurna', type: 'Restaurant', rating: '4.2' },
    { emoji: '🔧', name: 'Raju Electricals', type: 'Electrician', rating: '4.0' },
    { emoji: '🧑‍⚕️', name: 'Dr. Verma', type: 'Doctor', rating: '4.9' },
    { emoji: '✂️', name: 'Style Zone', type: 'Salon', rating: '4.3' },
    { emoji: '📚', name: 'Bright Future', type: 'Coaching', rating: '4.6' },
    { emoji: '🚗', name: 'Auto Care', type: 'Mechanic', rating: '4.1' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-6xl w-full">
        <SlideHeading icon={Store}>
          Local Businesses
        </SlideHeading>

        <p className="text-center text-amber-600 text-sm mb-6 font-body">
          ⚠️ Business listings community relevance aur verification ke saath implement karna better hoga
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {businesses.map((biz, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.08, y: -5 }}
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
              <div className="text-4xl mb-2">
                {biz.emoji}
              </div>

              <h4 className="text-slate-900 font-heading font-bold text-sm">
                {biz.name}
              </h4>

              <p className="text-slate-500 text-xs font-body">
                {biz.type}
              </p>

              <p className="text-amber-500 text-xs mt-1 font-medium">
                ⭐ {biz.rating}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalBusinesses;
