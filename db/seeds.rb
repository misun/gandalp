# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.destroy_all();

Business.create!([
  {
    name: 'cibo',
    price_range: '11-30',
    category: 'deli',
    address: "22 W 38th St, New York, NY 10018",
    phone: "(212) 933-4361",
    monday: "11:00 - 20:00",
    tuesday: "11:00 - 20:00",
    wednesday: "11:00 - 20:00",
    thursday: "11:00 - 20:00",
    friday: "11:00 - 20:00",
    saturday: "11:00 - 20:00",
    sunday: "11:00 - 20:00",
    owner_id: 6,
  },
  {
    name: 'Fluem Pasta',
    price_range: '11-30',
    category: 'Italian',
    address: "241 Pearl St, New York, NY 10038",
    phone: "(347) 416-2880",
    monday: "12:00 - 20:00",
    tuesday: "11:00 - 22:00",
    wednesday: "13:00 - 20:00",
    thursday: "11:00 - 20:00",
    friday: "11:00 - 23:00",
    saturday: "11:00 - 24:00",
    sunday: "11:00 - 20:00",
    owner_id: 6,
     }
  ]);
