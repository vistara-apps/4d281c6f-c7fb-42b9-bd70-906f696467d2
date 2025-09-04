import { Task, User } from '../types';

export const mockUsers: User[] = [
  {
    userId: 'fid123',
    walletAddress: '0x1234...5678',
    displayName: 'Alex Johnson',
    bio: 'Web developer and designer',
    skills: ['JavaScript', 'React', 'Design'],
    reputationScore: 4.8,
    tasksCompleted: 15,
    tasksPosted: 8,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    userId: 'fid456',
    walletAddress: '0x8765...4321',
    displayName: 'Maria Garcia',
    bio: 'Marketing specialist and content creator',
    skills: ['Marketing', 'Content Writing', 'Social Media'],
    reputationScore: 4.9,
    tasksCompleted: 23,
    tasksPosted: 12,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b586?w=150&h=150&fit=crop&crop=face'
  }
];

export const mockTasks: Task[] = [
  {
    taskId: '1',
    title: 'Website Redesign',
    description: 'Looking for a creative designer to redesign our local bakery website. Need modern, mobile-friendly design.',
    location: 'San Francisco, CA',
    paymentAmount: 500,
    paymentType: 'paid',
    posterId: 'fid789',
    posterName: 'Sarah Chen',
    posterAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    createdAt: '2024-01-15T10:00:00Z',
    status: 'open',
    skills: ['Design', 'Web Development'],
    category: 'Design',
    deadline: '2024-02-01'
  },
  {
    taskId: '2',
    title: 'Local Event Photography',
    description: 'Need a photographer for a community fundraising event. 3-hour event, all equipment provided.',
    location: 'Oakland, CA',
    paymentAmount: 200,
    paymentType: 'paid',
    posterId: 'fid101',
    posterName: 'Mike Torres',
    posterAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    createdAt: '2024-01-14T14:30:00Z',
    status: 'open',
    skills: ['Photography'],
    category: 'Creative',
    deadline: '2024-01-25'
  },
  {
    taskId: '3',
    title: 'Dog Walking Service',
    description: 'Reliable person needed to walk my golden retriever twice a week. Flexible schedule.',
    location: 'Berkeley, CA',
    paymentAmount: 25,
    paymentType: 'paid',
    posterId: 'fid202',
    posterName: 'Emma Wilson',
    posterAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    createdAt: '2024-01-13T09:15:00Z',
    status: 'open',
    skills: ['Pet Care'],
    category: 'Services',
    deadline: '2024-01-20'
  },
  {
    taskId: '4',
    title: 'Social Media Management',
    description: 'Small business looking for help managing Instagram and Facebook accounts. 10 hours/week.',
    location: 'San Jose, CA',
    paymentAmount: 300,
    paymentType: 'paid',
    posterId: 'fid303',
    posterName: 'David Kim',
    posterAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    createdAt: '2024-01-12T16:45:00Z',
    status: 'open',
    skills: ['Social Media', 'Marketing'],
    category: 'Marketing'
  },
  {
    taskId: '5',
    title: 'Tutoring - High School Math',
    description: 'Looking for a patient tutor to help with algebra and geometry. Once a week sessions.',
    location: 'Palo Alto, CA',
    paymentAmount: 40,
    paymentType: 'paid',
    posterId: 'fid404',
    posterName: 'Lisa Rodriguez',
    posterAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    createdAt: '2024-01-11T11:20:00Z',
    status: 'open',
    skills: ['Teaching', 'Mathematics'],
    category: 'Education'
  },
  {
    taskId: '6',
    title: 'Garden Cleanup Volunteer',
    description: 'Community garden needs volunteers for weekend cleanup. Great way to give back!',
    location: 'Mountain View, CA',
    paymentType: 'unpaid',
    posterId: 'fid505',
    posterName: 'Green Community',
    posterAvatar: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=150&h=150&fit=crop&crop=face',
    createdAt: '2024-01-10T08:00:00Z',
    status: 'open',
    skills: ['Gardening', 'Volunteering'],
    category: 'Community',
    deadline: '2024-01-28'
  }
];
