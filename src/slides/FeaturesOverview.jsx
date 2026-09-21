import React from 'react';
import { motion } from 'framer-motion';
import {
  Rss, Megaphone, AlertTriangle, BarChart3,
  Calendar, MessageSquare, PieChart, Store,
  Trophy, Bell, Sparkles
} from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const FeaturesOverview = () => {
  const features = [
    { icon: Rss, title: 'Community Feed', color: 'text-blue-400' },
    { icon: Megaphone, title: 'Announcements', color: 'text-purple-400' },
    { icon: AlertTriangle, title: 'Problems', color: 'text-red-400' },
    { icon: BarChart3, title: 'Problem Tracking', color: 'text-orange-400' },
    { icon: Sparkles, title: 'Development', color: 'text-green-400' },
    { icon: Calendar, title: 'Events', color: 'text-pink-400' },
    { icon: MessageSquare, title: 'Discussions', color: 'text-cyan-400' },
    { icon: PieChart, title: 'Polls', color: 'text-yellow-400' },
    { icon: Store, title: 'Local Businesses', color: 'text-indigo-400' },
    { icon: Trophy, title: 'Achievements', color: 'text-amber-400' },
    { icon: Bell, title: 'Emergency Alerts', color: 'text-red-500' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Sparkles}>Main Features</SlideHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="glass rounded-2xl p-5 flex flex-col items-center text-center cursor-pointer hover:border-primary/50 transition-all"
            >
              <feature.icon className={`w-10 h-10 ${feature.color} mb-3`} />
              <p className="text-white font-heading font-semibold text-sm">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesOverview;