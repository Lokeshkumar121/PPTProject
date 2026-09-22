
import React from 'react';
import { motion } from 'framer-motion';
import {
  Rss,
  Megaphone,
  AlertTriangle,
  BarChart3,
  Calendar,
  MessageSquare,
  PieChart,
  Store,
  Trophy,
  Bell,
  Sparkles
} from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const FeaturesOverview = () => {
  const features = [
    { icon: Rss, title: 'Community Feed' },
    { icon: Megaphone, title: 'Announcements' },
    { icon: AlertTriangle, title: 'Problems' },
    { icon: BarChart3, title: 'Problem Tracking' },
    { icon: Sparkles, title: 'Development' },
    { icon: Calendar, title: 'Events' },
    { icon: MessageSquare, title: 'Discussions' },
    { icon: PieChart, title: 'Polls' },
    { icon: Store, title: 'Local Businesses' },
    { icon: Trophy, title: 'Achievements' },
    { icon: Bell, title: 'Emergency Alerts' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Sparkles}>
          Main Features
        </SlideHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              transition={{
                delay: index * 0.08
              }}
              whileHover={{
                scale: 1.05,
                y: -6
              }}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-5
                flex
                flex-col
                items-center
                text-center
                cursor-pointer
                shadow-sm
                hover:border-blue-200
                hover:bg-blue-50/40
                hover:shadow-md
                transition-all
              "
            >
              <div
                className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-50
                  border
                  border-blue-100
                  mb-3
                "
              >
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>

              <p className="text-slate-700 font-heading font-semibold text-sm">
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
