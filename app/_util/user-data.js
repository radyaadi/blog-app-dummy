export let USERS = [
  {
    id: "user-aaaa",
    email: "firstuser@gmail.com",
    name: "Cristiano Ronaldo",
    gender: "Male",
    hobby: "Header and Shooting",
  },
  {
    id: "user-bbbb",
    email: "seconduser@gmail.com",
    name: "Lionel Messi",
    gender: "Male",
    hobby: "Free Kick and Dribbling",
  },
  {
    id: "user-cccc",
    email: "thirduser@gmail.com",
    name: "Megawanti",
    gender: "Female",
    hobby: "Fishing",
  },
  {
    id: "user-dddd",
    email: "fourthuser@gmail.com",
    name: "Lucyana",
    gender: "Female",
    hobby: "Playing Guitar",
  },
  {
    id: "user-eeee",
    email: "fiftuser@gmail.com",
    name: "Ten Hag",
    gender: "Female",
    hobby: "Playing Ball",
  },
];

const getAllUsers = () => {
  return USERS;
};
const getDetailUser = (id) => {
  const foundedUser = USERS.find((user) => user.id === id);
  return foundedUser;
};

const addUser = ({ email, name, gender, hobby }) => {
  USERS = [
    ...USERS,
    {
      id: `user-${+new Date()}`,
      email,
      name,
      gender,
      hobby,
    },
  ];
};

const editUser = ({ userId, email, name, gender, hobby }) => {
  const userToEdit = USERS.find((user) => user.id === userId);
  userToEdit.email = email;
  userToEdit.name = name;
  userToEdit.gender = gender;
  userToEdit.hobby = hobby;

  USERS = USERS.map((user) => {
    if (user.id === userId) {
      return user;
    }
    return user;
  });
};

const deleteUser = (id) => {
  USERS = USERS.filter((user) => user.id !== id);
};

export { getAllUsers, getDetailUser, addUser, editUser, deleteUser };
