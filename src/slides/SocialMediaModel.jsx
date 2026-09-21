import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Users, ArrowDown } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const SocialMediaModel = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Users}>Traditional vs Hyperlocal Social Media</SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-8 border-2 border-danger/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-danger" />
              <h3 className="text-2xl font-heading font-bold text-danger">Traditional</h3>
            </div>
            <div className="space-y-4 text-center">
              {['PERSON', 'CONTENT', 'PEOPLE'].map((item, i) => (
                <React.Fragment key={i}>
                  <div className="px-6 py-3 rounded-xl bg-danger/20 text-white font-heading font-bold">
                    {item}
                  </div>
                  {i < 2 && <ArrowDown className="w-6 h-6 text-danger mx-auto" />}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-6 text-white/60 text-sm font-body text-center">
              Global content | Entertainment focus | No local context
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-8 border-2 border-success/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-heading font-bold text-success">Hyperlocal</h3>
            </div>
            <div className="space-y-4 text-center">
              {['PERSON', 'LOCAL COMMUNITY', 'RELEVANT CONTENT', 'LOCAL PEOPLE'].map((item, i) => (
                <React.Fragment key={i}>
                  <div className="px-6 py-3 rounded-xl bg-success/20 text-white font-heading font-bold">
                    {item}
                  </div>
                  {i < 3 && <ArrowDown className="w-6 h-6 text-success mx-auto" />}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-6 text-white/60 text-sm font-body text-center">
              Local content | Community focus | Relevant updates
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaModel;