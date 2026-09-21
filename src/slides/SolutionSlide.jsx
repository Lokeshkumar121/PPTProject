import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, MessageCircle, TrendingUp } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const SolutionSlide = () => {
  const pillars = [
    {
      icon: Users,
      title: 'PEOPLE',
      items: ['Social Posts', 'Comments', 'Connections'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: MessageCircle,
      title: 'INFORMATION',
      items: ['Updates', 'Events', 'Alerts'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'DEVELOPMENT',
      items: ['Problems', 'Projects', 'Solutions'],
      color: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Zap}>Platform Ka Solution</SlideHeading>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white/70 text-lg mb-12 font-body"
        >
          Platform local community ke liye ek <span className="text-primary font-bold">central digital layer</span> create karega
        </motion.p>

        {/* Central Hub */}
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-full animate-pulse" />
            <div className="relative px-12 py-8 rounded-3xl glass border-2 border-primary/50">
              <p className="text-3xl font-heading font-extrabold gradient-text">
                HYPERLOCAL PLATFORM
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 60 }}
            transition={{ delay: 0.8 }}
            className="w-1 bg-gradient-to-b from-primary to-transparent"
          />
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${pillar.color} shadow-xl cursor-pointer`}
            >
              <pillar.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-white font-heading font-bold text-2xl mb-4">
                {pillar.title}
              </h3>
              <ul className="space-y-2">
                {pillar.items.map((item, i) => (
                  <li key={i} className="text-white/90 font-body flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;