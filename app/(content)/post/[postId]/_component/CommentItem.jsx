import Image from 'next/image';
import profilePic from '@/public/default-profile.jpg';

const CommentItem = ({ name, body }) => {
  return (
    <div className="inline-flex gap-x-3">
      <div className="relative z-0 mt-1 h-8 w-8">
        <Image
          src={profilePic}
          alt="User"
          layout="fill"
          objectFit="cover"
          className="z-0 rounded-full"
        />
      </div>
      <div className="flex w-fit flex-col gap-x-3">
        <p className=" text-sm font-extrabold">{name}</p>
        <p className="ext-sm">{body}</p>
      </div>
    </div>
  );
};

export default CommentItem;
