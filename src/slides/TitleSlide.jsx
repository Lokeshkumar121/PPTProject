import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, MapPin, MessageCircle, TrendingUp, CheckCircle } from 'lucide-react';

const TitleSlide = () => {
  const features = [
    { icon: Users, label: 'Connect' },
    { icon: MessageCircle, label: 'Inform' },
    { icon: TrendingUp, label: 'Engage' },
    { icon: CheckCircle, label: 'Solve' },
    { icon: MapPin, label: 'Develop' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 relative">
      {/* Floating Background Icons */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-32 opacity-10"
      >
        <Users className="w-32 h-32 text-primary" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-32 right-40 opacity-10"
      >
        <MapPin className="w-40 h-40 text-secondary" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-40 right-32 opacity-10"
      >
        <MessageCircle className="w-28 h-28 text-accent" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass mb-8"
        >
          <Globe className="w-5 h-5 text-accent" />
          <span className="text-white/80 text-sm font-body tracking-wider">
            HYPERLOCAL PLATFORM
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-7xl md:text-8xl font-heading font-extrabold text-white mb-6 leading-tight"
        >
          Hyperlocal
          <br />
          <span className="gradient-text">Social & Community</span>
          <br />
          Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl text-white/60 font-body italic mb-12"
        >
          "Your Community, Your People, Your Place"
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full glass cursor-pointer"
            >
              <feature.icon className="w-5 h-5 text-primary" />
              <span className="text-white font-body font-medium">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-16"
        >
          <p className="text-white/40 text-sm font-body">
            Use Arrow Keys ← → to Navigate | Press F for Fullscreen
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TitleSlide;