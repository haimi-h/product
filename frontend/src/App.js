import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateProducts from "./CreateProducts";
import EditProduct from "./EditProduct";
import ProductTable from "./ProductTable";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/create-product"} className="nav-link">
            Product Management
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/create-product"} className="nav-link">
                  Create Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/product-list"} className="nav-link">
                  Product List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/create-product" element={<CreateProducts />} />
            <Route exact path="/edit-product/:id" element={<EditProduct />} />
            <Route exact path="/product-list" element={<ProductTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
