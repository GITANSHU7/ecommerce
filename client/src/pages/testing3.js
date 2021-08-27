import React, { useEffect , useState } from 'react'
import { getUserDeatils } from '../functions/user'
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, register } from '../components/actions/userActions';




const Testing3 = () => {

    const [users , setUsers] = useState();
   const [contact,setContact] = useState();

    const {  user } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();
  



useEffect(() => {

},[dispatch])




return (
<>
<p>hii</p>
</>

    
);


}




export default Testing3;