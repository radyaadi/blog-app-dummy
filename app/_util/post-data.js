export let POSTS = [
  {
    id: "blog-aaaa",
    authorId: "user-aaaa",
    title: "About Real Madrid and club information",
    body: "The honorific title real is Spanish for royal and was bestowed to the club by King Alfonso XIII in 1920 together with the royal crown in the emblem. Real Madrid have played their home matches in the 83,186-capacity Santiago Bernabeu in downtown Madrid since 1947.",
    comments: [
      { id: "com-0001" },
      { id: "com-0002" },
      { id: "com-0003" },
      { id: "com-0004" },
    ],
  },
  {
    id: "blog-bbbb",
    authorId: "user-bbbb",
    title: "FC Barcelona Official Channel",
    body: "Popularly known as Barca, FC Barcelona is a celebrated soccer (association football) club located in Barcelona, Spain. The team is renowned for its skillful and entertaining style of play that emphasizes passing and flowing movement",
    comments: [{ id: "com-0005" }, { id: "com-0006" }],
  },
  {
    id: "blog-cccc",
    authorId: "user-cccc",
    title: "FC Bayern Munich: Come and discover the city's biggest club",
    body: "Bayern Munich was founded in 1900 and has become Germany's most famous and successful football club. Almost all of Bayern's success has come since the 1960s.",
    comments: [{ id: "com-0007" }, { id: "com-0008" }, { id: "com-0009" }],
  },
  {
    id: "blog-dddd",
    authorId: "user-dddd",
    title: "Arsenal Definition & Meaning",
    body: "You can use arsenal to refer to a large number of tools, methods, or resources that someone has available to help them achieve what they want to do. Managers use a full arsenal of motivational techniques to get employees to take risks. He has more punches in his arsenal than other boxers.",
    comments: [{ id: "com-0010" }],
  },
  {
    id: "blog-eeee",
    authorId: "user-eeee",
    title: "Manchester United FC - history, facts and stats",
    body: "What's the point of Manchester United? To deliver a sense of wellbeing, ownership and community, as much as a return on investment. Perhaps we are saying nothing new here, but it's a movement which, for the benefit of all of us, should only get collectively stronger.",
    comments: [
      { id: "com-0011" },
      { id: "com-0012" },
      { id: "com-0013" },
      { id: "com-0014" },
      { id: "com-0015" },
    ],
  },
];

const getAllPosts = () => {
  return POSTS;
};
const getDetailPost = (id) => {
  const foundedPost = POSTS.find((post) => post.id === id);
  return foundedPost;
};

export { getAllPosts, getDetailPost };
