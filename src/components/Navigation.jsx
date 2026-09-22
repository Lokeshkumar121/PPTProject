
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Grid, X } from 'lucide-react';

const Navigation = ({ current, total, onNext, onPrev, onGoTo, slides }) => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_20px_rgba(15,23,42,0.06)]">
        
        <div className="flex items-center gap-3">
          {/* Previous */}
          <button
            onClick={onPrev}
            disabled={current === 0}
            className="
              p-3 rounded-xl
              bg-slate-50
              border border-slate-200
              hover:bg-blue-50
              hover:border-blue-200
              disabled:opacity-30
              disabled:cursor-not-allowed
              transition-all
              hover:scale-105
            "
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            disabled={current === total - 1}
            className="
              p-3 rounded-xl
              bg-blue-600
              hover:bg-blue-700
              disabled:opacity-30
              disabled:cursor-not-allowed
              transition-all
              hover:scale-105
              shadow-sm
            "
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Slide Counter + Grid */}
        <div className="flex items-center gap-5">
          <span className="text-slate-500 text-sm font-medium">
            Slide{' '}
            <span className="text-blue-600 font-bold">
              {current + 1}
            </span>{' '}
            / {total}
          </span>

          <button
            onClick={() => setShowGrid(!showGrid)}
            className="
              p-3 rounded-xl
              bg-slate-50
              border border-slate-200
              hover:bg-blue-50
              hover:border-blue-200
              transition-all
              hover:scale-105
            "
          >
            <Grid className="w-5 h-5 text-blue-600" />
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
            className="
              fixed inset-0 z-50
              bg-slate-50/95
              backdrop-blur-xl
              overflow-y-auto
            "
          >
            <div className="max-w-7xl mx-auto p-8">

              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-1">
                    Presentation
                  </p>

                  <h2 className="text-3xl font-heading font-bold text-slate-900">
                    All Slides
                  </h2>
                </div>

                <button
                  onClick={() => setShowGrid(false)}
                  className="
                    p-3 rounded-xl
                    bg-white
                    border border-slate-200
                    hover:bg-red-50
                    hover:border-red-200
                    transition-all
                    shadow-sm
                  "
                >
                  <X className="w-6 h-6 text-slate-700" />
                </button>
              </div>

              {/* Slides Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
                    className={`
                      p-5
                      rounded-2xl
                      text-left
                      transition-all
                      hover:-translate-y-1
                      ${
                        current === index
                          ? `
                            bg-blue-50
                            border-2
                            border-blue-500
                            shadow-md
                          `
                          : `
                            bg-white
                            border-2
                            border-slate-200
                            hover:border-blue-300
                            hover:shadow-md
                          `
                      }
                    `}
                  >
                    {/* Slide Number */}
                    <div className="text-xs text-blue-600 font-bold mb-2 tracking-wide">
                      SLIDE {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Slide Title */}
                    <div className="text-slate-800 font-heading font-semibold text-sm leading-5">
                      {slide.title}
                    </div>

                    {/* Active Indicator */}
                    {current === index && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        <span className="text-xs text-blue-600 font-medium">
                          Current Slide
                        </span>
                      </div>
                    )}
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
