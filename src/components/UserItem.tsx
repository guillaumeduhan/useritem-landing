import { Settings } from "lucide-react";
import { useEffect, useState } from "react";
import ArrowDown from "./Icons/ArrowDown";
import Verified from "./Icons/Verified";

export type UserItemProps = {
  avatar?: boolean;
  avatarUrl?: string;
  border?: boolean;
  children?: React.ReactNode,
  description?: string;
  disabled?: boolean;
  dropdown?: boolean;
  icon?: boolean;
  infos?: boolean;
  reverse?: boolean;
  loading?: boolean;
  online?: boolean;
  shadow?: boolean;
  squared?: boolean;
  status?: boolean;
  style?: any;
  title?: string;
  verified?: boolean;
}

export default function UserItem(props: UserItemProps) {
  const {
    avatar,
    avatarUrl = "",
    border,
    children,
    dropdown,
    disabled,
    description,
    icon,
    infos,
    reverse,
    loading,
    online,
    shadow,
    squared,
    status,
    style,
    title,
    verified
  } = props;
  const [open, setOpen] = useState<boolean>(false);

  const onClickItem = () => {
    if (dropdown) return setOpen(!open);
  }

  const getInitials = () => {
    if (!title) return 'AA'
    const words = title.split(' ');
    const initials = words.map(word => word[0].toUpperCase());
    return initials.join('');
  }

  useEffect(() => {
    setOpen(false);
  }, [loading])

  return <div className="useritem" style={style}>
    <button onClick={onClickItem} className={`useritem--item ${infos ? 'gap-[8px]' : ''} ${disabled ? 'useritem--disabled' : ''} ${loading ? 'useritem--loading' : ''} ${border ? 'border' : ''} ${border && shadow ? 'shadow' : ''} ${squared ? '' : 'rounded-[8px]'} ${reverse ? 'flex-row-reverse' : ''}`}>
      {avatar && <div className="relative">
        <div className={`useritem--avatar transition ease-in duration-100 ${squared ? '' : 'rounded-full'}`} style={{
          backgroundImage: !loading && avatarUrl.length > 0 ? `url(${avatarUrl})` : '', backgroundSize: 'cover'
        }}>
          {!loading && avatarUrl === "" && <span>{getInitials()}</span>}
        </div>
        {!loading && status && <div className={`absolute ${squared ? '-bottom-1 -right-1' : 'bottom-0 right-0'}`}>
          <div className={`${online ? 'bg-green-500' : 'bg-neutral-200'} rounded-full h-4 w-4 border-2 border-white`} />
        </div>}
      </div>}
      {!loading && infos && <div className={`flex flex-col grow truncate ${reverse ? 'justify-end' : ''}`}>
        {title && <div className={`flex gap-[2px] ${reverse ? 'justify-end' : ''}`}>
          <p className="useritem--title text-right">{title}</p>{verified && <Verified />}
        </div>}
        {description && <p className="useritem--description">{description}</p>}
      </div>}
      {loading && <div className="flex flex-col gap-2 grow">
        <div className="w-[160px] h-4 useritem--loading--line" />
        <div className="w-[220px] h-4 useritem--loading--line" />
      </div>}
      {!loading && <div className="flex items-center justify-end">
        {dropdown && !icon && <ArrowDown />}
        {!dropdown && icon && <Settings />}
      </div>}
    </button>
    {dropdown && !loading && <div className={`useritem--dropdown ${open ? 'translate-y-0 z-[99] opacity-100' : 'translate-y-[-100%] -z-[99] opacity-0'} ${border ? 'border' : ''} ${shadow ? 'shadow' : ''} ${squared ? '' : ''}`}>
      {children}
    </div>}
  </div>
}
