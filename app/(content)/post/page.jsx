import { getAllPosts } from "@/app/_util/post-data";
import PostItem from "./_component/PostItem";

const getData = () => {
  const data = getAllPosts();
  return data;
};

const PostPage = () => {
  const posts = getData();
  return (
    <div className="grid w-full grid-flow-row gap-y-3">
      <h1 className="mb-3 text-3xl font-bold">Recently Blog</h1>
      {posts.map((post) => {
        return <PostItem key={post.id} {...post} />;
      })}
    </div>
  );
};

export default PostPage;
