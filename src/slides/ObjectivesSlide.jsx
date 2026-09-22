
import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Users,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  Rocket
} from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const ObjectivesSlide = () => {
  const objectives = [
    {
      num: '01',
      icon: Users,
      title: 'CONNECT',
      desc: 'Local residents ko ek digital community mein connect karna',
    },
    {
      num: '02',
      icon: MessageCircle,
      title: 'INFORM',
      desc: 'Important local information easily available karna',
    },
    {
      num: '03',
      icon: TrendingUp,
      title: 'ENGAGE',
      desc: 'Residents ko community activities mein participate karne dena',
    },
    {
      num: '04',
      icon: CheckCircle,
      title: 'SOLVE',
      desc: 'Local problems ko report, track aur resolve karne ka structured system',
    },
    {
      num: '05',
      icon: Rocket,
      title: 'DEVELOP',
      desc: 'Community ke development projects aur achievements ko digitally document karna',
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Target}>
          Platform Ke 5 Main Objectives
        </SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.7,
                rotateY: 90
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.6
              }}
              whileHover={{
                scale: 1.03,
                y: -8
              }}
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
                overflow-hidden
                cursor-pointer
                transition-all
              "
            >
              {/* Number */}
              <div
                className="
                  absolute
                  top-2
                  right-4
                  text-blue-100
                  font-heading
                  font-extrabold
                  text-6xl
                "
              >
                {obj.num}
              </div>

              {/* Top Accent */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-1
                  bg-gradient-to-r
                  from-blue-700
                  via-blue-500
                  to-sky-400
                "
              />

              {/* Icon */}
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
                <obj.icon className="w-7 h-7 text-blue-600" />
              </div>

              {/* Title */}
              <h3 className="text-slate-900 font-heading font-bold text-2xl mb-3">
                {obj.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 font-body text-sm leading-relaxed">
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
