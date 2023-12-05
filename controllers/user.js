const {User} = require('../models')

const getUser = async (req, res) => {
  try {
    console.log('get user')
    const user = await User.find()
    console.log(user)
    res.json(user)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const getOneUser = async (req, res) => {
  try {
    const {id} = req.params
    const user = await User.findById(id)
    if (user) {
      return res.json(user)
    }
    res.status(404).json({message: 'user not found!'})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        if (user) {
        return res.status(200).send('user deleted')
        }
        throw new Error('user not found')
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateUser = async (req, res) => {
    try{
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, req.body, {new: true})
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error('user not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

module.exports = {
  getOneUser,
  getUser,
  createUser,
  deleteUser,
  updateUser
}