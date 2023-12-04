const mongoose = require('mongoose')
const productSchema = require('./product')
const brandSchema = require('./brand')
const userSchema = require('./user')
const profileSchema = require('./profile')

const Product = mongoose.model('Product', productSchema)
const Brand = mongoose.model('Brand', brandSchema)
const User = mongoose.model('User', userSchema)
const Profile = mongoose.model('Profile', profileSchema)


module.exports = {
  Product,
  Brand,
  User,
  Profile
}