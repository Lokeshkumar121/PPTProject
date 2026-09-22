import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Home,
  MapPin,
  Building,
  Users
} from 'lucide-react';

import {
  SlideHeading,
  SlideCard
} from '../components/Slide';

const ExecutiveSummary = () => {
  const communityTypes = [
    {
      icon: Home,
      label: 'Village',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Building2,
      label: 'Society',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: MapPin,
      label: 'Colony',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      icon: Building,
      label: 'Apartment',
      color: 'text-sky-600',
      bg: 'bg-sky-50'
    },
    {
      icon: Users,
      label: 'Mohalla',
      color: 'text-cyan-600',
      bg: 'bg-cyan-50'
    },
    {
      icon: Building2,
      label: 'Town',
      color: 'text-blue-700',
      bg: 'bg-blue-50'
    },
    {
      icon: Building,
      label: 'City',
      color: 'text-indigo-500',
      bg: 'bg-indigo-50'
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">

        <SlideHeading icon={Users}>
          Executive Summary
        </SlideHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* =====================================
              LEFT — PROBLEM & SOLUTION
          ====================================== */}
          <div className="space-y-6">

            {/* Platform Overview */}
            <SlideCard delay={0.1}>
              <p className="text-slate-600 text-lg leading-relaxed font-body">
                Ek{' '}
                <span className="text-blue-600 font-bold">
                  hyperlocal social platform
                </span>{' '}
                jo logon ko unke local area aur community se digitally
                connect karega.
              </p>
            </SlideCard>

            {/* Problem */}
            <SlideCard delay={0.2}>
              <div className="flex items-start gap-4">

                <div className="
                  flex-shrink-0
                  p-3
                  rounded-xl
                  bg-red-50
                  border
                  border-red-100
                ">
                  <span className="text-2xl">
                    ❌
                  </span>
                </div>

                <div>
                  <h3 className="
                    text-slate-900
                    font-heading
                    font-bold
                    text-lg
                    mb-2
                  ">
                    Aaj Ki Problem
                  </h3>

                  <p className="
                    text-slate-500
                    font-body
                    leading-relaxed
                  ">
                    Social media par duniya bhar ka content milta hai,
                    lekin apne area ki important information ek
                    centralized place par nahi milti.
                  </p>
                </div>

              </div>
            </SlideCard>

            {/* Solution */}
            <SlideCard delay={0.3}>
              <div className="flex items-start gap-4">

                <div className="
                  flex-shrink-0
                  p-3
                  rounded-xl
                  bg-blue-50
                  border
                  border-blue-100
                ">
                  <span className="text-2xl">
                    ✓
                  </span>
                </div>

                <div>
                  <h3 className="
                    text-slate-900
                    font-heading
                    font-bold
                    text-lg
                    mb-2
                  ">
                    Platform Ka Solution
                  </h3>

                  <p className="
                    text-slate-500
                    font-body
                    leading-relaxed
                  ">
                    Local information, community connection, aur
                    structured communication — sab kuch ek jagah.
                  </p>
                </div>

              </div>
            </SlideCard>

          </div>

          {/* =====================================
              RIGHT — COMMUNITY TYPES
          ====================================== */}
          <SlideCard
            delay={0.4}
            className="flex flex-col justify-center"
          >

            <h3 className="
              text-slate-900
              font-heading
              font-bold
              text-2xl
              mb-6
              text-center
            ">
              Platform Kis Kis Ke Liye?
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {communityTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.8
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{
                    delay: 0.5 + index * 0.08
                  }}
                  whileHover={{
                    scale: 1.04,
                    y: -2
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-xl
                    bg-slate-50
                    border
                    border-slate-200
                    hover:border-blue-200
                    hover:bg-blue-50/50
                    hover:shadow-sm
                    transition-all
                    cursor-default
                  "
                >

                  {/* Icon */}
                  <div className={`
                    p-2
                    rounded-lg
                    ${type.bg}
                  `}>
                    <type.icon
                      className={`w-5 h-5 ${type.color}`}
                    />
                  </div>

                  {/* Label */}
                  <span className="
                    text-slate-700
                    font-body
                    font-semibold
                  ">
                    {type.label}
                  </span>

                </motion.div>
              ))}

            </div>

          </SlideCard>

        </div>

      </div>
    </div>
  );
};

export default ExecutiveSummary;
