import React, { useEffect, useState } from "react";
import axios from "axios";
function CreateProducts() {
  const [userForm, setUserForm] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    available: false
  });
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/products/create-product", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          description: "",
          price: "",
          quantity: "",
          available: false
        });
      });
  };
  useEffect(() => {}, []);
  return (
    <div className="container">
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="description"
              value={userForm.description}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              id="price"
              value={userForm.price}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="text"
              className="form-control"
              name="quantity"
              id="quantity"
              value={userForm.quantity}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="px-2">Availability</label>
            <input
              type="checkbox"
              checked={userForm.available}
              onChange={(e) =>
                setUserForm({ ...userForm, available: e.target.checked })
              }
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary custom-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateProducts;