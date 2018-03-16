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
    rating: 5,
    body: "We were lucky to find this gem while staying at the Hilton Millenium. It is just two short blocks away. We've never been to France but I imagine this is as close as you can get for a French breakfast/brunch spot between Wall Street and the WTC site. We enjoyed the avocado toast, the Madame croque sandwich and a plentiful fruit salad bowl. The coffee was excellent as well. Couldn't resist a serving of the homemade cookies. Glad we did. I can only guess that the other deserts on the menu are outstanding as well."
  },
  {
    user_id: user2.id,
    business_id: businesses[0].id,
    rating: 2,
    body: "Ok here is what you need to know about this place. The food is well above average, the drinks, particularly anything fried (broccoli bites, the potatoes, chicken).
    What I am certain keeps this place from being as packed as its peers (red eye, the corner) is the service. Get the wrong waitress and you're going to feel overlooked.
    As of 10/28/17, this place has Joe and Jessica. These two are the down to earth personalities and work ethic that brings together all the things that are good about this place which otherwise seem to not work for it normally.
    As someone who has had both good and bad experiences here, I will say that if I walk by on a Sunday and see my favorite servers, I'm happy to sit down, as I know my meal will be great and I will get it within the time it takes to even get a seat at the restaurants nearby."
  },
  {
    user_id: user3.id,
    business_id: businesses[0].id,
    rating: 3,
    body: "I am a freshman (from South Jersey) at Montclair State University and I was just diagnosed with Celiac at the end of August 2017. Completely changing my diet and moving away from home to start college just a couple weeks after my diagnosis was a big challenge. Fortunately, the dining halls on campus had 'great accommodations' for Celiacs. At least, that is what my family and I were told. I don't mean to talk poorly about MSU's dining (which absolutely stinks), but it drove me to find good restaurants near campus, that were Celiac friendly. Fortunately, one of the first places that I found was The Spot. I went the first time with my family and we all fell in love. My dad did some research and found out that the owner has Celiac, so of course it would be a safe option for me. "
  },
  {
    user_id: user4.id,
    business_id: businesses[0].id,
    rating: 4,
    body: "Don't waste your time.

    We were sat down and told if we left a yelp review we would get a free snack or dessert. Then we sat for at least 20 minutes without anyone taking our orders. Someone did acknowledge us after a period of time but only to apologize for not taking our orders.  Then they  promptly left without taking our orders saying they would be with us in a minute. We sat around for another 10 minutes and then left.

    The restaurant was largely empty. I have eaten here before and the food is fine. The service is just awful. I regret buying the Groupon and giving them another chance.

    Here's my yelp review. We'll have the free broccoli bites. You can throw them in the trash."
  },
  {
    user_id: user5.id,
    business_id: businesses[0].id,
    rating: 2,
    body: "moderate"
  },
  {
    user_id: user2.id,
    business_id: businesses[1].id,
    rating: 5,
    body: "Love the atmosphere here, really felt like I was in a small Parisian Cafe. The decor was simple but elegant. The owner was gracious and very accommodating (worked with my friend to put together a gluten-free meal that she can eat).

    The food was excellent. Had the sandwich martin with extra avocado, fruit salad and chocolate croissant. Def recommend the sandwich.

    Def a recommendation but keep in mind it is very very very small since it is a cafe so not ideal for big parties.

    Enjoy!"
  },
  {
    user_id: user3.id,
    business_id: businesses[1].id,
    rating: 2,
    body: "This little gem in Montclair is reminiscent of a Harlem spot. The staff is amazing and attentive and the food was to die for.
    The truffle Mac and cheese left your mouth watering and craving more, and the chicken and waffles were delicious with seasoned chicken tenders.
    I will definitely return."
  },
  {
    user_id: user4.id,
    business_id: businesses[1].id,
    rating: 3,
    body: "I was dying to try this place for awhile. Ive seen alot on IG and Yelp so decided to go for lunch. The staff was attentive and even kept drying the floor as it was a snowy day. The mac and cheese was what I was dying to try was ok. It could have been served at a hotter temperature and possibly cooked more. The rest of the folks with me seemed underwhelmed as well. The food was average just not what we were expecting. I'll try it again possibly to see if my opinion changes but I say a soild 3 to 3.5 stars. They did have a coupon on the app for 10% off."
  },
  {
    user_id: user5.id,
    business_id: businesses[1].id,
    rating: 4,
    body: "Breakfast for one today at The Spot. Delicious, big cup of coffee and fabulous yogurt pancakes with fresh strawberries and blueberries on top and a yummy side of perfectly cooked bacon. Was the only one there on a cold, rainy Thursday morning but I enjoyed the quiet.  Staff very nice and service was excellent."
  },
  {
    user_id: user1.id,
    business_id: businesses[1].id,
    rating: 2,
    body: "With all the mixed reviews, it appears that the experience here is pretty inconsistent, so we were hoping to get lucky and have a decent brunch yesterday."
  },
  {
    user_id: user3.id,
    business_id: businesses[2].id,
    rating: 5,
    body: "For the healthier, good quality 'diner' / comfort food - this is an excellent place!

    They serve breakfast all day, and their food is well prepared, and large portioned!

    Buffalo chicken dip is a must try! As well as their fresh Mac & Cheese dishes - you can see the cheese makes and mixsd in, so you know it's real cheese!
    I've had the steak & eggs twice - and for $14c it's an excellent price for good quality beef!! I would definitely try the other breakfast dishes.
    The salad (Waldorf) was delicious but very small portioned. I wish they added a little more top or to make it more filling.

    A huge plus: my friend with celiac's doesn't have any issues here!!!! And usually you get issues with restaurants claiming to be gluten free but having cross contamination issues - but she has had no problems!"
  },
  {
    user_id: user4.id,
    business_id: businesses[2].id,
    rating: 2,
    body: "Breakfast for one today at The Spot. Delicious, big cup of coffee and fabulous yogurt pancakes with fresh strawberries and blueberries on top and a yummy side of perfectly cooked bacon. Was the only one there on a cold, rainy Thursday morning but I enjoyed the quiet.  Staff very nice and service was excellent."
  },
  {
    user_id: user5.id,
    business_id: businesses[2].id,
    rating: 3,
    body: "Met up with a friend and we ordered spinach artichoke dip and Mac and cheese. She got the cheese steak. Everything was good I especially enjoyed the Mac and cheese, it had a bread crumb topping. Really yummy."
  },
  {
    user_id: user1.id,
    business_id: businesses[2].id,
    rating: 4,
    body: "I don't recommend.."
  },
  {
    user_id: user2.id,
    business_id: businesses[2].id,
    rating: 5,
    body: "With all the mixed reviews, it appears that the experience here is pretty inconsistent, so we were hoping to get lucky and have a decent brunch yesterday."
  },
  {
    user_id: user4.id,
    business_id: businesses[3].id,
    rating: 5,
    body: "Super cute little spot with fresh juices, adorable decor, and delicious food. Portions were small, but the quality of the coffee and food were great. They were really nice about accommodating a group of 12 of us and even gave us the 10% off yelp offer for the entire bill.  Would come back if in the area."
  },
  {
    user_id: user5.id,
    business_id: businesses[3].id,
    rating: 1,
    body: "moderate"
  },
  {
    user_id: user1.id,
    business_id: businesses[3].id,
    rating: 3,
    body: "For the healthier, good quality 'diner' / comfort food - this is an excellent place!

    They serve breakfast all day, and their food is well prepared, and large portioned!

    Buffalo chicken dip is a must try! As well as their fresh Mac & Cheese dishes - you can see the cheese makes and mixsd in, so you know it's real cheese!
    I've had the steak & eggs twice - and for $14c it's an excellent price for good quality beef!! I would definitely try the other breakfast dishes.
    The salad (Waldorf) was delicious but very small portioned. I wish they added a little more top or to make it more filling.

    A huge plus: my friend with celiac's doesn't have any issues here!!!! And usually you get issues with restaurants claiming to be gluten free but having cross contamination issues - but she has had no problems!"
  },
  {
    user_id: user2.id,
    business_id: businesses[3].id,
    rating: 4,
    body: "With all the mixed reviews, it appears that the experience here is pretty inconsistent, so we were hoping to get lucky and have a decent brunch yesterday."
  },
  {
    user_id: user3.id,
    business_id: businesses[3].id,
    rating: 5,
    body: "Met up with a friend and we ordered spinach artichoke dip and Mac and cheese. She got the cheese steak. Everything was good I especially enjoyed the Mac and cheese, it had a bread crumb topping. Really yummy."
  },
  {
    user_id: user5.id,
    business_id: businesses[4].id,
    rating: 5,
    body: "I'm definitely a fan of this revamped La Parisienne in FiDi.  It's a quaint lunch spot with grab and go items, but they also have seating for a casual mealtime as well.  I had lunch here with a friend last week, and we enjoyed our simple, French inspired, hot bistro sandwiches (the classic 'Monsieur' and the 'Forestier'), and some soft drinks.. the house lemonade was great.  Service was friendly and efficient, and the bright and contemporary design-forward decor is absolutely lovely."
  },
  {
    user_id: user1.id,
    business_id: businesses[4].id,
    rating: 4,
    body: "With all the mixed reviews, it appears that the experience here is pretty inconsistent, so we were hoping to get lucky and have a decent brunch yesterday."
  },
  {
    user_id: user2.id,
    business_id: businesses[4].id,
    rating: 3,
    body: "not bad"
  },
  {
    user_id: user3.id,
    business_id: businesses[4].id,
    rating: 3,
    body: "Met up with a friend and we ordered spinach artichoke dip and Mac and cheese. She got the cheese steak. Everything was good I especially enjoyed the Mac and cheese, it had a bread crumb topping. Really yummy."
  },
  {
    user_id: user4.id,
    business_id: businesses[4].id,
    rating: 5,
    body: "For the healthier, good quality diner / comfort food - this is an excellent place!

    They serve breakfast all day, and their food is well prepared, and large portioned!

    Buffalo chicken dip is a must try! As well as their fresh Mac & Cheese dishes - you can see the cheese makes and mixsd in, so you know it's real cheese!
    I've had the steak & eggs twice - and for $14c it's an excellent price for good quality beef!! I would definitely try the other breakfast dishes.
    The salad (Waldorf) was delicious but very small portioned. I wish they added a little more top or to make it more filling.

    A huge plus: my friend with celiac's doesn't have any issues here!!!! And usually you get issues with restaurants claiming to be gluten free but having cross contamination issues - but she has had no problems!"
  },
  {
    user_id: user1.id,
    business_id: businesses[5].id,
    rating: 5,
    body: "Very Local place and enjoyable food and the owners our wonderful and will chat up a storm with ya!  Support local and they just told us they will be getting wine and beer license soon!!"
  },
  {
    user_id: user2.id,
    business_id: businesses[5].id,
    rating: 2,
    body: "With all the mixed reviews, it appears that the experience here is pretty inconsistent, so we were hoping to get lucky and have a decent brunch yesterday."
  },
  {
    user_id: user3.id,
    business_id: businesses[5].id,
    rating: 3,
    body: "For the healthier, good quality diner / comfort food - this is an excellent place!

    They serve breakfast all day, and their food is well prepared, and large portioned!

    Buffalo chicken dip is a must try! As well as their fresh Mac & Cheese dishes - you can see the cheese makes and mixsd in, so you know it's real cheese!
    I've had the steak & eggs twice - and for $14c it's an excellent price for good quality beef!! I would definitely try the other breakfast dishes.
    The salad (Waldorf) was delicious but very small portioned. I wish they added a little more top or to make it more filling.

    A huge plus: my friend with celiac's doesn't have any issues here!!!! And usually you get issues with restaurants claiming to be gluten free but having cross contamination issues - but she has had no problems!"
  },
  {
    user_id: user4.id,
    business_id: businesses[5].id,
    rating: 4,
    body: "Met up with a friend and we ordered spinach artichoke dip and Mac and cheese. She got the cheese steak. Everything was good I especially enjoyed the Mac and cheese, it had a bread crumb topping. Really yummy."
  },
  {
    user_id: user5.id,
    business_id: businesses[5].id,
    rating: 5,
    body: "With all the mixed reviews, it appears that the experience here is pretty inconsistent, so we were hoping to get lucky and have a decent brunch yesterday."
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
