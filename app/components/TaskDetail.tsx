'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  User,
  Calendar,
  Users,
} from 'lucide-react';
import { Task } from '../types';
import { UserAvatar } from './UserAvatar';
import { FCardButton } from './FCardButton';

interface TaskDetailProps {
  task: Task;
  onBack: () => void;
  onApply: (task: Task) => void;
}

export function TaskDetail({ task, onBack, onApply }: TaskDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-0 bg-gradient-to-br from-purple-900 to-purple-800 z-50 overflow-y-auto"
    >
      <div className="min-h-screen">
        {/* Header */}
        <div className="sticky top-0 backdrop-blur-md bg-black/20 border-b border-white/10 z-10">
          <div className="max-w-sm mx-auto px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              <h1 className="text-lg font-semibold text-white">Task Details</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-sm mx-auto px-4 py-6 space-y-6">
          {/* Task Header */}
          <div className="glass-card rounded-lg p-4">
            <div className="flex items-start gap-3 mb-4">
              <UserAvatar
                src={task.posterAvatar}
                alt={task.posterName}
                size="large"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-1">
                  {task.title}
                </h2>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <User className="w-4 h-4" />
                  <span>{task.posterName}</span>
                </div>
              </div>
              {task.paymentType === 'paid' && task.paymentAmount && (
                <div className="bg-green-500/20 px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">
                      ${task.paymentAmount}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Meta Information */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>{task.location}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="w-4 h-4" />
                <span>
                  Posted {new Date(task.createdAt).toLocaleDateString()}
                </span>
              </div>
              {task.deadline && (
                <div className="flex items-center gap-2 text-orange-400 col-span-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Due: {new Date(task.deadline).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="glass-card rounded-lg p-4">
            <h3 className="font-semibold text-white mb-3">Description</h3>
            <p className="text-white/80 leading-relaxed">{task.description}</p>
          </div>

          {/* Skills Required */}
          {task.skills && task.skills.length > 0 && (
            <div className="glass-card rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3">Skills Required</h3>
              <div className="flex flex-wrap gap-2">
                {task.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Apply Section */}
          <div className="glass-card rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-white/70" />
              <span className="text-white/70 text-sm">Ready to help?</span>
            </div>
            <FCardButton
              variant="accent"
              size="large"
              className="w-full"
              onClick={() => onApply(task)}
            >
              Apply for this Task
            </FCardButton>
            <p className="text-white/50 text-xs mt-2 text-center">
              Your application will be sent to the task poster
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
