import axios from "axios";


export const createAddress = async (detail, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/address`,
    { detail },
    {
      headers: {
        authtoken,
      },
    }
  );
