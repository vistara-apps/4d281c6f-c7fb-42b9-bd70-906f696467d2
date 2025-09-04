'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TaskCard } from './TaskCard';
import { FCardButton } from './FCardButton';
import { mockTasks } from '../data/mockData';
import { Task } from '../types';
import { Filter, MapPin, DollarSign } from 'lucide-react';

interface TaskFeedProps {
  onTaskClick: (task: Task) => void;
}

export function TaskFeed({ onTaskClick }: TaskFeedProps) {
  const [tasks] = useState(mockTasks);
  const [filter, setFilter] = useState<'all' | 'paid' | 'unpaid'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.paymentType === filter;
  });

  return (
    <div className="space-y-4">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-white/60" />
          <span className="text-white/80 text-sm">San Francisco Bay Area</span>
        </div>
        <FCardButton
          variant="secondary"
          size="small"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="w-4 h-4" />
        </FCardButton>
      </div>

      {/* Filter Buttons */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="flex gap-2 overflow-x-auto pb-2"
        >
          <FCardButton
            variant={filter === 'all' ? 'accent' : 'secondary'}
            size="small"
            onClick={() => setFilter('all')}
          >
            All Tasks
          </FCardButton>
          <FCardButton
            variant={filter === 'paid' ? 'accent' : 'secondary'}
            size="small"
            onClick={() => setFilter('paid')}
          >
            <DollarSign className="w-3 h-3 mr-1" />
            Paid
          </FCardButton>
          <FCardButton
            variant={filter === 'unpaid' ? 'accent' : 'secondary'}
            size="small"
            onClick={() => setFilter('unpaid')}
          >
            Volunteer
          </FCardButton>
        </motion.div>
      )}

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.map((task, index) => (
          <motion.div
            key={task.taskId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <TaskCard
              task={task}
              variant="compact"
              onClick={() => onTaskClick(task)}
            />
          </motion.div>
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="text-center py-8">
          <p className="text-white/60">No tasks found matching your filters</p>
        </div>
      )}
    </div>
  );
}
