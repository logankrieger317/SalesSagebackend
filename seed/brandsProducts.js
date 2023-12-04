const db = require('../db')
const { Brand, Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const brand1 = await new Brand({
    name: 'Craft Beer Sampler',
    url: 'https://i5.walmartimages.com/seo/Beer-Tasting-Flight-Sampler-Set-of-4-6oz-Pilsner-Craft-Brew-Glasses-with-Paddle-and-Chalkboard-Great-Gift_0ae1b549-8036-4886-a932-6fec4d573d0b.f8990d3e44af450581e3153bd86be86f.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
  })
  brand1.save()

  const brand2 = await new Brand({
    name: 'Signature Cocktail',
    url: 'https://talesofthecocktail.org/wp-content/uploads/2016/01/How-to-Create-Your-Bars-Signature-Cocktail.jpg'
  })
  brand2.save()

  const brand3 = await new Brand({
    name: 'Bar Snack Platter',
    url: 'https://static1.bigstockphoto.com/2/3/3/large2/332293639.jpg'
  })
  brand3.save()

  const brand4 = await new Brand({
    name: 'Wine Flight',
    url: 'https://static2.bigstockphoto.com/6/7/4/large2/476973097.jpg'
  })
  brand4.save()

  const brand5 = await new Brand({
    name: 'Whiskey Tasting',
    url: 'https://static1.bigstockphoto.com/7/6/4/large2/467456579.jpg'
  })
  brand5.save()

  const brand6 = await new Brand({
    name: 'Mocktail Sampler',
    url: 'https://static3.bigstockphoto.com/0/7/4/large2/470833915.jpg',
  })
  brand6.save()



  const products = [
    {
      title: 'Craft Beer Sampler',
      description: 'Experience a variety of handcrafted beers with our Craft Beer Sampler. Perfect for beer enthusiasts looking to explore different flavors and styles.',
      price: '15',
      brand: brand1._id
    },
   {
      title: 'Signature Cocktail',
      description: 'Our Signature Cocktail is a refreshing blend of vodka, fresh lime juice, and ginger beer. Perfect for any occasion.',
      price: '10',
      brand: brand2._id
   },
   {
      title: 'Bar Snack Platter',
      description: 'Our Bar Snack Platter is the perfect accompaniment to any cocktail. Enjoy a variety of nuts, olives, and cheeses.',
      price: '20',
      brand: brand3._id
    },
    {
      title: 'Wine Flight',
      description: 'Our Wine Flight is a selection of three wines, each with a unique flavor profile. Perfect for wine enthusiasts looking to explore different varietals.',
      price: '25',
      brand: brand4._id
    },
    {
      title: 'Whiskey Tasting',
      description: 'Our Whiskey Tasting is a selection of three whiskeys, each with a unique flavor profile. Perfect for whiskey enthusiasts looking to explore different styles.',
      price: '30',
      brand: brand5._id
    },
    {
      title: 'Mocktail Sampler',
      description: 'Our Mocktail Sampler is a selection of three non-alcoholic cocktails, each with a unique flavor profile. Perfect for anyone looking to enjoy a delicious drink without the alcohol.',
      price: '15',
      brand: brand6._id
    
    }

  ]

  await Product.insertMany(products)
  console.log('Created Bar Products!')
}

const run = async () => {
  await main()
  db.close()
}

run()