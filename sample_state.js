
    {
      entities: {
        businesses: {
          1: {
            id: 1,
            name: "pr&ince",
            reviews_count: 240,
            stars: 4.5,
            price_range: 2, // price would represent like $$
            category: [Thai, Asian Fusion],

            photo_id: 1,
            img_url: '/assets/img1.jpg',

            mon: "11:30 - 11:00",
            tue: "11:30 - 11:00",
            wed: "11:30 - 11:00",
            thu: "11:30 - 11:00",
            fri: "11:30 - 11:00",
            sat: "11:30 - 11:00",
            sun: "11:30 - 11:00",

            //this should be data from google API
            addr: 80 Wayne St, Jersey City, NJ 07302,
            direction: link_url,
            phone: 201-737-4911,
            share: send_url
         }
        },

        users: {
          11: {
            id: 11,
            username: "blue_macaw",
            img_url: "http://maxpixel.freegreatpicture.com/static/photo/1x/Wildlife-Tropical-Pet-Colorful-Macaw-Parrot-Bird-410144.jpg",
            reviews: 32,
            location: 07643
          }
          23: {
            id: 11,
            username: "blue_macaw",
            img_url: "http://maxpixel.freegreatpicture.com/static/photo/1x/Wildlife-Tropical-Pet-Colorful-Macaw-Parrot-Bird-410144.jpg",
            reviews: 32,
            location: 07643
          },
          25: {
            id: 11,
            username: "blue_macaw",
            img_url: "http://maxpixel.freegreatpicture.com/static/photo/1x/Wildlife-Tropical-Pet-Colorful-Macaw-Parrot-Bird-410144.jpg",
            reviews: 32,
            location: 07643
          }
        }
      },
      reviews: {
        1: { id: 1,
             comment: "the protein choices range from prok belly to crab cake with sriracha mayo"
            },
        2: { id: 2,
              comment: "taco is awesome"

           },
        3: { id: 3,
              commnet: "salas is fresh!!"
            }
      },
      ui: {
        loading: true/false
      },
      errors: {
        login: ["Incorrect username/password combination"],
        signForm: ["id/pwd cannot be blank"],
      },
      session: {
        id: 57,
        username: "blue_hawk",
        img_url: "https://cdn.pixabay.com/photo/2013/12/29/03/47/hawk-234999_960_720.jpg"
      }
    }
