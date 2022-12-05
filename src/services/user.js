import api from '.';

const authUser = async ({ email, password }) => {
  const response = await api.post('/login', { email, password });

  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post('/', { ...userData });

  return response.data;
};

export default authUser;
