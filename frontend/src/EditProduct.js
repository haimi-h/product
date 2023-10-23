import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditProduct() {
  const [userForm, setUserForm] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    available: false
  });
  let params = useParams();
  let navigate = useNavigate();
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onUpdate = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:4000/products/update-product/" + params.id, {
        name: userForm.name,
        description: userForm.description,
        price: userForm.price,
        quantity: userForm.quantity,
        available: userForm.available,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/product-list");
        
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/products/get-product/" + params.id)
      .then((res) => {
        setUserForm({
          name: res.data.data.name,
          description: res.data.data.description,
          price: res.data.data.price,
          quantity: res.data.data.quantity,
          available: JSON.parse(localStorage.getItem('availability')) || res.data.available,
        });
      });
      
  }, [params.id]);
  const handleCheckboxChange = (e) => {
    const newAvailability = e.target.checked;
    setUserForm((prev) => ({
      ...prev,
      available: newAvailability,
    }));
    localStorage.setItem('availability', JSON.stringify(newAvailability));
  };
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
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
            <label>Availability</label>
            <input
              type="checkbox"
              checked={userForm.available}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary custom-button">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditProduct;
