# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all();

User.create!(
  username: "guest", f_name: "guest", l_name: "guest", zip_code:"00000", password: "starwars",
  image: "https://s3.us-east-2.amazonaws.com/gandalp-pro/users/images/000/000/001/original/guest_profile.jpeg"
);
user1 = User.create!(
  username: "misun", f_name: "misun", l_name: "son", zip_code: "07643", password: "starwars",
  image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/users/images/demo/user1.jpg"
);
user2 = User.create!(
  username: "jeniferxxx@mail.com", f_name: "jenifer", l_name: "Lawrence", zip_code: "12312", password: "starwars",
  image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/users/images/demo/user2.jpg");
user3 = User.create!(
  username: "goden@mail.com", f_name: "golden", l_name: "retriever",
  zip_code: "24124", password: "starwars",
  image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/users/images/demo/user3.jpg"
  );
user4 = User.create!(
  username: "balck@mail.com", f_name: "French", l_name: "bulldog",
  zip_code: "23145", password: "starwars",
  image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/users/images/demo/user4.jpg");
user5 = User.create!(
  username: "poodle", f_name: "poodle", l_name: "son",
  zip_code: "12345", password: "starwars",
  image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/users/images/demo/user5.jpg");
user6 = User.create!(
  username: "misun6", f_name: "misun3", l_name: "son",
  zip_code: "56778", password: "starwars",
  image: "https://s3.us-east-2.amazonaws.com/gandalp-dev/users/images/demo/user6.jpg");

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
  }
]);

Review.destroy_all();

reviews = Review.create!([
  {
    user_id: user1.id,
    business_id: businesses[0].id,
    rating: 1,
    body: "We were lucky to find this gem while staying at the Hilton Millenium. It is just two short blocks away. We've never been to France but I imagine this is as close as you can get for a French breakfast/brunch spot between Wall Street and the WTC site. We enjoyed the avocado toast, the Madame croque sandwich and a plentiful fruit salad bowl. The coffee was excellent as well. Couldn't resist a serving of the homemade cookies. Glad we did. I can only guess that the other deserts on the menu are outstanding as well."
  },
  {
    user_id: user2.id,
    business_id: businesses[0].id,
    rating: 2,
    body: "moderate"
  },
  {
    user_id: user3.id,
    business_id: businesses[0].id,
    rating: 3,
    body: "moderate"
  },
  {
    user_id: user4.id,
    business_id: businesses[0].id,
    rating: 4,
    body: "moderate"
  },
  {
    user_id: user5.id,
    business_id: businesses[0].id,
    rating: 5,
    body: "moderate"
  },
  {
    user_id: user1.id,
    business_id: businesses[1].id,
    rating: 1,
    body: "Love the atmosphere here, really felt like I was in a small Parisian Cafe. The decor was simple but elegant. The owner was gracious and very accommodating (worked with my friend to put together a gluten-free meal that she can eat).

    The food was excellent. Had the sandwich martin with extra avocado, fruit salad and chocolate croissant. Def recommend the sandwich.

    Def a recommendation but keep in mind it is very very very small since it is a cafe so not ideal for big parties.

    Enjoy!"
  },
  {
    user_id: user2.id,
    business_id: businesses[1].id,
    rating: 2,
    body: "moderate"
  },
  {
    user_id: user3.id,
    business_id: businesses[1].id,
    rating: 3,
    body: "moderate"
  },
  {
    user_id: user4.id,
    business_id: businesses[1].id,
    rating: 4,
    body: "moderate"
  },
  {
    user_id: user5.id,
    business_id: businesses[1].id,
    rating: 5,
    body: "moderate"
  },
  {
    user_id: user1.id,
    business_id: businesses[2].id,
    rating: 1,
    body: "moderate"
  },
  {
    user_id: user2.id,
    business_id: businesses[2].id,
    rating: 2,
    body: "moderate"
  },
  {
    user_id: user3.id,
    business_id: businesses[2].id,
    rating: 3,
    body: "moderate"
  },
  {
    user_id: user4.id,
    business_id: businesses[2].id,
    rating: 4,
    body: "moderate"
  },
  {
    user_id: user5.id,
    business_id: businesses[2].id,
    rating: 5,
    body: "moderate"
  },
  {
    user_id: user1.id,
    business_id: businesses[3].id,
    rating: 1,
    body: "Super cute little spot with fresh juices, adorable decor, and delicious food. Portions were small, but the quality of the coffee and food were great. They were really nice about accommodating a group of 12 of us and even gave us the 10% off yelp offer for the entire bill.  Would come back if in the area."
  },
  {
    user_id: user2.id,
    business_id: businesses[3].id,
    rating: 2,
    body: "moderate"
  },
  {
    user_id: user3.id,
    business_id: businesses[3].id,
    rating: 3,
    body: "moderate"
  },
  {
    user_id: user4.id,
    business_id: businesses[3].id,
    rating: 4,
    body: "moderate"
  },
  {
    user_id: user5.id,
    business_id: businesses[3].id,
    rating: 5,
    body: "moderate"
  },
  {
    user_id: user1.id,
    business_id: businesses[4].id,
    rating: 1,
    body: "I'm definitely a fan of this revamped La Parisienne in FiDi.  It's a quaint lunch spot with grab and go items, but they also have seating for a casual mealtime as well.  I had lunch here with a friend last week, and we enjoyed our simple, French inspired, hot bistro sandwiches (the classic 'Monsieur' and the 'Forestier'), and some soft drinks.. the house lemonade was great.  Service was friendly and efficient, and the bright and contemporary design-forward decor is absolutely lovely."
  },
  {
    user_id: user2.id,
    business_id: businesses[4].id,
    rating: 2,
    body: "moderate"
  },
  {
    user_id: user3.id,
    business_id: businesses[4].id,
    rating: 3,
    body: "moderate"
  },
  {
    user_id: user4.id,
    business_id: businesses[4].id,
    rating: 4,
    body: "moderate"
  },
  {
    user_id: user5.id,
    business_id: businesses[4].id,
    rating: 5,
    body: "moderate"
  },
  {
    user_id: user1.id,
    business_id: businesses[5].id,
    rating: 1,
    body: "Very Local place and enjoyable food and the owners our wonderful and will chat up a storm with ya!  Support local and they just told us they will be getting wine and beer license soon!!"
  },
  {
    user_id: user2.id,
    business_id: businesses[5].id,
    rating: 2,
    body: "moderate"
  },
  {
    user_id: user3.id,
    business_id: businesses[5].id,
    rating: 3,
    body: "moderate"
  },
  {
    user_id: user4.id,
    business_id: businesses[5].id,
    rating: 4,
    body: "moderate"
  },
  {
    user_id: user5.id,
    business_id: businesses[5].id,
    rating: 5,
    body: "moderate"
  }
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
