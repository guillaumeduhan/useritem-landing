
'use client';
import UserItem from '@/components/UserItem';
import Image from 'next/image';
import { useState } from 'react'
import logo from "../../public/logo.png";
import UserOptionsDropdown from '@/components/Form';
import { Minus, Plus } from 'lucide-react';

export type UserItemProps = {
  avatar: boolean;
  avatarBackgroundColor?: string;
  avatarUrl?: string;
  border?: boolean;
  description?: string;
  disabled?: boolean;
  name: string;
  onClick?: (() => void) | null;
  onlyAvatar?: boolean;
  reverse?: boolean;
  showStatus?: boolean;
  status?: 'online' | 'offline' | 'busy';
  squared?: boolean;
  style?: React.CSSProperties;
  verified?: boolean;
  width?: number;
};

const Homepage = () => {
  const [formData, setFormData] = useState<UserItemProps>({
    avatar: true,
    avatarBackgroundColor: "#03b66e",
    avatarUrl: "https://avatars.githubusercontent.com/u/31253241?v=4&size=64",
    border: true,
    description: "CTO @Allocations",
    disabled: false,
    name: "Guillaume Duhan",
    onClick: () => alert("hello world"),
    onlyAvatar: false,
    reverse: false,
    showStatus: false,
    status: 'online',
    squared: false,
    style: {},
    verified: true,
    width: 200,
  });

  const SCALES = ['scale-100', 'scale-110', 'scale-120', 'scale-140', 'scale-160', 'scale-180', 'scale-200'] as const;

  const [scale, setScale] = useState<(typeof SCALES)[number]>('scale-120');

  const updateScale = (direction: 'up' | 'down') => {
    setScale((prev) => {
      const index = SCALES.indexOf(prev);
      if (index === -1) return SCALES[0];

      return direction === 'up'
        ? SCALES[Math.min(index + 1, SCALES.length - 1)]
        : SCALES[Math.max(index - 1, 0)];
    });
  };
  return <main className="relative flex flex-col min-h-screen p-2 lg:p-4">
    <header>
      <div className="flex items-center gap-2">
        <div className="overflow-hidden rounded-full size-16">
          <Image src={logo} alt="useritem" />
        </div>
        <div className="px-5 py-3 transition duration-300 rounded-lg shadow cursor-pointer text-neutral-300 bg-gradient-to-r to-neutral-800 from-transparent hover:from-neutral-800">
          <code>npm i useritem@latest</code>
        </div>
      </div>
    </header>
    <div className="z-50 flex items-center justify-center grow">
      <div className={`${scale}`}>
        <UserItem {...{ data: formData, setData: setFormData }} />
      </div>
    </div>
    <footer className="p-2 cursor-pointer lg:p-4">
      <div className="flex items-center gap-4">
        <UserOptionsDropdown {...{ formData, setFormData }} />
        <div className="p-1 rounded bg-neutral-200 dark:bg-neutral-800" onClick={() => updateScale('up')}>
          <Plus />
        </div>
        <div className="p-1 rounded bg-neutral-200 dark:bg-neutral-800" onClick={() => updateScale('down')}>
          <Minus />
        </div>
      </div>
    </footer>
  </main>
}
export default Homepage;