import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
export interface SlideData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  location?: string;
  ctaText?: string;
  ctaLink?: string;
}
interface HeroSliderProps {
  slides: SlideData[];
  autoPlay?: boolean;
  interval?: number;
  topContent?: React.ReactNode;
}
export function HeroSlider({
  slides,
  autoPlay = true,
  interval = 6000,
  topContent
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
  };
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  const currentSlide = slides[currentIndex];
  // Variants for animations
  const textVariants = {
    hidden: {
      opacity: 0,
      x: 50
    },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: 'easeOut' as const
      }
    }),
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3
      }
    }
  };
  const thumbnailVariants = {
    initial: {
      scale: 0.9,
      opacity: 0.6
    },
    active: {
      scale: 1.05,
      opacity: 1,
      border: '2px solid #F48A34'
    },
    hover: {
      scale: 1,
      opacity: 0.8
    }
  };
  return <div className="relative w-full h-full overflow-hidden bg-black">
    {/* Background Image Cross-fade */}
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div key={currentSlide.id} className="absolute inset-0 w-full h-full" initial={{
        opacity: 0,
        scale: 1.1
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 1.2
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
        <img src={currentSlide.image} alt={currentSlide.title} className="w-full h-full object-cover" />
      </motion.div>
    </AnimatePresence>

    {/* Content Container */}
    <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        {/* Left Side: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full pt-20">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide.id} initial="hidden" animate="visible" exit="exit" className="space-y-6">
              {topContent && (
                <motion.div custom={0} variants={textVariants}>
                  {topContent}
                </motion.div>
              )}
              <motion.div custom={topContent ? 0.5 : 0} variants={textVariants} className="flex items-center space-x-2 text-orange-400 font-medium tracking-widest uppercase">
                <MapPin size={18} />
                <span>{currentSlide.subtitle}</span>
              </motion.div>

              <motion.h1 custom={1} variants={textVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                {currentSlide.title}
              </motion.h1>

              <motion.p custom={2} variants={textVariants} className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
                {currentSlide.description}
              </motion.p>

              <motion.div custom={3} variants={textVariants} className="pt-4">
                <Link to={currentSlide.ctaLink || '/contact'}>
                  <button className="group flex items-center space-x-3 bg-white text-blue-900 px-8 py-4 rounded-full font-bold transition-all hover:bg-orange-500 hover:text-white">
                    <span>{currentSlide.ctaText || 'Explore More'}</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Thumbnail Carousel */}
        <div className="hidden lg:flex lg:col-span-5 flex-col justify-center h-full space-y-4 pl-8 pb-12">
          <div className="relative w-full flex flex-row items-center justify-end space-x-6 pr-8">
            {slides.map((slide, index) => {
              const isActive = index === currentIndex;
              return <motion.div key={slide.id} onClick={() => goToSlide(index)} className={`relative cursor-pointer rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ${isActive ? 'w-[800px] h-[400px]' : 'w-40 h-72 opacity-30 hover:opacity-100'}`} layout // This enables smooth layout transitions when size changes
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 hover:bg-transparent transition-colors" />
                <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-bold truncate">
                    {slide.title}
                  </p>
                  {isActive && <p className="text-orange-300 text-xs uppercase tracking-wider">
                    {slide.subtitle}
                  </p>}
                </div>
              </motion.div>;
            })}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-end space-x-2 mt-4 pr-12">
            <div className="text-white font-mono">
              <span className="text-2xl font-bold">0{currentIndex + 1}</span>
              <span className="text-gray-500 mx-2">/</span>
              <span className="text-gray-500">0{slides.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Navigation (Bottom) */}
    <div className="lg:hidden absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-4">
      {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-orange-500 w-8' : 'bg-white/50'}`} />)}
    </div>
  </div>;
}