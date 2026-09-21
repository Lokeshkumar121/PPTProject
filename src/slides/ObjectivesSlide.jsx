import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, MessageCircle, TrendingUp, CheckCircle, Rocket } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const ObjectivesSlide = () => {
  const objectives = [
    {
      num: '01',
      icon: Users,
      title: 'CONNECT',
      desc: 'Local residents ko ek digital community mein connect karna',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      num: '02',
      icon: MessageCircle,
      title: 'INFORM',
      desc: 'Important local information easily available karna',
      color: 'from-purple-500 to-pink-500',
    },
    {
      num: '03',
      icon: TrendingUp,
      title: 'ENGAGE',
      desc: 'Residents ko community activities mein participate karne dena',
      color: 'from-orange-500 to-red-500',
    },
    {
      num: '04',
      icon: CheckCircle,
      title: 'SOLVE',
      desc: 'Local problems ko report, track aur resolve karne ka structured system',
      color: 'from-green-500 to-emerald-500',
    },
    {
      num: '05',
      icon: Rocket,
      title: 'DEVELOP',
      desc: 'Community ke development projects aur achievements ko digitally document karna',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Target}>Platform Ke 5 Main Objectives</SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${obj.color} shadow-xl overflow-hidden cursor-pointer`}
            >
              <div className="absolute top-2 right-4 text-white/20 font-heading font-extrabold text-6xl">
                {obj.num}
              </div>
              <obj.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-white font-heading font-bold text-2xl mb-3">
                {obj.title}
              </h3>
              <p className="text-white/90 font-body text-sm leading-relaxed">
                {obj.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSlide;