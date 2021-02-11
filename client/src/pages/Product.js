import React, { useEffect, useState } from "react";
import { getProduct, getRelated } from "../functions/product";
import SingleProduct from "../components/cards/SingleProduct";
import ProductCard from "../components/cards/ProductCard";




const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const [related , setRelated] = useState([]);

  const { slug } = match.params;

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  const loadSingleProduct = () =>
    getProduct(slug).then((res) => {
      setProduct(res.data);
      // load related
      getRelated(res.data._id).then(res => setRelated(res.data)
        )
    });

  return (
    <div className="container-fluid">
      <div className="row pt-4">
        <SingleProduct product={product} />
      </div>

      <div className="row ">
        <div className="col text-center pt-5 pb-5"> <hr /><h4>Related products</h4> <hr />
        
        </div>
      </div>
      <div className="row pb-5">
        {related.length ? (
          related.map((r) => (
            <div key={r._id} className="col-md-3">
              <ProductCard product={r} />
            </div>
          ))
        ) : (
          <div className="text-center col">No Products Found</div>
        )}
      </div>
    </div>
  );
};

export default Product;
