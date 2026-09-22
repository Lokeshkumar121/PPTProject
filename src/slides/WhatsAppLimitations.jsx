
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, XCircle, CheckCircle } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const WhatsAppLimitations = () => {
  const limitations = [
    {
      wa: 'Important info messages mein lost',
      platform: 'Structured feed with prominent announcements',
    },
    {
      wa: 'Purane announcements find nahi hote',
      platform: 'Searchable, archived announcements',
    },
    {
      wa: 'Problems ka tracking nahi',
      platform: 'Complete problem tracking system',
    },
    {
      wa: 'Development record nahi',
      platform: 'Structured development documentation',
    },
    {
      wa: 'Multiple groups = fragmented',
      platform: 'One centralized community space',
    },
    {
      wa: 'Public & private mix',
      platform: 'Clear separation',
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={MessageCircle}>
          WhatsApp Groups Ki Limitations
        </SlideHeading>

        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div
              className="
                flex
                items-center
                gap-2
                px-4
                py-3
                rounded-xl
                bg-slate-100
                border
                border-slate-300
              "
            >
              <XCircle className="w-5 h-5 text-slate-500" />

              <span className="text-slate-700 font-heading font-bold">
                WHATSAPP GROUPS
              </span>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                px-4
                py-3
                rounded-xl
                bg-blue-50
                border
                border-blue-200
              "
            >
              <CheckCircle className="w-5 h-5 text-blue-600" />

              <span className="text-blue-700 font-heading font-bold">
                OUR PLATFORM
              </span>
            </div>
          </div>

          {limitations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div
                className="
                  bg-white
                  rounded-xl
                  p-4
                  border
                  border-slate-200
                  border-l-4
                  border-l-slate-400
                  shadow-sm
                  hover:shadow-md
                  transition-all
                "
              >
                <p className="text-slate-500 font-body text-sm">
                  {item.wa}
                </p>
              </div>

              <div
                className="
                  bg-white
                  rounded-xl
                  p-4
                  border
                  border-blue-100
                  border-l-4
                  border-l-blue-600
                  shadow-sm
                  hover:shadow-md
                  hover:bg-blue-50/30
                  transition-all
                "
              >
                <p className="text-slate-700 font-body text-sm font-medium">
                  {item.platform}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppLimitations;
