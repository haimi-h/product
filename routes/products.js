const express = require("express");
//const Product = require('../models/Product')
const Product = require("../models/productModel");
const router = express.Router();
router.get("/", (req, resp) => {
  Product.find()
    .then((data) => {
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});
router.post("/", (req, resp) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    isAvailable: false,
  });
  product
    .save()
    .then((data) => {
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});
router.patch("/:id", (req, resp) => {
  Product.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        isAvailable: req.body.isAvailable,
      },
      
    }
  )
    .then((data) => {
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});
router.delete("/:id", (req, resp) => {
  Product.deleteOne({ _id: req.params.id })
    .then((data) => {
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});
module.exports = router;
