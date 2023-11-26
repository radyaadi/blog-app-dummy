export let COMMENTS = [
  {
    id: "com-0001",
    authorId: "user-aaaa",
    body: "Sasaki is the real champions",
  },
  {
    id: "com-0002",
    authorId: "user-bbbb",
    body: "oh these bald tyres and poor engines!",
  },
  {
    id: "com-0003",
    authorId: "user-eeee",
    body: "Ducati rider’s will help pecco",
  },
  {
    id: "com-0004",
    authorId: "user-dddd",
    body: "Sprints rice boleh menang rice MotoGP belom tentu min, ada kejutan buat 1 peco sang bermental juara",
  },
  {
    id: "com-0005",
    authorId: "user-cccc",
    body: "Half of the grid will be racing to see Pecco as the champion (not by choice btw)",
  },
  {
    id: "com-0006",
    authorId: "user-dddd",
    body: "King Ronaldo gifts the shirt of the future legend to me",
  },
  {
    id: "com-0007",
    authorId: "user-dddd",
    body: "Vini likes goat just like us",
  },
  {
    id: "com-0008",
    authorId: "user-aaaa",
    body: "Those who think ronaldo is better than messi Leave a like",
  },
  {
    id: "com-0009",
    authorId: "user-cccc",
    body: "That's how kids are raised",
  },
  {
    id: "com-0010",
    authorId: "user-eeee",
    body: "The best 1 v 1 defender in the world",
  },
  {
    id: "com-0011",
    authorId: "user-bbbb",
    body: "one of the most underrated pl defender",
  },
  {
    id: "com-0012",
    authorId: "user-bbbb",
    body: "why is varane and awb on the bench",
  },
  {
    id: "com-0013",
    authorId: "user-cccc",
    body: "now arsenal cook like last year and then city come back and win it",
  },
  {
    id: "com-0014",
    authorId: "user-dddd",
    body: "Alwayss do Siiiiuuu",
  },
  {
    id: "com-0015",
    authorId: "user-eeee",
    body: "Siiiiuuu",
  },
];

const getAllComments = () => {
  return COMMENTS;
};
const getDetailComment = (id) => {
  const foundedComment = COMMENTS.find((comment) => comment.id === id);
  return foundedComment;
};

export { getAllComments, getDetailComment };
