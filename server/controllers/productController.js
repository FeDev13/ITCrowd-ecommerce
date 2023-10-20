const multer = require("multer");
const path = require("path");

const Product = require("../models/productModel");

const addProduct = async (req, res) => {
  const data = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    img_Url: req.file.path,
    price: req.body.price,
  };

  const product = await Product.create(data);
  res.status(200).send(product);
  console.log(product);
};

const getAllProducts = async (request, response) => {
  const products = await Product.findAll();

  response.status(200).json(products);
};

const getProductById = async (request, response) => {
  const product = await Product.findOne({
    where: {
      id: request.params.id,
    },
  });

  response.status(200).json(product);
};

const patchProduct = async (request, response) => {
  const product = await Product.findOne({
    where: {
      id: request.params.id,
    },
  });

  await product.save();

  response.status(200).json(product);
};

const putProduct = async (request, response) => {
  //"/product/:id"
  const product = await Product.findOne({
    where: {
      id: request.params.id,
    },
  });

  const { id, name, description, imgUrl, price } = request.body;

  await product.set({
    id: id,
    name: name,
    description: description,
    imgUrl: imgUrl,
    price: price,
  });

  await product.save();

  response.status(200).json(product);
};

const deleteProduct = async (request, response) => {
  //"/product/:id"
  const product = await Product.findOne({
    where: {
      id: request.params.id,
    },
  });

  await product.destroy();

  response.status(204).json({});
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("img_Url");

module.exports = {
  addProduct,
  upload,
  getAllProducts,
  deleteProduct,
  getProductById,
  patchProduct,
  putProduct,
};
