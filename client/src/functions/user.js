import axios from "axios";

export const userCart = async (cart, authtoken) => await axios.post(`${process.env.REACT_APP_API}/all/cart`,{ cart }, {
      headers: {
        authtoken,
      },
    }
  );

//get user details
export const  getUserDeatils = async(authtoken) =>
await axios.get(`${process.env.REACT_APP_API}/user/profile`, {
  headers: {
    authtoken,
  },
})


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


  
export const createAddress = async (user, authtoken) =>
await axios.post(
  `${process.env.REACT_APP_API}/address`,
  { user },
  {
    headers: {
      authtoken,
    },
  }
);



//add shipping

export const addShipping = async (authtoken) => 
await axios.post(`${process.env.REACT_APP_API}/add-shipping`,
{
  headers: {
    authtoken,
  },
}
);


//update
export const updateShipperPincode = async (authtoken, shipper_pincode) => await axios.put(`${process.env.REACT_APP_API}/user/update/pincode`,{ shipper_pincode }, {
  headers: {
    authtoken,
  },
}
);

export const updateShipperName = async (authtoken, shipper_name) => await axios.put(`${process.env.REACT_APP_API}/user/update/name`,{ shipper_name }, {
  headers: {
    authtoken,
  },
}
);


export const updateShipperContact = async (authtoken, shipper_contact) => await axios.put(`${process.env.REACT_APP_API}/user/update/contact`,{ shipper_contact }, {
  headers: {
    authtoken,
  },
}
);


export const updateShipperLocality = async (authtoken, shipper_locality) => await axios.put(`${process.env.REACT_APP_API}/user/update/locality`,{ shipper_locality }, {
  headers: {
    authtoken,
  },
}
);



export const updateShipperAddress = async (authtoken, shipper_address) => await axios.put(`${process.env.REACT_APP_API}/user/update/address`,{ shipper_address }, {
  headers: {
    authtoken,
  },
}
);

