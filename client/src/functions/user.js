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


export const saveUserAddress = async (authtoken, Customer_address) => await axios.post(`${process.env.REACT_APP_API}/user/address`,{ Customer_address }, {
  headers: {
    authtoken,
  },
}
);


export const saveUserPincode = async (authtoken, Customer_pincode) => await axios.post(`${process.env.REACT_APP_API}/user/pincode`,{ Customer_pincode }, {
  headers: {
    authtoken,
  },
}
);


export const saveUserContact = async (authtoken, Customer_contact) => await axios.post(`${process.env.REACT_APP_API}/user/contact`,{ Customer_contact }, {
  headers: {
    authtoken,
  },
}
);


export const saveUserName = async (authtoken, Customer_name) => await axios.post(`${process.env.REACT_APP_API}/user/name`,{ Customer_name }, {
  headers: {
    authtoken,
  },
}
);


export const saveUserLocality = async (authtoken, Customer_locality) => await axios.post(`${process.env.REACT_APP_API}/user/locality`,{ Customer_locality }, {
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

  export const applyCoupon = async (authtoken, coupon) => await axios.post(`${process.env.REACT_APP_API}/user/cart/coupon`,{ coupon }, {
    headers: {
      authtoken,
    },
  }
  );
  export const createOrder = async (stripeResponse, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/order`,
    { stripeResponse },
    {
      headers: {
        authtoken,
      },
    }
  );


  export const getUserOrders = async (authtoken) =>
await axios.get(`${process.env.REACT_APP_API}/user/orders`, {
  headers: {
    authtoken,
  },
});

export const removeWishlist = async (productId , authtoken) =>
await axios.put(`${process.env.REACT_APP_API}/user/wishlist`, {productId} , {
  headers: {
    authtoken,
  },
});


export const addToWishlist = async (productId , authtoken) =>
await axios.post(`${process.env.REACT_APP_API}/user/wishlist`, {productId} , {
  headers: {
    authtoken,
  }, 
});


export const getWishlist = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/wishlist`, {
    headers: {
      authtoken,
    },
  });


  export const createCashOrderForUser = async (authtoken , COD , couponTrueOrFalse) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cash-order`,
    {couponApplied : couponTrueOrFalse , COD },
    {
      headers: {
        authtoken,
      },
    }
  );