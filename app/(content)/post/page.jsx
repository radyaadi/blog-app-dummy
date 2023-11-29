import PostItem from './_component/PostItem';

const getPost = async () => {
  const res = await fetch(
    'https://gorest.co.in/public/v2/posts?page=20&per_page=20'
  );
  const resJson = await res.json();
  return { posts: resJson };
};

const PostPage = async () => {
  const { posts } = await getPost();
  return (
    <div className="grid w-full grid-flow-row">
      <h1 className="mb-5 text-3xl font-bold">Recently Blog</h1>
      {posts.map((post) => {
        return <PostItem key={post.id} {...post} />;
      })}
    </div>
  );
};

export default PostPage;
