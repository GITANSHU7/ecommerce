import React, { useState, useEffect } from "react";
import { getModel } from "../../functions/model";
import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import ModelList from "../../components/model/ModelList";

const ModelHome = ({ match }) => {
  const [model, setModel] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = match.params;

  useEffect(() => {
    setLoading(true);
    getModel(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setModel(res.data.model);
      setProducts(res.data.products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col">
        {loading ? (
          <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
            Loading...
          </h4>
        ) : (
          <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
            {products.length} Products in "{model.name}" model
          </h4>
        )}
      </div>
    </div>

    <div className="row">
      {products.map((p) => (
        <div className="col" key={p._id}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  </div>
);
};


export default ModelHome;
