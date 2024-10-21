'use client';
import Form from '@/components/Form';
import { useState } from 'react';
import UserItem from 'useritem';

export default function Home() {
  const [formData, setFormData] = useState({
    avatar: true,
    avatarUrl: 'https://avatars.githubusercontent.com/u/31253241?v=4&size=64',
    avatarBackgroundColor: '#03b66e',
    border: true,
    description: 'CTO @Allocations',
    disabled: false,
    width: 200,
    onClick: null,
    online: false,
    onlyAvatar: false,
    reverse: false,
    squared: false,
    status: false,
    shadow: false,
    style: {},
    name: 'Guillaume Duhan',
    verified: true,
  });

  return <div className="grid gap-4 items-center lg:grid-cols-2 w-full h-screen p-8 container">
    <div className="flex flex-col items-center justify-center gap-8">
      <header className="text-center">
        <h1 className='text-xl'>useritem v0.2.14</h1>
        <p className="text-neutral-500 text-lg">A lightweight and modular React component to display your users informations.</p>
      </header>
      <div className='bg-white w-[400px] p-12 rounded shadow flex items-center justify-center'>
        <UserItem {...formData} />
      </div>
      <div className="px-8 py-3 text-sm rounded-full shadow bg-neutral-900 text-white">
        <code>npm i useritem@latest</code>
      </div>
    </div>
    <Form {...{ formData, setFormData }} />
  </div>;
};