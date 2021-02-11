import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import { getBrands } from "../../functions/brand";

const BrandList = () => {
    const [brands,setBrands] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
       setLoading(true);
       getBrands().then((b) => {
           setBrands(b.data);
           setLoading(false);
       })
    }, []);

const showBrands = () =>
    brands.map((b) => (
        <div key={b._id} className="col btn btn-outlineed-primary btn-lg btn-block btn-raised m-3">
           <Link to = {`/brand/${b.slug}`}> {b.name}</Link>
        </div>
    ));



    return (
        <>
         <h4 className="text-center p-3  display-4 jumbotron">Brands</h4>
            
        <div className="container">
              
            <div className="row">
                {loading ? (<h4 className="text-cenetr">Loading</h4>) : showBrands()}
            </div>
        </div>
        </>
    )
}
export default BrandList;