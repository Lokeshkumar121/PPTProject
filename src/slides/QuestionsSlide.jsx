import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { SlideHeading } from '../components/Slide';

const QuestionsSlide = () => {
  const questions = [
    { emoji: '🚧', text: 'Road ka kaam kab complete hoga?' },
    { emoji: '💧', text: 'Water supply ka update kya hai?' },
    { emoji: '📢', text: 'Society mein koi announcement hai?' },
    { emoji: '🎉', text: 'Aaj koi local event hai?' },
    { emoji: '⚠️', text: 'Mere area mein koi problem report hui hai?' },
    { emoji: '🏪', text: 'Local business kaun sa available hai?' },
    { emoji: '🏆', text: 'Community mein kisne achievement ki?' },
    { emoji: '✅', text: 'Administration ne kisi problem par kya action liya?' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-20">
      <div className="max-w-7xl w-full">
        <SlideHeading icon={HelpCircle}>Kya Aapke Area Mein Kya Ho Raha Hai?</SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((q, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, x: 10 }}
              className="glass rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-primary/50 transition-all"
            >
              <span className="text-3xl">{q.emoji}</span>
              <p className="text-white font-body text-lg">{q.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
            <p className="text-white font-heading font-bold text-xl">
              Platform ka objective in questions ka answer ek hi digital platform par provide karna hai.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuestionsSlide;