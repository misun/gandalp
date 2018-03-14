# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all();

User.create!(
  username: 'guest', f_name: 'guest', l_name: 'guest', zip_code:'00000', password: 'starwars'
);
user1 = User.create!(
  username: 'misun', f_name: 'misun1', l_name: 'son', zip_code: '07643', password: 'starwars'
);
user2 = User.create!( username: 'misun2', f_name: 'misun2', l_name: 'son', zip_code: '12312', password: 'starwars');
user3 = User.create!( username: 'misun3', f_name: 'misun3', l_name: 'son', zip_code: '24124', password: 'starwars');
user4 = User.create!( username: 'misun4', f_name: 'misun3', l_name: 'son', zip_code: '23145', password: 'starwars');
user5 = User.create!( username: 'misun5', f_name: 'misun3', l_name: 'son', zip_code: '12345', password: 'starwars');
user6 = User.create!( username: 'misun6', f_name: 'misun3', l_name: 'son', zip_code: '56778', password: 'starwars');

Business.destroy_all();

businesses = Business.create!([
  {
    name: 'Kick Axe Throwing',
    price_range: '11-30',
    category: 'Axe Throwing',
    address: "622 Degraw St, Brooklyn, NY 11217",
    phone: "(833) 542-5293",
    monday: "11:00 - 20:00",
    tuesday: "11:00 - 20:00",
    wednesday: "11:00 - 20:00",
    thursday: "11:00 - 20:00",
    friday: "11:00 - 20:00",
    saturday: "11:00 - 20:00",
    sunday: "11:00 - 20:00",
    owner_id: user1.id
  },
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
    owner_id: user2.id
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
    owner_id: user3.id
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
    owner_id: user4.id
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
    owner_id: user5.id
  },
  {
    name: 'Ho Foods',
    price_range: '11-30',
    category: 'Taiwanese',
    address: "110 E 7th St, New York, NY 10009",
    phone: "(347) 788-0682",
    monday: "11:00 - 20:00",
    tuesday: "11:00 - 20:00",
    wednesday: "11:00 - 20:00",
    thursday: "11:00 - 20:00",
    friday: "11:00 - 20:00",
    saturday: "11:00 - 20:00",
    sunday: "11:00 - 20:00",
    owner_id: user6.id
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
    owner_id: user1.id
  },

]);

Photo.destroy_all();

photo = Photo.create!([
  {
    business_id: businesses[0].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz1-1.jpg"
  },
  {
    business_id: businesses[0].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz1-2.jpg"
  },
  {
    business_id: businesses[0].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz1-3.jpg"
  },
  {
    business_id: businesses[1].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz2-1.jpg"
  },
  {
    business_id: businesses[1].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz2-2.jpg"
  },
  {
    business_id: businesses[1].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz2-3.jpg"
  },
  {
    business_id: businesses[2].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz3-1.jpg"
  },
  {
    business_id: businesses[2].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz3-2.jpg"
  },
  {
    business_id: businesses[2].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz3-3.jpg"
  },
  {
    business_id: businesses[3].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz4-1.jpg"
  },
  {
    business_id: businesses[3].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz4-2.jpg"
  },
  {
    business_id: businesses[3].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz4-3.jpg"
  },
  {
    business_id: businesses[4].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz5-1.jpg"
  },
  {
    business_id: businesses[4].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz5-2.jpg"
  },
  {
    business_id: businesses[4].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz5-3.jpg"
  },
  {
    business_id: businesses[5].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz6-1.jpg"
  },
  {
    business_id: businesses[5].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz6-2.jpg"
  },
  {
    business_id: businesses[5].id,
    image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/photos/images/biz6-3.jpg"
  }
]);
