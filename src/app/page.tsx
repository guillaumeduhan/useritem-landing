"use client";
import NextIcon from "@/components/Icons/Nextjs";
import ReactIcon from "@/components/Icons/React";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CreditCardIcon, Settings, User } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
const UserItem = dynamic(() => import("useritem"), { ssr: false })

const AVATAR_URL = "https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb60dc67d-fd59-47eb-84f1-e2ba033783d0_545x545.png";

export default function Home() {
  const [data, setData] = useState<any>({
    avatar: true,
    avatarUrl: AVATAR_URL,
    border: true,
    description: "codewithguillaume@gmail.com",
    disabled: false,
    dropdown: false,
    icon: false,
    infos: true,
    loading: false,
    online: true,
    reverse: false,
    shadow: false,
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
  ]);

  const handleChange = ({ v, target }: any) => {
    if (target === 'avatarUrl') {
      return setData((prev: any) => ({ ...prev, [target]: data.avatarUrl ? "" : data.avatarUrl.length === 0 ? AVATAR_URL : "" }))
    }
    setData((prev: any) => ({ ...prev, [target]: v }))
  };

  return <div className="flex flex-col gap-8">
    <header className="flex flex-col items-center justify-center pt-8 pb-2">
      <h1>useritem</h1>
      <p className="lg:text-[20px] text-neutral-400 mb-0 whitespace-normal">A fully customizable component to display your users.</p>
    </header>
    <main className="grid gap-4 pb-12 grow">
      <div className="flex items-center justify-center mb-6">
        <UserItem {...data} onClick={() => alert("hello there!")} />
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:w-[600px] align-top py-4 mx-auto content-start">
          {["avatar", "avatarUrl", "border", "disabled", "infos", "loading", "online", "shadow", "squared", "status"].map((target: any, key: number) => <div key={key} className="flex items-center justify-center gap-1">
            <Switch
              id={target}
              checked={data[target]}
              onCheckedChange={(v: any) => handleChange({ v, target })}
            />
            <Label htmlFor={target} className="w-[50px]">{target}</Label>
          </div>)}
        </div>
        <div className="flex items-center justify-center">
          <p className="text-neutral-400 mb-0 text-[12px]"><Link href="https://tally.so/r/3y9Z4x" className="text-black underline cursor-pointer">Request for more props here.</Link></p>
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
};
