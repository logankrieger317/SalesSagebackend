const {Brand} = require('../models')

const getBrand = async (req, res) => {
  try {
    const brands = await Brand.find()
    res.json(brands)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const getOneBrand = async (req, res) => {
  try {
    const {id} = req.params
    const brand = await Brand.findById(id)
    if (brand) {
      return res.json(brand)
    }
    res.status(404).json({message: 'Brand not found!'})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const createBrand = async (req, res) => {
  try {
    const brand = await new Brand(req.body)
    await brand.save()
    res.status(201).json(brand)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}

const deleteBrand = async (req, res) => {
    try {
        const {id} = req.params
        const brand = await Brand.findByIdAndDelete(id)
        if (brand) {
        return res.status(200).send('Brand deleted')
        }
        throw new Error('Brand not found')
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateBrand = async (req, res) => {
    try{
        const id = req.params.id
        const brand = await Brand.findByIdAndUpdate(id, req.body, {new: true})
        if (brand) {
            return res.status(200).json(brand)
        }
        throw new Error('brand not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

module.exports = {
  getOneBrand,
  getBrand,
  createBrand,
  deleteBrand,
  updateBrand
}