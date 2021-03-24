import React from 'react'
import { useDispatch, useSelector } from "react-redux";


const Testing2 = () => {
    let dispatch = useDispatch();
    const { user } = useSelector((state) => ({ ...state }));
  
    return (
        <div>
            <h3>dfhdfdshf</h3>
                  </div>
    )
}

export default Testing2;