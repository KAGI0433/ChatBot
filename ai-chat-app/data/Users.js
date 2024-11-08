const users = [];

const addUser = (user) => {
  users.push(user);
};

const getUsers = () => {
  return users;
};

module.exports = { addUser, getUsers };
