import axios from "axios";


 export const getBrands = async () => 
 await axios.get(
      `${process.env.REACT_APP_API}/brands `)

  export const getBrand = async (slug) => 
 await axios.get(
      `${process.env.REACT_APP_API}/brand/${slug} `)
  

      export const removeBrand = async (slug,authtokn) => 
      await axios.get(
           `${process.env.REACT_APP_API}/brand/${slug} `,{
               header:{
                   authtoken,
               }
           })
             