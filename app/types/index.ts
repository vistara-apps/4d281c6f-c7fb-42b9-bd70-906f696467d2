export interface User {
  userId: string; // Farcaster ID
  walletAddress?: string;
  displayName: string;
  bio?: string;
  skills: string[];
  reputationScore: number;
  tasksCompleted: number;
  tasksPosted: number;
  avatar?: string;
}

export interface Task {
  taskId: string;
  title: string;
  description: string;
  location: string;
  paymentAmount?: number;
  paymentType: 'paid' | 'unpaid';
  posterId: string;
  posterName: string;
  posterAvatar?: string;
  createdAt: string;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  skills?: string[];
  category?: string;
  deadline?: string;
}

export interface Application {
  applicationId: string;
  taskId: string;
  applicantId: string;
  appliedAt: string;
  status: 'pending' | 'accepted' | 'rejected';
  message?: string;
}

export interface Endorsement {
  endorsementId: string;
  taskId: string;
  endorserId: string;
  endorsedUserId: string;
  skill: string;
  rating: number;
  comment?: string;
  createdAt: string;
}
