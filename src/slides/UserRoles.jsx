
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, User, Store } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const UserRoles = () => {
  const roles = [
    {
      icon: Crown,
      title: 'Super Admin',
      desc: 'Entire platform manage karega',
      permissions: ['Communities manage', 'Admin management', 'Platform monitoring', 'Reports & Analytics'],
      level: 'Level 1',
    },
    
    {
      icon: Shield,
      title: 'Community Admin',
      desc: 'Specific area manage karega',
      permissions: ['Announcements', 'Problems', 'Projects', 'Events', 'Moderation'],
      level: 'Level 2',
    },
    {
      icon: User,
      title: 'Resident / Member',
      desc: 'Normal community user',
      permissions: ['Posts create', 'Problems report', 'Comments', 'Likes', 'Events view'],
      level: 'Level 3',
    },
    {
      icon: Store,
      title: 'Business User',
      desc: 'Future role',
      permissions: ['Business profile', 'Services', 'Contact info', 'Offers', 'Local visibility'],
      level: 'Future',
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={User}>User Roles</SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-6
                cursor-pointer
                relative
                overflow-hidden
                shadow-sm
                hover:border-blue-200
                hover:shadow-md
                transition-all
              "
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />

              <div className="inline-flex p-3 rounded-xl bg-blue-50 border border-blue-100 mb-4">
                <role.icon className="w-8 h-8 text-blue-600" />
              </div>

              <div className="text-xs text-blue-600 font-bold mb-2 font-body">
                {role.level}
              </div>

              <h3 className="text-slate-900 font-heading font-bold text-xl mb-2">
                {role.title}
              </h3>

              <p className="text-slate-500 text-sm font-body mb-4">
                {role.desc}
              </p>

              <ul className="space-y-2">
                {role.permissions.map((perm, i) => (
                  <li
                    key={i}
                    className="
                      text-slate-600
                      text-xs
                      font-body
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {perm}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserRoles;
