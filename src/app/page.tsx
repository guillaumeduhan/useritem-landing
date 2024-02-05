"use client";
import NextIcon from "@/components/Icons/Nextjs";
import ReactIcon from "@/components/Icons/React";
import UserItem from "@/components/UserItem";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CreditCardIcon, Settings, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const AVATAR_URL = "https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb60dc67d-fd59-47eb-84f1-e2ba033783d0_545x545.png"

export default function Home() {
  const [data, setData] = useState<any>({
    avatar: true,
    avatarUrl: AVATAR_URL,
    border: true,
    description: "codewithguillaume@gmail.com",
    disabled: false,
    dropdown: true,
    icon: false,
    loading: false,
    online: true,
    reverse: false,
    shadow: true,
    squared: false,
    status: true,
    title: "Guillaume Duhan",
    verified: true,
  });

  const [items] = useState<any>([
    {
      title: "Profile",
      icon: <User />
    }, {
      title: "Billing",
      icon: <CreditCardIcon />
    }, {
      title: "Settings",
      icon: <Settings />
    }
  ])

  const handleChange = ({ v, target }: any) => {
    if (target === 'avatarUrl') {
      return setData((prev: any) => ({ ...prev, [target]: data.avatarUrl.length === 0 ? AVATAR_URL : "" }))

    }
    setData((prev: any) => ({ ...prev, [target]: v }))
  }

  return <div className="flex flex-col gap-8">
    <header className="flex flex-col items-center justify-center pt-8 pb-2">
      <h1>useritem</h1>
      <p className="lg:text-[20px] text-neutral-400 mb-0 whitespace-normal">A simple, fully customizable component for displaying your users.</p>
    </header>
    <main className="grid gap-4 grow pb-12">
      <div className="flex items-center justify-center mb-6">
        <UserItem {...data} style={{ background: 'transparent' }}>
          <div className="grid gap-2 cursor-pointer">
            {items.map((item: any) => <div key={item.title} className="flex gap-2 items-center justify-start cursor-pointer hover:bg-neutral-100 px-2 py-1 rounded">
              {item.icon}
              {item.title}
            </div>)}
          </div>
        </UserItem>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:w-[600px] align-top py-4 mx-auto content-start">
          {["avatar", "avatarUrl", "border", "disabled", "dropdown", "icon", "loading", "online", "reverse", "shadow", "squared", "status", "verified"].map((target: any, key: number) => <div key={key} className="flex items-center justify-center gap-1">
            <Switch
              id={target}
              checked={data[target]}
              onCheckedChange={(v: any) => handleChange({ v, target })}
            />
            <Label htmlFor={target} className="w-[50px]">{target}</Label>
          </div>)}
        </div>
        <div className="flex items-center justify-center">
          <p className="text-neutral-400 mb-0 text-[12px]">All the props are customizable. <Link href="https://tally.so/r/3y9Z4x" className="text-black underline cursor-pointer">Request for more props here.</Link></p>
        </div>
        <div className="grid gap-4 max-w-[500px] mx-auto">
          <div>
            <code>npm i useritem</code>
          </div>
          <div className="flex gap-2 items-center justify-center text-[32px]">
            <ReactIcon />
            <NextIcon />
          </div>
        </div>
      </div>
    </main>
    <footer className="h-[300px] w-full opacity-50" style={{
      backgroundImage: `url('./bg.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }} />
  </div>
}
