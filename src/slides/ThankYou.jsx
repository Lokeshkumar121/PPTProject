import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Globe, QrCode } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 relative">
      {/* Floating Hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
        >
          <Heart className="w-8 h-8 text-primary/30" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl mb-8"
        >
          🙏
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-7xl md:text-8xl font-heading font-extrabold text-white mb-6"
        >
          Thank <span className="gradient-text">You!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl text-white/70 font-body italic mb-12"
        >
          "Your Community, Your People, Your Place"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full glass">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-white font-body">contact@hyperlocalplatform.com</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full glass">
            <Globe className="w-5 h-5 text-accent" />
            <span className="text-white font-body">www.hyperlocalplatform.com</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl glass"
        >
          <QrCode className="w-20 h-20 text-white" />
          <p className="text-white/60 text-sm font-body">Scan for Demo</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThankYou;