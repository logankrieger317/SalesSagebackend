const {Profile} = require('../models')

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.find()
    res.json(profile)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const getOneProfile = async (req, res) => {
  try {
    const {id} = req.params
    const profile = await Profile.findById(id)
    if (profile) {
      return res.json(profile)
    }
    res.status(404).json({message: 'profile not found!'})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const createProfile = async (req, res) => {
  try {
    const profile = await new profile(req.body)
    await Profile.save()
    res.status(201).json(profile)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}

const deleteProfile = async (req, res) => {
    try {
        const {id} = req.params
        const profile = await Profile.findByIdAndDelete(id)
        if (profile) {
        return res.status(200).send('profile deleted')
        }
        throw new Error('profile not found')
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateProfile = async (req, res) => {
    try{
        const id = req.params.id
        const profile = await Profile.findByIdAndUpdate(id, req.body, {new: true})
        if (profile) {
            return res.status(200).json(profile)
        }
        throw new Error('profile not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

module.exports = {
  getOneProfile,
  getProfile,
  createProfile,
  deleteProfile,
  updateProfile
}