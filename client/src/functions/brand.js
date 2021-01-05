import axios from "axios";


 export const getBrands = async () => 
 await axios.get(
      `${process.env.REACT_APP_API}/brands `)

  export const getBrand = async (slug) => 
 await axios.get(
      `${process.env.REACT_APP_API}/brand/${slug} `)
  

      export const removeBrand = async (slug,authtoken) => 
      await axios.delete(
           `${process.env.REACT_APP_API}/brand/${slug} `,{
               header:{
                   authtoken,
               }
           })
             
           export const updateBrand = async (slug,authtoken) => 
           await axios.get(
                `${process.env.REACT_APP_API}/brand/${slug} `,{
                    header:{
                        authtoken,
                    }
                })
       