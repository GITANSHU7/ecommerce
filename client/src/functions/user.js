import axios from "axios";

export const userCart = async (cart,authtoken) => 
await axios.post(
    `${process.env.REACT_APP_API}/user/cart`,
    {cart},
    {
        header: {
            authtoken,
        }
    }
);


export const getUserCart = async (authtoken) => 
await axios.get(
    `${process.env.REACT_APP_API}/user/cart`,
    
    {
        header: {
            authtoken,
        }
    }
);