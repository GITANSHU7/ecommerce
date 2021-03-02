import axios from "axios";

export const userCart = async (cart, authtoken) => await axios.post(`${process.env.REACT_APP_API}/all/cart`,{ cart }, {
      headers: {
        authtoken,
      },
    }
  );


export const getUserCart = async (authtoken) =>
await axios.get(`${process.env.REACT_APP_API}/all/cart`, {
  headers: {
    authtoken,
  },
});


export const emptyUserCart = async (authtoken) =>
await axios.put(`${process.env.REACT_APP_API}/all/cart`,
{}, 
{
  headers: {
    authtoken,
  },
});


export const saveUserAddress = async (authtoken, address) => await axios.post(`${process.env.REACT_APP_API}/user/address`,{ address }, {
  headers: {
    authtoken,
  },
}
);

export const saveUserPincode = async (authtoken, pincode) => await axios.post(`${process.env.REACT_APP_API}/user/pincode`,{ pincode }, {
  headers: {
    authtoken,
  },
}
);


export const saveUserContact = async (authtoken, contact) => await axios.post(`${process.env.REACT_APP_API}/user/contact`,{ contact }, {
  headers: {
    authtoken,
  },
}
);


export const saveUserName = async (authtoken, name) => await axios.post(`${process.env.REACT_APP_API}/user/name`,{ name }, {
  headers: {
    authtoken,
  },
}
);


export const saveUserLocality = async (authtoken, locality) => await axios.post(`${process.env.REACT_APP_API}/user/locality`,{ locality }, {
  headers: {
    authtoken,
  },
}
);


export const applyCoupon = async (authtoken, coupon) => await axios.post(`${process.env.REACT_APP_API}/user/cart/coupon`,{ coupon }, {
  headers: {
    authtoken,
  },
}
);


export const createContact = async (contact, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/addresscontact`,
    { contact },
    {
      headers: {
        authtoken,
      },
    }
  );

