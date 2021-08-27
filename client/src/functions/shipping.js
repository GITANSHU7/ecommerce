import axios from "axios";

export const createShipping = async (shipping, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/add-shipping`, shipping, {
    headers: {
      authtoken,
    },
  });