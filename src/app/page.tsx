'use client';
import Form from '@/components/Form';
import { Undo } from 'lucide-react';
import Image from 'next/image';
import Logo from 'public/logo.png';
import { useState } from 'react';
import UserItem from 'useritem';

export default function Home() {
  const [formData, setFormData] = useState({
    avatar: true,
    avatarUrl: '',
    backgroundColor: '#03b66e',
    border: true,
    description: 'Youtuber',
    disabled: false,
    width: 275,
    onClick: null,
    online: false,
    onlyAvatar: false,
    reverse: false,
    squared: false,
    status: true,
    shadow: false,
    style: {},
    name: 'Guillaume Duhan',
    verified: true,
  });

  return <div className="w-full h-screen py-12">
    <div className="flex flex-col items-center justify-center gap-8">
      <header className="text-center">
        <div className="w-12 mx-auto overflow-hidden rounded">
          <Image alt="useritem" src={Logo} />
        </div>
        <h1 className="text-[40px] font-bold font-[700]">Never code this component again</h1>
        <p className="text-neutral-600">Lightweight and modular.</p>
        <div className="flex items-center justify-center">
          <Undo className="-rotate-[100deg] text-neutral-600" />
        </div>
      </header>
      <div>
        <UserItem {...formData} />
      </div>
      <div className="px-4 py-3 text-sm rounded shadow bg-slate-100 text-neutral-800">
        <code>npm i useritem@latest</code>
      </div>
      <Form {...{ formData, setFormData }} />
    </div>
  </div>;
};