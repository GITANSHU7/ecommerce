import axios from "axios";


 export const getBrands = async () => 
 await axios.get(
      `${process.env.REACT_APP_API}/brands `)
  