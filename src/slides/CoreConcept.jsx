import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const CoreConcept = () => {
  const communities = [
    { label: 'Village', icon: '🏘️', color: 'from-green-500 to-emerald-600' },
    { label: 'Society', icon: '🏢', color: 'from-blue-500 to-indigo-600' },
    { label: 'Colony', icon: '🏡', color: 'from-purple-500 to-pink-600' },
    { label: 'Apartment', icon: '🏬', color: 'from-yellow-500 to-orange-600' },
    { label: 'Mohalla', icon: '🏘️', color: 'from-red-500 to-rose-600' },
    { label: 'Town', icon: '🏙️', color: 'from-cyan-500 to-blue-600' },
    { label: 'City', icon: '🌆', color: 'from-violet-500 to-purple-600' },
    { label: 'Ward', icon: '📍', color: 'from-teal-500 to-green-600' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Globe}>Core Concept</SlideHeading>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-3xl font-heading font-bold gradient-text mb-2">
            "Your Community, Your People, Your Place"
          </p>
          <p className="text-white/60 font-body text-lg">
            Har local community ko apna digital social space provide karna
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.08, y: -10 }}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${community.color} cursor-pointer shadow-lg`}
            >
              <div className="text-5xl mb-3 text-center">{community.icon}</div>
              <h3 className="text-white font-heading font-bold text-center text-xl">
                {community.label}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-success/10 border border-success/30">
            <span className="text-2xl">✅</span>
            <p className="text-white font-body">
              Platform sirf "Digital Village" tak limited nahi hoga
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoreConcept;