import React from 'react';
import { motion } from 'framer-motion';

export const SlideContainer = ({ children, className = "" }) => (
  <div
    className={`w-full h-full flex items-center justify-center px-16 py-20 ${className}`}
  >
    {children}
  </div>
);

export const SlideTitle = ({ children, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-slate-900 mb-4">
      {children}
    </h1>

    {subtitle && (
      <p className="text-xl text-slate-500 font-body">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export const SlideCard = ({
  children,
  delay = 0,
  className = ""
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`
      bg-white
      border
      border-slate-200
      rounded-2xl
      p-6
      shadow-sm
      hover:shadow-md
      transition-shadow
      ${className}
    `}
  >
    {children}
  </motion.div>
);

export const SlideHeading = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-4 mb-8">
    {Icon && (
      <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
    )}

    <h2 className="text-4xl font-heading font-bold text-slate-900">
      {children}
    </h2>
  </div>
);
