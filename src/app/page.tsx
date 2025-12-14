
'use client';
import UserForm from '@/components/Form';
import UserItem from '@/components/UserItem';
import Image from 'next/image';
import { useState } from 'react'
import logo from "../../public/logo.png";
import UserOptionsDropdown from '@/components/Form';

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
  status?: 'online' | 'offline' | 'busy';
  squared?: boolean;
  style?: React.CSSProperties;
  verified?: boolean;
  width?: number;
};

const page = () => {
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
    status: "busy",
    squared: false,
    style: {},
    verified: true,
    width: 200,
  });
  return <main>
    <div className="relative flex items-center justify-center min-h-screen">
      <header>
        <div className="absolute overflow-hidden rounded-full top-2 left-2 size-16">
          <Image src={logo} alt="useritem" />
        </div>
        <div className="absolute px-5 py-3 transition duration-300 rounded-lg shadow cursor-pointer text-neutral-300 top-2 right-2 bg-gradient-to-r to-neutral-800 from-transparent hover:from-neutral-800">
          <code>npm i useritem@latest</code>
        </div>
      </header>
      <div className="z-50 scale-150">
        <UserItem {...{ data: formData, setData: setFormData }} />
      </div>
    </div>
    <footer className="fixed cursor-pointer bottom-4 left-4">
      <UserOptionsDropdown {...{ formData, setFormData }} />
    </footer>
  </main>
}
export default page;