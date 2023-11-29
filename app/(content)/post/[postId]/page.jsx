import CustomButton from '@/app/_component/button/CustomButton';
import profilePic from '@/public/default-profile.jpg';
import Image from 'next/image';
import Link from 'next/link';
import CommentItem from './_component/CommentItem';

const getPostDetail = async (id) => {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${id}`);
  const resJson = await res.json();
  return { post: resJson };
};

const getAuthor = async (id) => {
  const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`);
  const resJson = await res.json();
  return { author: resJson };
};

const getComment = async (id) => {
  const res = await fetch(
    `https://gorest.co.in/public/v2/posts/${id}/comments`
  );
  const resJson = await res.json();
  return { comments: resJson };
};

const PostDetailPage = async ({ params }) => {
  const { post } = await getPostDetail(params.postId);
  const { author } = await getAuthor(post.user_id);
  const { comments } = await getComment(params.postId);
  return (
    <>
      <Link href="/post">
        <CustomButton onName="Back" />
      </Link>
      <div className="mt-6 bg-gray-800 p-5">
        <div className="inline-flex gap-x-3">
          <div className="relative z-0 mt-2 h-10 w-10">
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
              <h2 className="font-bold ">{author.name}</h2>
              <p className="text-sm text-gray-300">
                {' '}
                ({author.gender === 'male' ? 'He' : 'She'})
              </p>
              <p
                className={`${
                  author.status === 'active'
                    ? 'text-green-400'
                    : 'text-gray-500'
                } text-3xl leading-none font-semibold ml-1 mb-1`}
              >
                •
              </p>
            </span>
            <span className="inline-flex gap-x-2 text-sm leading-none">
              <p>{author.email}</p>
            </span>
          </div>
        </div>
        <div className="my-3">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-[.95rem] text-gray-300">{post.body}</p>
        </div>
        <hr className="mb-4 mt-8 h-px border-0 bg-gray-200"></hr>
        <h2 className="font-bold mb-3">All Comments ({comments.length})</h2>
        <div className="w-full inline-flex items-center gap-x-2 text-sm">
          {comments.length < 1 ? (
            <p className="font-semibold w-full text-center text-gray-400 pb-2">
              no comment yet
            </p>
          ) : (
            <div className="grid grid-flow-row gap-y-2">
              {comments.map((comment, index) => {
                return <CommentItem key={index} {...comment} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;
