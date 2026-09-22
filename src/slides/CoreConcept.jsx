
import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const CoreConcept = () => {
  const communities = [
    { label: 'Village', icon: '🏘️' },
    { label: 'Society', icon: '🏢' },
    { label: 'Colony', icon: '🏡' },
    { label: 'Apartment', icon: '🏬' },
    { label: 'Mohalla', icon: '🏘️' },
    { label: 'Town', icon: '🏙️' },
    { label: 'City', icon: '🌆' },
    { label: 'Ward', icon: '📍' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20 bg-slate-50">
      <div className="max-w-7xl w-full">

        <SlideHeading icon={Globe}>
          Core Concept
        </SlideHeading>

        {/* Concept */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-3xl font-heading font-bold gradient-text mb-2">
            "Your Community, Your People, Your Place"
          </p>

          <p className="text-slate-500 font-body text-lg">
            Har local community ko apna digital social space provide karna
          </p>
        </motion.div>

        {/* Community Types */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                rotateY: -90
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0
              }}
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.5
              }}
              whileHover={{
                scale: 1.05,
                y: -8
              }}
              className="
                relative
                rounded-2xl
                p-6
                bg-white
                border
                border-slate-200
                cursor-pointer
                shadow-sm
                hover:border-blue-300
                hover:shadow-lg
                transition-all
              "
            >
              {/* Blue Accent */}
              <div className="
                absolute
                top-0
                left-0
                right-0
                h-1
                rounded-t-2xl
                bg-gradient-to-r
                from-blue-600
                to-blue-400
              " />

              {/* Community Icon */}
              <div className="
                w-16
                h-16
                mx-auto
                mb-4
                flex
                items-center
                justify-center
                rounded-2xl
                bg-blue-50
                border
                border-blue-100
              ">
                <span className="text-4xl">
                  {community.icon}
                </span>
              </div>

              {/* Label */}
              <h3 className="
                text-slate-800
                font-heading
                font-bold
                text-center
                text-xl
              ">
                {community.label}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 1.2
          }}
          className="mt-12 text-center"
        >
          <div className="
            inline-flex
            items-center
            gap-3
            px-8
            py-4
            rounded-2xl
            bg-blue-50
            border
            border-blue-200
            shadow-sm
          ">
            <span className="text-2xl">
              ✅
            </span>

            <p className="
              text-blue-800
              font-body
              font-medium
            ">
              Platform sirf "Digital Village" tak limited nahi hoga
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CoreConcept;
