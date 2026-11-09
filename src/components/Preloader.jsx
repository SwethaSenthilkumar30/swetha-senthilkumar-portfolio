import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center overflow-hidden select-none"
        >
          {/* Inner Text Container with exit animation */}
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter select-none px-6 text-center"
          >
            {/* Background copy in dimmed red */}
            <div className="text-red-900/30">
              {personalInfo.brandName}.
            </div>

            {/* Foreground copy with animated water-fill clipPath */}
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
              className="absolute inset-0 text-white pointer-events-none px-6 text-center"
            >
              {personalInfo.brandName}
              <span className="text-black">.</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
