import api from '.';

const getProducts = async () => {
  try {
    const response = await api.get('/products');

    return response.data;
  } catch (err) {
    console.error(err);
  }
  return [];
};

export default getProducts;
