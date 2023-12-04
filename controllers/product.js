const {Product} = require('../models')

const getProduct = async (req, res) => {
  try {
    const product = await Product.find()
    res.json(product)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const getOneProduct = async (req, res) => {
  try {
    const {id} = req.params
    const product = await Product.findById(id)
    if (product) {
      return res.json(product)
    }
    res.status(404).json({message: 'Product not found!'})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const createProduct = async (req, res) => {
  try {
    const product = await new Product(req.body)
    await product.save()
    res.status(201).json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if (product) {
        return res.status(200).send('product deleted')
        }
        throw new Error('product not found')
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateProduct = async (req, res) => {
    try{
        const id = req.params.id
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true})
        if (product) {
            return res.status(200).json(product)
        }
        throw new Error('product not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

module.exports = {
  getProduct,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct
}