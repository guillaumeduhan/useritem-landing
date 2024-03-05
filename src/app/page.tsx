"use client";
import Documentation from "@/components/Documentation";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { Github } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from '../../public/logo.png';
const UserItem = dynamic(() => import("useritem"), { ssr: false })

const AVATAR_URL = "https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb60dc67d-fd59-47eb-84f1-e2ba033783d0_545x545.png";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<any>({
    avatar: true,
    avatarUrl: AVATAR_URL,
    border: true,
    description: "codewithguillaume@gmail.com",
    disabled: false,
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
    width: 290,
    minHeight: 76,
    style: {
      fontSize: "18px",
    }
  });

  const randomize = async () => {
    try {
      const response = await fetch('/api/random');
      if (!response.ok) {
        throw new Error('Failed to fetch random data');
      }
      const data = await response.json();
      console.log(data)
      setData(data);
    } catch (error) {
      console.error('Error fetching random data:', error);
    }
  };


  const handleChange = ({ v, target }: any) => {
    if (target === 'avatarUrl') {
      return setData((prev: any) => ({ ...prev, [target]: data.avatarUrl ? "" : data.avatarUrl.length === 0 ? AVATAR_URL : "" }))
    }
    setData((prev: any) => ({ ...prev, [target]: v }))
  };

  return <div className="container mx-auto">
    <main className="grid items-center gap-12 m-4 lg:m-12 lg:grid-cols-12">
      <div className="grid gap-8 text-center lg:col-span-6 lg:text-left lg:animate__animated animate__fadeInUp">
        <div className="w-24 h-24 mx-auto overflow-hidden rounded-lg lg:mx-0">
          <Image src={Logo} alt="UserItem" />
        </div>
        <h1 className="text-[32px] lg:text-[64px]">Never Code This Component Again</h1>
        <p className="text-[24px] lg:text-[32px]">Lightweight and modular. <br />Use it to display your users.</p>
        <code>npm i useritem@latest</code>
        <a href="https://www.producthunt.com/posts/useritem?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-useritem" target="_blank">
          <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=442355&theme=light" alt="Useritem - Never code this component again | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" />
        </a>
        <div className="flex items-center gap-4 mx-auto lg:mx-0">
          <Link href="https://dub.sh/useritem-github" target="_blank">
            <Button>
              <Github className="w-4 h-4 mr-2" /> Github
            </Button>
          </Link>
          <Button className="text-sm" variant="secondary" onClick={() => setOpen(!open)}>Docs</Button>
        </div>
      </div>
      <div className="flex flex-col gap-[64px] lg:col-span-6 lg:animate__animated animate__fadeInRight">
        <div className="text-[16px] mx-auto">
          <UserItem {...data} onClick={() => alert("hello there!")} />
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {["avatar", "avatarUrl", "border", "disabled", "loading", "online", "reverse", "small", "shadow", "squared", "status", "verified"].map((target: any, key: number) => <div key={key} className="flex items-center justify-center gap-2">
            <Switch
              id={target}
              checked={data[target]}
              onCheckedChange={(v: any) => handleChange({ v, target })}
            />
            <Label htmlFor={target} className="w-[50px]">{target}</Label>
          </div>)}
        </div>
        <Link href="https://tally.so/r/3y9Z4x" className="text-center text-black underline cursor-pointer">Request for props.</Link>
      </div>
    </main>
    {open && <Documentation />}
  </div>
};