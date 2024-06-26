'use client';

import UserItem from "useritem";

export default function TestPage() {
  const props: any = {
    title: "Guillaume",
    description: "codewithg@gmail.com"
  }

  return <UserItem {...props} />;
};