'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, Star, Zap, Globe, Heart } from 'lucide-react';

const floatingElements = [
  { icon: Briefcase, delay: 0, x: '10%', y: '20%' },
  { icon: Users, delay: 1, x: '80%', y: '10%' },
  { icon: Star, delay: 2, x: '70%', y: '60%' },
  { icon: Zap, delay: 0.5, x: '15%', y: '70%' },
  { icon: Globe, delay: 1.5, x: '85%', y: '80%' },
  { icon: Heart, delay: 2.5, x: '5%', y: '40%' },
];

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className="absolute opacity-20"
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-8 h-8 text-white/30" />
          </motion.div>
        );
      })}
    </div>
  );
}
