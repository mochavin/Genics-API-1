const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      message: 'Products fetched successfully',
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching products',
      data: error,
    });
  }
};

// Save a product
const saveProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();

    return res.status(201).json({
      message: 'Product saved successfully',
      data: savedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error saving product',
      data: error,
    });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const product = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
      new: true,
    });

    return res.status(200).json({
      message: 'Product updated successfully',
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error updating product',
      data: error,
    });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deleteProduct = await Product.findByIdAndDelete(productId);

    return res.status(200).json({
      message: 'Product deleted successfully',
      data: deleteProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error deleting product',
      data: error,
    });
  }
};

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
};
