import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, FileText, Search, CheckCircle, User, Hammer, Star, PartyPopper } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const ProblemTracking = () => {
  const stages = [
    { icon: FileText, label: 'Reported', color: 'bg-red-500' },
    { icon: Search, label: 'Under Review', color: 'bg-orange-500' },
    { icon: CheckCircle, label: 'Verified', color: 'bg-yellow-500' },
    { icon: User, label: 'Assigned', color: 'bg-blue-500' },
    { icon: Hammer, label: 'Work Started', color: 'bg-purple-500' },
    { icon: CheckCircle, label: 'Resolved', color: 'bg-green-500' },
    { icon: Star, label: 'Feedback', color: 'bg-cyan-500' },
    { icon: PartyPopper, label: 'Closed', color: 'bg-emerald-500' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={BarChart3}>Problem Tracking - Status Stages</SlideHeading>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white/70 text-lg mb-10 font-body"
        >
          Problem sirf submit hokar <span className="text-danger">disappear nahi hogi</span>. Uska status track hoga:
        </motion.p>

        {/* Progress Bar */}
        <div className="relative mb-12">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 2 }}
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
            />
          </div>
        </div>

        {/* Stages */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass rounded-2xl p-5 flex flex-col items-center text-center cursor-pointer"
            >
              <div className={`p-3 rounded-xl ${stage.color} mb-3`}>
                <stage.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-white font-heading font-semibold text-sm">
                {stage.label}
              </p>
              <div className="mt-2 text-xs text-white/40 font-body">
                Stage {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="glass rounded-2xl p-5 border-l-4 border-success">
            <p className="text-white font-body">
              ✅ User ko pata chalega ki problem currently kis stage par hai
            </p>
          </div>
          <div className="glass rounded-2xl p-5 border-l-4 border-primary">
            <p className="text-white font-body">
              ✅ Complete transparency in problem resolution
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemTracking;