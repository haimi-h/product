import React from "react";
import { Link } from "react-router-dom";

function ProductTable(props) {
  const { products, onUpdate, onDelete} = props;
  

  
  
  return (
    <div className="App mt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Available</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        
          {
            
          products.map(product => {
            return (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                

                <td onClick={() => onUpdate(product._id, product.isAvailable)}>
                  {product.isAvailable ? (
                    <input
                      type="checkbox"
                      checked
                      onChange={() => onUpdate(product._id, false)}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      onChange={() => onUpdate(product._id, true)}
                    />
                  )}
                </td>
                <td>
                <Link to={`/products/edit/${product._id}`}>

                  <button
                    className="btn btn-primary"
                    onClick={() => onDelete(product._id)}
                  >
                    Edit
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(product._id)}
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
