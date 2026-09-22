
import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Lightbulb } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const RealLifeProblem = () => {
  const traditional = [
    'Problem',
    'WhatsApp message',
    'Someone forwards',
    'Administrator sees',
    'Unknown action',
    "Residents don't know status",
  ];

  const platform = [
    'Resident',
    'Report Problem',
    'Photo + Location',
    'Admin Verification',
    'Assigned',
    'Work Started',
    'Progress Update',
    'Resolved',
    'Resident Feedback',
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Lightbulb}>
          Real-Life Problem: ABC Colony Mein Street Lights
        </SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="
              bg-white
              rounded-2xl
              p-6
              border-2
              border-red-100
              shadow-sm
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-500" />

              <h3 className="text-2xl font-heading font-bold text-red-600">
                Traditional System
              </h3>
            </div>

            <div className="space-y-3">
              {traditional.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="
                    w-6
                    h-6
                    rounded-full
                    bg-red-50
                    border
                    border-red-100
                    text-red-500
                    text-xs
                    flex
                    items-center
                    justify-center
                    font-bold
                  ">
                    {index + 1}
                  </span>

                  <p className="text-slate-600 font-body">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-red-100">
              <p className="text-red-600 font-body text-sm">
                ❌ No transparency | ❌ No tracking | ❌ No accountability
              </p>
            </div>
          </motion.div>

          {/* Platform */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="
              bg-white
              rounded-2xl
              p-6
              border-2
              border-blue-100
              shadow-sm
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-blue-600" />

              <h3 className="text-2xl font-heading font-bold text-blue-700">
                Our Platform System
              </h3>
            </div>

            <div className="space-y-2">
              {platform.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <span className="
                    w-6
                    h-6
                    rounded-full
                    bg-blue-50
                    border
                    border-blue-100
                    text-blue-600
                    text-xs
                    flex
                    items-center
                    justify-center
                    font-bold
                  ">
                    {index + 1}
                  </span>

                  <p className="text-slate-700 font-body text-sm">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-blue-100">
              <p className="text-blue-600 font-body text-sm">
                ✅ Transparency | ✅ Tracking | ✅ Accountability
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-center"
        >
          <div className="
            inline-block
            px-8
            py-4
            rounded-2xl
            bg-blue-50
            border
            border-blue-200
            shadow-sm
          ">
            <p className="text-blue-800 font-heading font-bold text-xl">
              Core Value Proposition: Information ko conversation se structured action mein convert karna
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RealLifeProblem;
