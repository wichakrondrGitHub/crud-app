import axios from "axios";

const apiURL = process.env.REACT_APP_REQRES_API;

function getUsers() {
  const response = axios.get(`${apiURL}/user`);

  return response;
}

function getCreatedUser({ first_name, last_name, email }) {
  const response = axios.post(`${apiURL}/user`, {
    email,
    first_name,
    last_name
  });

  return response;
}

function getUpdatedUser(id, user) {
  const response = axios.put(`${apiURL}/user/${id}`, {
    avatar: user.avatar,
    id: id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name
  });

  return response;
}

function getDeletedUser(id) {
  const response = axios.delete(`${apiURL}/user/${id}`);

  return response;
}

export { getUsers, getCreatedUser, getUpdatedUser, getDeletedUser };
