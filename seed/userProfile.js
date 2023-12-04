const db = require('../db')
const { User, Profile } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const user1 = await new User({
        user: 'Joe',
        username: 'user1',
        
    })
    user1.save()

    const user2 = await new User({
        user: 'Jane',
        username: 'user2',

    })
    user2.save()



    const profiles = [
        {
        username: 'user1',
        password: 'password1',
        email: 'fake@fake.com',
        location: 'New York',
        bio: 'I love cocktails',
        image: 'https://i.imgur.com/9uV8e4A.jpg',
        user: user1._id
    },
    {
        username: 'user2',
        password: 'password2',
        email: 'nope@Really??.com',
        location: 'California',
        bio: 'I love cocktails',
        image: 'https://i.imgur.com/9uV8e4A.jpg',
        user: user2._id
    }

    ]
    await Profile.insertMany(profiles)
    console.log("Created profiles!")
}

const run = async () => {
    await main()
    db.close()
}

run()