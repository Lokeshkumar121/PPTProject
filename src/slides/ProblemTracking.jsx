
import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  FileText,
  Search,
  CheckCircle,
  User,
  Hammer,
  Star,
  PartyPopper
} from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const ProblemTracking = () => {
  const stages = [
    { icon: FileText, label: 'Reported' },
    { icon: Search, label: 'Under Review' },
    { icon: CheckCircle, label: 'Verified' },
    { icon: User, label: 'Assigned' },
    { icon: Hammer, label: 'Work Started' },
    { icon: CheckCircle, label: 'Resolved' },
    { icon: Star, label: 'Feedback' },
    { icon: PartyPopper, label: 'Closed' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={BarChart3}>
          Problem Tracking - Status Stages
        </SlideHeading>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-slate-500 text-lg mb-10 font-body"
        >
          Problem sirf submit hokar{' '}
          <span className="text-blue-600 font-bold">
            disappear nahi hogi
          </span>
          . Uska status track hoga:
        </motion.p>

        {/* Progress Bar */}
        <div className="relative mb-12">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 2 }}
              className="h-full bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400"
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
              whileHover={{ scale: 1.04, y: -5 }}
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
                <stage.icon className="w-6 h-6 text-blue-600" />
              </div>

              <p className="text-slate-800 font-heading font-semibold text-sm">
                {stage.label}
              </p>

              <div className="mt-2 text-xs text-slate-400 font-body">
                Stage {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div
            className="
              bg-white
              rounded-2xl
              p-5
              border
              border-slate-200
              border-l-4
              border-l-blue-500
              shadow-sm
            "
          >
            <p className="text-slate-700 font-body">
              ✅ User ko pata chalega ki problem currently kis stage par hai
            </p>
          </div>

          <div
            className="
              bg-white
              rounded-2xl
              p-5
              border
              border-slate-200
              border-l-4
              border-l-blue-600
              shadow-sm
            "
          >
            <p className="text-slate-700 font-body">
              ✅ Complete transparency in problem resolution
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemTracking;
