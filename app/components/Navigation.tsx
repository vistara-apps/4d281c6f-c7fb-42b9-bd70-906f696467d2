'use client';

import { motion } from 'framer-motion';
import { Home, Search, Plus, User, Bell } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'search', icon: Search, label: 'Search' },
  { id: 'post', icon: Plus, label: 'Post' },
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'profile', icon: User, label: 'Profile' },
];

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-sm mx-auto">
        <div className="glass-card rounded-t-2xl p-2 border-t border-white/20">
          <div className="flex items-center justify-around">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onTabChange(item.id)}
                  className={`
                    flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? 'bg-purple-500/20 text-purple-300'
                        : 'text-white/60 hover:text-white/80'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -top-1 w-1 h-1 bg-purple-400 rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
