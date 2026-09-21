import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, MapPin, Building, Users } from 'lucide-react';
import { SlideHeading, SlideCard } from '../components/Slide';

const ExecutiveSummary = () => {
  const communityTypes = [
    { icon: Home, label: 'Village', color: 'text-green-400' },
    { icon: Building2, label: 'Society', color: 'text-blue-400' },
    { icon: MapPin, label: 'Colony', color: 'text-purple-400' },
    { icon: Building, label: 'Apartment', color: 'text-yellow-400' },
    { icon: Users, label: 'Mohalla', color: 'text-pink-400' },
    { icon: Building2, label: 'Town', color: 'text-cyan-400' },
    { icon: Building, label: 'City', color: 'text-orange-400' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={Users}>Executive Summary</SlideHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Text */}
          <div className="space-y-6">
            <SlideCard delay={0.1}>
              <p className="text-white/90 text-lg leading-relaxed font-body">
                Ek <span className="text-primary font-bold">hyperlocal social platform</span> jo 
                logon ko unke local area aur community se digitally connect karega.
              </p>
            </SlideCard>

            <SlideCard delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-danger/20">
                  <span className="text-2xl">❌</span>
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-lg mb-2">
                    Aaj Ki Problem
                  </h3>
                  <p className="text-white/70 font-body">
                    Social media par duniya bhar ka content milta hai, lekin 
                    apne area ki important information ek centralized place par nahi milti.
                  </p>
                </div>
              </div>
            </SlideCard>

            <SlideCard delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-success/20">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-lg mb-2">
                    Platform Ka Solution
                  </h3>
                  <p className="text-white/70 font-body">
                    Local information, community connection, aur structured 
                    communication — sab kuch ek jagah.
                  </p>
                </div>
              </div>
            </SlideCard>
          </div>

          {/* Right - Community Types */}
          <SlideCard delay={0.4} className="flex flex-col justify-center">
            <h3 className="text-white font-heading font-bold text-2xl mb-6 text-center">
              Platform Kis Kis Ke Liye?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {communityTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <type.icon className={`w-6 h-6 ${type.color}`} />
                  <span className="text-white font-body font-medium">{type.label}</span>
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