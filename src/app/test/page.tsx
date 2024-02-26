'use client';

import dynamic from "next/dynamic";

const UserItem = dynamic(() => import("useritem"), { ssr: false })

export default function TestPage() {
  const props = {
    title: "Guillaume",
    description: "codewithg@gmail.com"
  }

  return <UserItem {...props} />;
}