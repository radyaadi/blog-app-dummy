import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/default-profile.jpg";
import { getDetailPost } from "@/app/_util/post-data";
import { getDetailUser } from "@/app/_util/user-data";
import CustomButton from "@/app/_component/button/CustomButton";
import CommentItem from "./_component/CommentItem";

const getData = (id) => {
  const dataPost = getDetailPost(id);
  const dataAuthor = getDetailUser(dataPost.authorId);
  return { post: dataPost, author: dataAuthor };
};

const PostDetailPage = ({ params }) => {
  const { post, author } = getData(params.postId);

  return (
    <>
      <Link href={`/post`}>
        <CustomButton onName="Back" />
      </Link>
      <div className="mt-6 bg-gray-800 p-5">
        <div className="inline-flex gap-x-3">
          <div className="relative z-0 mt-1 h-10 w-10">
            <Image
              src={profilePic}
              alt="User"
              layout="fill"
              objectFit="cover"
              className="z-0 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="inline-flex items-center gap-x-1">
              <h2>{author.name}</h2>
              <p className="text-sm text-gray-300">{author.gender}</p>
            </span>
            <span className="inline-flex gap-x-2 text-sm">
              <p>{author.email}</p>
            </span>
          </div>
        </div>
        <div className="my-3">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-[.95rem] text-gray-300">{post.body}</p>
        </div>
        <hr className="mb-4 mt-8 h-px border-0 bg-gray-200"></hr>
        <h2 className="font-bold">All Comments ({post.comments.length})</h2>
        <div className="inline-flex items-center gap-x-2 text-sm">
          <div className="mt-5 grid grid-flow-row gap-y-2">
            {post.comments.map((comment) => {
              return <CommentItem key={comment.id} id={comment.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;
