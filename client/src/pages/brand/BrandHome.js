import React, { useState, useEffect } from "react";
import { getBrand } from "../../functions/brand";
import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import BrandList from "../../components/brand/BrandList";

const CategoryHome = ({ match }) => {
  const [brand, setBrand] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = match.params;

  useEffect(() => {
    setLoading(true);
    getBrand(slug).then((b) => {
      console.log(JSON.stringify(b.data, null, 4));
      setBrand(b.data);
    });
  }, []);

  return <p>{slug}</p>;
};

export default CategoryHome;
