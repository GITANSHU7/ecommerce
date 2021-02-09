import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'


const ProductListItems = ({product , match , params}) => {
    const {price , brand,manufacturer, description,shipping,year,fuel,transmission,type ,  models} = product;
    
  
    return (
        <ul className = "list-group">
            <li className = "list-group-item">
                Price
    <span className = "lable lable-default lable-pill pull-xs-right">
        Rs {price}
        </span>            
            </li>
          {brand && (
                 <li className = "list-group-item">
                 Brand
     <Link to = {`/brand/${brand.slug}`} className = "lable lable-default lable-pill pull-xs-right">
         {brand.name}
         </Link>            
             </li>
          )}
           
           
           {models &&  (
                <li className = "list-group-item">
                Model
                {models.map((m => (
    <Link key = {m._id} to = {`/model/${m.slug}`}  className = "lable lable-default lable-pill pull-xs-right">
        {m.name}
        </Link>
        )))}            
            </li>
           )}
           
            <li className = "list-group-item">
                type
    <span className = "lable lable-default lable-pill pull-xs-right">
        {type}
        </span>            
            </li>
            <li className = "list-group-item">
                Fuel
    <span className = "lable lable-default lable-pill pull-xs-right">
        {fuel}
        </span>            
            </li>
            <li className = "list-group-item">
                Transmission
    <span className = "lable lable-default lable-pill pull-xs-right">
        {transmission}
        </span>            
            </li>
        </ul>
    )
};

export default ProductListItems;