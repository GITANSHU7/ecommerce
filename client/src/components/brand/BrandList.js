import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getBrands } from "../../functions/brand";

const BrandList = () => {
    const [brand,setBrands] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
       setLoading(true);
       getBrands().then((b) => {
           setBrands(b.data);
           setLoading(false);
       })
    }, [])
const showBrands = () =>{
    brands.map((b) => (
        <div className="btn btn-outlineed-primary btn-lg btn-block btn-raised m-3">
            {b.name}
        </div>
    ))
}


    return (
        <div className="container">
            <div className="row">
                {loading ? (<h4 className="text-cenetr">Loading</h4>) : showBrands()}
            </div>
        </div>
    )
}
export default BrandList;