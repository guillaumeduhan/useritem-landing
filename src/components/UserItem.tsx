'use client';
import { UserItemProps } from '@/app/page';

const UserItem = ({ data, setData }: { data: UserItemProps, setData: (u: UserItemProps) => void }) => {

  if (!data) return <p>No data.</p>

  const {
    avatar,
    avatarBackgroundColor,
    avatarUrl,
    border,
    description,
    disabled,
    name,
    onClick,
    status,
    onlyAvatar,
    reverse,
    squared,
    style,
    verified,
    width,
  } = data;

  const getStatusColor = () => {
    if (!status) return;
    switch (status) {
      case 'offline':
        return 'bg-red-500 border-red-400'
      case 'busy':
        return 'bg-amber-500 border-amber-400'
      case 'online':
        return 'bg-green-500 border-green-400'
      default:
        break;
    }
  }

  return <div onClick={() => {
    if (onClick) onClick()
  }}
    className={`useritem group px-3 py-2 flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 cursor-pointer transition duration-300 ${border && 'border border-neutral-200 dark:border-neutral-700 hover:border-neutral-100 hover:dark:border-neutral-600'} ${!squared && 'rounded-lg'} ${disabled && "pointer-events-none opacity-50"} ${style}`}>
    {avatar && <div className={`relative flex items-center justify-center text-lg avatar size-12 bg-neutral-100 dark:bg-neutral-800 hover:dark:bg-neutral-700 transition-all duration-300 font-[600] ${!squared && 'rounded-full'}`}>
      <span>{name[0] || 'A'}</span>
      {status && <span className={`absolute bottom-0 right-0 rounded-full size-3 border ${getStatusColor()}`}></span>}
    </div>}
    {!onlyAvatar && <div className="grid mr-6 user">
      <p className="text-[16px]">{name}</p>
      {description && <p className="opacity-50 text-[14px]">{description}</p>}
    </div>}
  </div>
}
export default UserItem;