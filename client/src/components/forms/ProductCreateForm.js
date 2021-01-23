import React from "react";
import { Select } from "antd";


const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleBrandChange,
  modelOptions,
  showModel,
}) => {
  // destructure
  const {
    title,
    manufacturer,
    type ,
	types,
    slug ,
    description,
    price ,
    brand,
	brands,
    models,
    transmission,
	  transmissions,
    fuel,
	fuels,
    shipping,
year,
years,
quantity,
images,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>


     <div className="form-group">
        <label>Manufacturer</label>
        <input
          type="text"
          name="manufacturer"
          className="form-control"
          value={manufacturer}
          onChange={handleChange}
        />
      </div>

    
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Shipping</label>
        <select
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label>Year</label>
        <select name="year" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>
	  <div className="form-group">
        <label>Fuel</label>
        <select name="fuel" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {fuels.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
	<div className="form-group">
        <label>Transmission</label>
        <select name="transmission" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {transmissions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>


      <div className="form-group">
        <label>Product Type</label>
        <select name="type" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>



      <div className="form-group">
        <label>Brand</label>
        <select
          name="brand"
          className="form-control"
          onChange={handleBrandChange}
        >
          <option>Please select</option>
          {brands.length > 0 &&
            brands.map((b) => (
              <option key={b._id} value={b._id}>
                {b.name}
              </option>
            ))}
        </select>
      </div>

      
        <div>
          <label>Model Categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={models}
            onChange={(value) => setValues({ ...values, models: value })}
          >
            {modelOptions.length &&
              modelOptions.map((m) => (
                <Option key={m._id} value={m._id}>
                  {m.name}
                </Option>
              ))}
          </Select>
        </div>
      

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductCreateForm;
