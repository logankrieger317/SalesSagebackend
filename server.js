const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bodyParser = require('body-parser')

const brandController = require('./controllers/brand')
const productController = require('./controllers/product')
const userController = require('./controllers/user')
const profileController = require('./controllers/profile')


const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// Brand
app.get('/brands', brandController.getBrand)
app.get('/brands/:id', brandController.getOneBrand)
app.post('/brands', brandController.createBrand)
app.put('/brands/:id', brandController.updateBrand)
app.delete('/brands/:id', brandController.deleteBrand) 


// Product
app.get('/products', productController.getProduct)
app.get('/products/:id', productController.getOneProduct)
app.post('/products', productController.createProduct)
app.put('/products/:id', productController.updateProduct)
app.delete('/products/:id', productController.deleteProduct)

//User
app.get('/users', userController.getUser)
app.get('/users/:id', userController.getOneUser)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)

//Profile
app.get('/profiles', profileController.getProfile)
app.get('/profiles/:id', profileController.getOneProfile)
app.post('/profiles', profileController.createProfile)
app.put('/profiles/:id', profileController.updateProfile)
app.delete('/profiles/:id', profileController.deleteProfile)


// Root
app.get('/', (req, res) => {
  res.send('This is root!')
})


// Listener
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})