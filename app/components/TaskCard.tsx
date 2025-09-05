'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, User, Calendar } from 'lucide-react';
import Image from 'next/image';
import { Task } from '../types';

interface TaskCardProps {
  task: Task;
  variant?: 'compact' | 'detailed';
  onClick?: () => void;
}

export function TaskCard({
  task,
  variant = 'compact',
  onClick,
}: TaskCardProps) {
  const isDetailed = variant === 'detailed';

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="glass-card rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all duration-200"
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        {/* Poster Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
            {task.posterAvatar ? (
              <Image
                src={task.posterAvatar}
                alt={task.posterName}
                width={40}
                height={40}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User className="w-5 h-5 text-white" />
            )}
          </div>
        </div>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-white text-sm leading-tight truncate pr-2">
              {task.title}
            </h3>
            {task.paymentType === 'paid' && task.paymentAmount && (
              <div className="flex items-center gap-1 bg-green-500/20 px-2 py-1 rounded-md flex-shrink-0">
                <DollarSign className="w-3 h-3 text-green-400" />
                <span className="text-green-400 text-xs font-medium">
                  ${task.paymentAmount}
                </span>
              </div>
            )}
          </div>

          {/* Poster Name */}
          <div className="flex items-center gap-1 mb-2">
            <span className="text-white/70 text-xs">by {task.posterName}</span>
          </div>

          {isDetailed && (
            <p className="text-white/80 text-xs mb-3 line-clamp-2">
              {task.description}
            </p>
          )}

          {/* Task Meta */}
          <div className="flex items-center gap-3 text-xs text-white/60">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span className="truncate">{task.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{new Date(task.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Skills Tags */}
          {task.skills && task.skills.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {task.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-sm text-xs"
                >
                  {skill}
                </span>
              ))}
              {task.skills.length > 3 && (
                <span className="text-white/50 text-xs px-1">
                  +{task.skills.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Deadline */}
          {task.deadline && (
            <div className="flex items-center gap-1 mt-2 text-orange-400 text-xs">
              <Calendar className="w-3 h-3" />
              <span>Due: {new Date(task.deadline).toLocaleDateString()}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
