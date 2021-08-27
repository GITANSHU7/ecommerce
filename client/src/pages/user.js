
import React from 'react'

 const User = (user) => {

const { name , address , contact , pincode} = user;

    return (
        <div>
            <p>{name}</p>
            <p>{address}</p>           
            <p>{contact}</p>           
            <p>{pincode}</p>           
        </div>
    )
}

export default User;