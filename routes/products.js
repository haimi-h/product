let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Product Model
let productSchema = require("../models/productModel");
// CREATE product
router.route("/create-product").post(async (req, res, next) => {
  await productSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// READ products
router.route("/").get(async (req, res, next) => {
  await productSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// Get Single product
router.route("/get-product/:id").get(async (req, res, next) => {
  await productSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// Update product
router.route("/update-product/:id").put(async (req, res, next) => {
  await productSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// Delete product
router.route("/delete-products/:id").delete(async (req, res, next) => {
  await productSchema
  
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;