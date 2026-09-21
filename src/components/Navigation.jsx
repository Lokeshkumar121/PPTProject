import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Grid, X } from 'lucide-react';

const Navigation = ({ current, total, onNext, onPrev, onGoTo, slides }) => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 glass-dark">
        <div className="flex items-center gap-4">
          <button
            onClick={onPrev}
            disabled={current === 0}
            className="p-3 rounded-full bg-white/10 hover:bg-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={onNext}
            disabled={current === total - 1}
            className="p-3 rounded-full bg-white/10 hover:bg-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-white/70 text-sm font-body">
            Slide <span className="text-white font-bold">{current + 1}</span> / {total}
          </span>
          
          <button
            onClick={() => setShowGrid(!showGrid)}
            className="p-3 rounded-full bg-white/10 hover:bg-primary/30 transition-all hover:scale-110"
          >
            <Grid className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Grid View */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-lg overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-heading font-bold text-white">
                  All Slides
                </h2>
                <button
                  onClick={() => setShowGrid(false)}
                  className="p-3 rounded-full bg-white/10 hover:bg-danger/30 transition-all"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {slides.map((slide, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => {
                      onGoTo(index);
                      setShowGrid(false);
                    }}
                    className={`p-4 rounded-xl text-left transition-all hover:scale-105 ${
                      current === index
                        ? 'bg-primary/30 border-2 border-primary'
                        : 'bg-white/5 border-2 border-transparent hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs text-primary font-bold mb-1">
                      SLIDE {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-white font-heading font-semibold text-sm">
                      {slide.title}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;