# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all();

User.create!( username: 'misun', f_name: 'misun', l_name: 'son', zip_code: '07643', password: 'starwars');
User.create!( username: 'misun2', f_name: 'misun2', l_name: 'son', zip_code: '12312', password: 'starwars');
User.create!( username: 'misun3', f_name: 'misun3', l_name: 'son', zip_code: '24124', password: 'starwars');
User.create!( username: 'misun4', f_name: 'misun3', l_name: 'son', zip_code: '23145', password: 'starwars');
User.create!( username: 'misun5', f_name: 'misun3', l_name: 'son', zip_code: '12345', password: 'starwars');
User.create!( username: 'misun6', f_name: 'misun3', l_name: 'son', zip_code: '56778', password: 'starwars');

Business.destroy_all();

Business.create!([
  {
    name: 'Chip NYC',
    price_range: '11-30',
    category: 'Bakeries, Desserts',
    address: "353 W 14th St, New York, NY 10014",
    phone: "",
    monday: "11:00 - 20:00",
    tuesday: "11:00 - 20:00",
    wednesday: "11:00 - 20:00",
    thursday: "11:00 - 20:00",
    friday: "11:00 - 20:00",
    saturday: "11:00 - 20:00",
    sunday: "11:00 - 20:00",
    owner_id: 1
  },
  {
    name: 'Boucherie - Park Ave South',
    price_range: '11-30',
    category: 'Steakhouses, French, Cocktail Bars',
    address: "225 Park Ave S, New York, NY 10003",
    phone: "(800) 437-6189",
    monday: "12:00 - 20:00",
    tuesday: "11:00 - 22:00",
    wednesday: "13:00 - 20:00",
    thursday: "11:00 - 20:00",
    friday: "11:00 - 23:00",
    saturday: "11:00 - 24:00",
    sunday: "11:00 - 20:00",
    owner_id: 2
  },
  {
    name: 'Tapanju',
    price_range: '11-30',
    category: 'Mediterranean, Tapas/Small Plates, Seafood',
    address: "235 E 4th St, New York, NY 10009",
    phone: "(212) 777-5060",
    monday: "11:00 - 20:00",
    tuesday: "11:00 - 20:00",
    wednesday: "11:00 - 20:00",
    thursday: "11:00 - 20:00",
    friday: "11:00 - 20:00",
    saturday: "11:00 - 20:00",
    sunday: "11:00 - 20:00",
    owner_id: 3
  },
  {
    name: 'Bubo',
    price_range: '11-30',
    category: 'Mediterranean, Tapas/Small Plates, Seafood',
    address: "515 3rd Ave, New York, NY 10016",
    phone: "(212) 532-3300",
    monday: "11:00 - 20:00",
    tuesday: "11:00 - 20:00",
    wednesday: "11:00 - 20:00",
    thursday: "11:00 - 20:00",
    friday: "11:00 - 20:00",
    saturday: "11:00 - 20:00",
    sunday: "11:00 - 20:00",
    owner_id: 4
  },
  {
    name: 'Kebab Empire',
    price_range: '11-30',
    category: 'Kebab',
    address: "934 8th Ave, New York, NY 10019",
    phone: "(646) 850-9008",
    monday: "12:00 - 20:00",
    tuesday: "11:00 - 22:00",
    wednesday: "13:00 - 20:00",
    thursday: "11:00 - 20:00",
    friday: "11:00 - 23:00",
    saturday: "11:00 - 24:00",
    sunday: "11:00 - 20:00",
    owner_id: 5
  },
  {
    name: 'TongKatsu',
    price_range: '11-30',
    category: 'Japanese, Asian Fusion, Comfort Food',
    address: "137 Rivington St, New York, NY 10002",
    phone: "(212) 254-3246",
    monday: "12:00 - 20:00",
    tuesday: "11:00 - 22:00",
    wednesday: "13:00 - 20:00",
    thursday: "11:00 - 20:00",
    friday: "11:00 - 23:00",
    saturday: "11:00 - 24:00",
    sunday: "11:00 - 20:00",
    owner_id: 6
  }
]);

Photo.destroy_all();

Photo.create!([
  {
    img_url: "https://s3-media3.fl.yelpcdn.com/bphoto/VAxcW7t8_8Gjzzj1dlaw9g/ls.jpg",
    business_id: 1,
    user_id: 1
  },
  {
    img_url: "https://s3-media2.fl.yelpcdn.com/bphoto/U90cr6FAs7CRF83TkbvrZg/ls.jpg",
    business_id: 2,
    user_id: 2
  },
  {
    img_url: "https://s3-media3.fl.yelpcdn.com/bphoto/La0ORd9JNz9NIrB76gxaBg/ls.jpg",
    business_id: 3,
    user_id: 3
  },
  {
    img_url: "https://s3-media2.fl.yelpcdn.com/bphoto/6mfujkLPTmTCRtKm2A16rA/ls.jpg",
    business_id: 4,
    user_id: 4
  },
  {
    img_url:  "https://s3-media2.fl.yelpcdn.com/bphoto/R6EH1TBpXhW2ihxGIldd7A/ls.jpg",
    business_id: 5,
    user_id: 5
  },
  {
    img_url:  "https://s3-media1.fl.yelpcdn.com/bphoto/twsdEnVRmP4dNB_5TYIyeg/ls.jpg",
    business_id: 6,
    user_id: 6
  }
]);
