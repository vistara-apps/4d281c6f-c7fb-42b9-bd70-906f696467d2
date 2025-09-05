'use client';

import { User as UserIcon } from 'lucide-react';
import Image from 'next/image';

interface UserAvatarProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function UserAvatar({
  src,
  alt,
  size = 'medium',
  className = '',
}: UserAvatarProps) {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16',
  };

  const iconSizes = {
    small: 'w-3 h-3',
    medium: 'w-5 h-5',
    large: 'w-8 h-8',
  };

  const sizePx = {
    small: 24,
    medium: 40,
    large: 64,
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center flex-shrink-0 ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || 'User avatar'}
          width={sizePx[size]}
          height={sizePx[size]}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <UserIcon className={`${iconSizes[size]} text-white`} />
      )}
    </div>
  );
}
