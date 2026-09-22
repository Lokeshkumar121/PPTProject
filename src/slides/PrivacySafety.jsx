
// src/slides/PrivacySafety.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const PrivacySafety = () => {
  const features = [
    '🔐 Role-based access',
    '👤 User authentication',
    '📢 Content reporting',
    '🛡️ Admin moderation',
    '🔏 Privacy controls',
    '🔑 Secure password storage',
    '🛡️ Data protection',
    '🚫 Abuse prevention',
    '📧 Spam protection',
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-5xl w-full">
        <SlideHeading icon={Lock}>
          Privacy & Safety
        </SlideHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
                text-center
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <p className="text-slate-700 font-body text-sm">
                {f}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="
            bg-white
            rounded-2xl
            p-5
            border
            border-slate-200
            border-l-4
            border-l-amber-400
            shadow-sm
          "
        >
          <p className="text-amber-600 font-body text-sm">
            ⚠️ Location, phone number, personal information aur children's data ko carefully handle karna hoga.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacySafety;
