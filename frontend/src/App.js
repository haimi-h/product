import React, { useState, useEffect } from "react";
import {
  postProductsAPI,
  getProductsAPI,
  patchProductsAPI,
  deleteProductsAPI,
} from "./api/products";
import CreateProducts from "./CreateProducts";
import ProductTable from "./ProductTable";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsAPI().then((products) => setProducts(products));
  }, []);
  
  const addProduct = (product) => {
    postProductsAPI(product).then((data) => {
      setProducts([...products, data]);
    });
  };
  
  const updateProduct = (id, isAvailable) => {
    patchProductsAPI(id, isAvailable ? false : true).then((data) => {
      if (data) {
        getProductsAPI().then((products) => setProducts(products));
      }
    });
    
    
  };
  const deleteProduct = (id) => {
    deleteProductsAPI(id).then((data) => {
      if (data.deletedCount === 1) {
        setProducts(products.filter((product) => product._id !== id));
      }
    });
  };
  

  
  
  
  
  return (
    <main role="main" className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateProducts onCreate={addProduct} />} />

          <Route
            path="/products"
            element={
              <ProductTable
                products={products}
                onUpdate={updateProduct}
                onDelete={deleteProduct}
               
              
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
