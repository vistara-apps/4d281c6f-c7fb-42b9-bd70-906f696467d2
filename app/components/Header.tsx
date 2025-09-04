'use client';

import { motion } from 'framer-motion';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { UserAvatar } from './UserAvatar';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-sm mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <motion.h1 
              className="text-xl font-bold text-white gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p 
                className="text-sm text-white/60 mt-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <ConnectWallet 
              text="Connect"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            />
            <UserAvatar size="medium" />
          </div>
        </div>
      </div>
    </header>
  );
}
