import Image from "next/image";
import profilePic from "@/public/default-profile.jpg";
import { getDetailComment } from "@/app/_util/comment-data";
import { getDetailUser } from "@/app/_util/user-data";

const getData = (id) => {
  const dataComment = getDetailComment(id);
  const dataAuthor = getDetailUser(dataComment.authorId);
  return { comment: dataComment, author: dataAuthor };
};

const CommentItem = ({ id }) => {
  const { comment, author } = getData(id);

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
        <p className=" text-sm font-extrabold">{author.name}</p>
        <p className="ext-sm">{comment.body}</p>
      </div>
    </div>
  );
};

export default CommentItem;
