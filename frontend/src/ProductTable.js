import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function ProductTable() {
  const [userForm, setUserForm] = useState([]);
  const deleteProduct = (_id) => {
    axios
      .delete("http://localhost:4000/products/delete-products/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/products/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.description}</td>
                <td>{user.price} Br.</td>
                <td>{user.quantity}</td>
                <td>
                 
                  {user.available ? (
                    <span className="text-success">Available</span>
                  ) : (
                    <span className="text-danger">Not Available</span>
                  )}
                </td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2 custom-button"
                    to={"/edit-product/" + user._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm custom-delete"
                    onClick={() => deleteProduct(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ProductTable;
