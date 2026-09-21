// src/slides/EmergencyAlerts.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const EmergencyAlerts = () => {
  const alerts = [
    { level: '🔴', type: 'Flood Warning' },
    { level: '🔴', type: 'Fire' },
    { level: '🔴', type: 'Missing Person' },
    { level: '🔴', type: 'Road Closure' },
    { level: '🟡', type: 'Electricity Outage' },
    { level: '🟡', type: 'Water Emergency' },
    { level: '🟡', type: 'Security Alert' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-5xl w-full">
        <SlideHeading icon={Bell}>Emergency & Important Alerts</SlideHeading>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-6 border-2 border-danger mb-8 animate-pulse-slow"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🚨</span>
            <h3 className="text-danger font-heading font-bold text-xl">EMERGENCY ALERT</h3>
          </div>
          <p className="text-white font-heading font-bold text-lg mb-2">⚠️ FLOOD WARNING</p>
          <p className="text-white/70 font-body text-sm">
            Low-lying areas in XYZ Colony may face flooding due to heavy rainfall. 
            Please move to safer locations immediately.
          </p>
          <div className="flex gap-4 mt-4 text-white/60 text-xs">
            <span>📍 XYZ Colony</span>
            <span>⏰ 30 mins ago</span>
            <span>📞 Emergency: 112</span>
          </div>
        </motion.div>
        <div className="grid grid-cols-4 gap-3">
          {alerts.map((alert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="glass rounded-xl p-4 text-center"
            >
              <div className="text-2xl mb-1">{alert.level}</div>
              <p className="text-white/80 text-xs font-body">{alert.type}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyAlerts;