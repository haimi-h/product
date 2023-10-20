import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

function CreateProducts(props) {
  const { onCreate } = props;

  const [item, setItem] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    isAvailable: false,
  });

  const handleNameChange = (e) => {
    setItem({ ...item, name: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setItem({ ...item, description: e.target.value });
  };

  const handlePriceChange = (e) => {
    const price = Number(e.target.value);
    setItem({ ...item, price });
  };

  const handleQuantityChange = (e) => {
    const quantity = Number(e.target.value);
    setItem({ ...item, quantity });
  };

  const handleAvailabilityChange = () => {
    setItem({ ...item, isAvailable: !item.isAvailable });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(item);
  };

  return (
    <Fragment>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center m-3">Product Management App</h2>
            <div className="mb-2">
              <div className="col-3 m-1">
                Product Name:
                <input
                  name="name"
                  value={item.name}
                  onChange={handleNameChange}
                  className="form-control"
                />
              </div>

              <div className="mb-2">
                Item Description:
                <input
                  className="form-control"
                  name="description"
                  value={item.description}
                  onChange={handleDescriptionChange}
                />
              </div>

              <div className="col-5 d-flex justify-content-center m-1">
                Price:
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  value={item.price}
                  onChange={handlePriceChange}
                />
              </div>
              <div className="col-5 d-flex justify-content-center m-1">
                quantity:
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={handleQuantityChange}
                />
              </div>
              <input
                className="form-control"
                type="checkbox"
                checked={item.isAvailable}
                onChange={handleAvailabilityChange}
              />
              <button
                className="btn btn-primary col-2 d-flex justify-content-center m-1"
                type="submit"
              >
                Add
              </button>
              <Link
                to="/products"
                className="btn btn-primary col-2 d-flex justify-content-center m-1"
              >
                View Products
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default CreateProducts;
