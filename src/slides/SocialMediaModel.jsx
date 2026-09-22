
import React from 'react';
import { motion } from 'framer-motion';
import {
  XCircle,
  CheckCircle,
  Users,
  ArrowDown
} from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const SocialMediaModel = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Users}>
          Traditional vs Hyperlocal Social Media
        </SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="
              bg-white
              rounded-2xl
              p-8
              border-2
              border-slate-200
              shadow-sm
              hover:shadow-md
              transition-all
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-slate-500" />

              <h3 className="text-2xl font-heading font-bold text-slate-700">
                Traditional
              </h3>
            </div>

            <div className="space-y-4 text-center">
              {['PERSON', 'CONTENT', 'PEOPLE'].map((item, i) => (
                <React.Fragment key={i}>
                  <div
                    className="
                      px-6
                      py-3
                      rounded-xl
                      bg-slate-100
                      border
                      border-slate-200
                      text-slate-700
                      font-heading
                      font-bold
                    "
                  >
                    {item}
                  </div>

                  {i < 2 && (
                    <ArrowDown className="w-6 h-6 text-slate-400 mx-auto" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="mt-6 text-slate-500 text-sm font-body text-center">
              Global content | Entertainment focus | No local context
            </p>
          </motion.div>

          {/* Hyperlocal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="
              bg-white
              rounded-2xl
              p-8
              border-2
              border-blue-200
              shadow-sm
              hover:shadow-lg
              transition-all
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-blue-600" />

              <h3 className="text-2xl font-heading font-bold text-blue-700">
                Hyperlocal
              </h3>
            </div>

            <div className="space-y-4 text-center">
              {[
                'PERSON',
                'LOCAL COMMUNITY',
                'RELEVANT CONTENT',
                'LOCAL PEOPLE'
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <div
                    className="
                      px-6
                      py-3
                      rounded-xl
                      bg-blue-50
                      border
                      border-blue-100
                      text-blue-700
                      font-heading
                      font-bold
                    "
                  >
                    {item}
                  </div>

                  {i < 3 && (
                    <ArrowDown className="w-6 h-6 text-blue-500 mx-auto" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="mt-6 text-slate-500 text-sm font-body text-center">
              Local content | Community focus | Relevant updates
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaModel;
