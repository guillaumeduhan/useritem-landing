'use client';

import dynamic from "next/dynamic";
const UserItem: any = dynamic(() => import("useritem"), { ssr: false })

export default function TestPage() {
  const props: any = {
    title: "Guillaume",
    description: "codewithg@gmail.com"
  }

  return <UserItem {...props} />;
};