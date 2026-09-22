
import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Users,
  MessageCircle,
  TrendingUp
} from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const SolutionSlide = () => {
  const pillars = [
    {
      icon: Users,
      title: 'PEOPLE',
      items: ['Social Posts', 'Comments', 'Connections'],
    },
    {
      icon: MessageCircle,
      title: 'INFORMATION',
      items: ['Updates', 'Events', 'Alerts'],
    },
    {
      icon: TrendingUp,
      title: 'DEVELOPMENT',
      items: ['Problems', 'Projects', 'Solutions'],
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Zap}>
          Platform Ka Solution
        </SlideHeading>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-slate-500 text-lg mb-12 font-body"
        >
          Platform local community ke liye ek{' '}
          <span className="text-blue-600 font-bold">
            central digital layer
          </span>{' '}
          create karega
        </motion.p>

        {/* Central Hub */}
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/15 blur-3xl rounded-full animate-pulse" />

            <div
              className="
                relative
                px-12
                py-8
                rounded-3xl
                bg-white
                border-2
                border-blue-200
                shadow-lg
              "
            >
              <p className="text-3xl font-heading font-extrabold gradient-text">
                HYPERLOCAL PLATFORM
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 60 }}
            transition={{ delay: 0.8 }}
            className="w-1 bg-gradient-to-b from-blue-500 to-transparent"
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
              whileHover={{ scale: 1.03, y: -8 }}
              className="
                relative
                rounded-2xl
                p-6
                bg-white
                border
                border-slate-200
                shadow-sm
                hover:border-blue-200
                hover:shadow-lg
                cursor-pointer
                overflow-hidden
                transition-all
              "
            >
              {/* Top Accent */}
              <div className="
                absolute
                top-0
                left-0
                right-0
                h-1
                bg-gradient-to-r
                from-blue-700
                via-blue-500
                to-sky-400
              " />

              <div
                className="
                  w-14
                  h-14
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-50
                  border
                  border-blue-100
                  mb-4
                "
              >
                <pillar.icon className="w-7 h-7 text-blue-600" />
              </div>

              <h3 className="text-slate-900 font-heading font-bold text-2xl mb-4">
                {pillar.title}
              </h3>

              <ul className="space-y-3">
                {pillar.items.map((item, i) => (
                  <li
                    key={i}
                    className="
                      text-slate-600
                      font-body
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
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
