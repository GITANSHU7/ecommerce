import React from "react";
import { Card  , Tabs} from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductListItems from "./ProductListItems";




const { TabPane } = Tabs;

const SingleProduct = ({ product }) => {
  const { title, description, images, slug , brand, model} = product;

  return (
    <>
      <div className="col-md-7">
        <Carousel showArrows={true} autoPlay infiniteLoop>
          {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
        </Carousel>

    <Tabs type= "card">
        <TabPane tab = "Description" key="1">
            {description && description}
        </TabPane>
        <TabPane tab = "Warrenty" key="2">
            {description && description}
        </TabPane>
    </Tabs>

      </div>

      <div className="col-md-5">
        <h1 className="bg-info p-3">{title}</h1>
        <Card
          actions={[
            <>
              <ShoppingCartOutlined className="text-success" /> <br />
              Add to Cart
            </>,
            <Link to="/">
              <HeartOutlined className="text-info" /> <br /> Add to Wishlist
            </Link>,
          ]}
        >
            <ProductListItems product = {product} />
          </Card>
      </div>
    </>
  );
};

export default SingleProduct;
