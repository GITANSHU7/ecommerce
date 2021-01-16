import axios from "axios";

export const createProduct = async (product, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/product/product-create`, product, {
    headers: {
      authtoken,
    },
  });

  export const getProductByCount = async (count) =>
  await axios.post(`${process.env.REACT_APP_API}/products/${count}`);
