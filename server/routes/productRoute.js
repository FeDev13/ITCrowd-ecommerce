const productController = require("../controllers/productController");

const router = require("express").Router();

router.post(
  "/addProduct",
  productController.upload,
  productController.addProduct
);
router.get("/allProducts", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.put("/:id", productController.putProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
