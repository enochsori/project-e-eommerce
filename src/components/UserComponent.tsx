import { User } from 'firebase/auth';

type Props = {
  user: User;
};

export default function UserComponent({
  user: { photoURL, displayName },
}: Props) {
  return (
    <div className='flex items-center '>
      <img
        src={photoURL ? photoURL : '/images/user.jpg'}
        alt={displayName ? displayName : 'User'}
        className='w-10 h-10 rounded-full mr-2 text-sm shrink-0'
      />
      <span className='hidden md:block text-lg'>{displayName}</span>
    </div>
  );
}
