'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { TaskFeed } from './components/TaskFeed';
import { TaskDetail } from './components/TaskDetail';
import { FloatingElements } from './components/FloatingElements';
import { FCardButton } from './components/FCardButton';
import { Task } from './types';
import { Plus, Zap, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  const handleTaskApply = (task: Task) => {
    // Here you would integrate with your backend
    alert(`Applied for: ${task.title}`);
    setSelectedTask(null);
  };

  const handlePostTask = () => {
    // Navigate to task posting flow
    setActiveTab('post');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-800 relative">
      <FloatingElements />
      
      <Header 
        title="TaskLinkr" 
        subtitle="Connect Locally, Earn Globally"
      />

      <main className="max-w-sm mx-auto px-4 py-6 pb-24">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && !selectedTask && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Hero Section */}
              <div className="glass-card rounded-2xl p-6 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Find Your Next Opportunity
                  </h2>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    Connect with your local community. Complete tasks, build your reputation, and earn rewards.
                  </p>
                  
                  <div className="flex gap-3 justify-center">
                    <FCardButton
                      variant="accent"
                      onClick={handlePostTask}
                      className="flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Post Task
                    </FCardButton>
                    <FCardButton variant="secondary">
                      <Zap className="w-4 h-4 mr-2" />
                      Smart Match
                    </FCardButton>
                  </div>
                </motion.div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">247</div>
                  <div className="text-white/60 text-sm">Active Tasks</div>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">$12.5k</div>
                  <div className="text-white/60 text-sm">Total Earned</div>
                </div>
              </div>

              {/* Task Feed */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Nearby Tasks</h3>
                  <div className="flex items-center gap-1 text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Live</span>
                  </div>
                </div>
                <TaskFeed onTaskClick={handleTaskClick} />
              </div>
            </motion.div>
          )}

          {activeTab === 'post' && (
            <motion.div
              key="post"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4">Post a New Task</h2>
              <p className="text-white/70 mb-6">
                Create a new task for your community. Coming soon!
              </p>
              <FCardButton
                variant="secondary"
                onClick={() => setActiveTab('home')}
              >
                Back to Feed
              </FCardButton>
            </motion.div>
          )}

          {activeTab === 'search' && (
            <motion.div
              key="search"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4">Search Tasks</h2>
              <p className="text-white/70 mb-6">
                Advanced search and filtering. Coming soon!
              </p>
              <FCardButton
                variant="secondary"
                onClick={() => setActiveTab('home')}
              >
                Back to Feed
              </FCardButton>
            </motion.div>
          )}

          {activeTab === 'notifications' && (
            <motion.div
              key="notifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4">Notifications</h2>
              <p className="text-white/70 mb-6">
                Stay updated with task updates and messages. Coming soon!
              </p>
              <FCardButton
                variant="secondary"
                onClick={() => setActiveTab('home')}
              >
                Back to Feed
              </FCardButton>
            </motion.div>
          )}

          {activeTab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4">Profile</h2>
              <p className="text-white/70 mb-6">
                Manage your profile, skills, and reputation. Coming soon!
              </p>
              <FCardButton
                variant="secondary"
                onClick={() => setActiveTab('home')}
              >
                Back to Feed
              </FCardButton>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Navigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      />

      {/* Task Detail Modal */}
      <AnimatePresence>
        {selectedTask && (
          <TaskDetail
            task={selectedTask}
            onBack={() => setSelectedTask(null)}
            onApply={handleTaskApply}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
