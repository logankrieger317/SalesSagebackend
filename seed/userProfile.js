const db = require('../db')
const { User, Profile } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const user1 = await new User({
        user: 'Joe',
        username: 'user1',
        profile:'123456789012345678901234',
        
    })
    user1.save()

    



    const profiles = [
        {
        username: 'user1',
        password: 'password1',
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'fake@fake.com',
        about: 'I love cocktails',
        photo: 'https://i.imgur.com/9uV8e4A.jpg',
        street: '123 New York',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        notifications: true,
        user: user1._id
    },
    

    ]

    await Profile.insertMany(profiles)
    console.log("Created profiles!")
}

const run = async () => {
    await main()
    db.close()
}

run()