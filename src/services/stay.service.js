import { httpService } from "./http.service"

const END_POINT = "stay"

const labels = [
  "Design",
  "Beach",
  "Amazing Pools",
  "Islands",
  "National Parks",
  "Cabins",
  "Camping",
  "Tiny Homes",
  "Lakefront",
  "Arctic",
  "Desert",
  "Surfing",
  "Mansions",
  "Skiing",
  "Historical homes",
  "Campers",
]

const amenities = [
  "TV",
  "Cable TV",
  "Internet",
  "Wifi",
  "Air conditioning",
  "Wheelchair accessible",
  "Pool",
  "Kitchen",
  "Free parking on premises",
  "Doorman",
  "Gym",
  "Elevator",
  "Hot tub",
  "Heating",
  "Family/kid friendly",
  "Suitable for events",
  "Washer",
  "Dryer",
  "Smoke detector",
  "Carbon monoxide detector",
  "First aid kit",
  "Safety card",
  "Fire extinguisher",
  "Essentials",
  "Shampoo",
  "24-hour check-in",
  "Hangers",
  "Hair dryer",
  "Iron",
  "Laptop friendly workspace",
  "Self check-in",
  "Building staff",
  "Private entrance",
  "Room-darkening shades",
  "Hot water",
  "Bed linens",
  "Extra pillows and blankets",
  "Ethernet connection",
  "Luggage dropoff allowed",
  "Long term stays allowed",
  "Ground floor access",
  "Wide hallway clearance",
  "Step-free access",
  "Wide doorway",
  "Flat path to front door",
  "Well-lit path to entrance",
  "Disabled parking spot",
  "Step-free access",
  "Wide doorway",
  "Wide clearance to bed",
  "Step-free access",
  "Wide doorway",
  "Step-free access",
  "Wide entryway",
  "Waterfront",
  "Beachfront",
]

const popDestinations = [
  {
    city: "Hong Kong",
    country: "China",
    img: require("../assets/img/countries/hongkong.jpg"),
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    img: require("../assets/img/countries/rio.jpg"),
  },
  {
    city: "Barcelona",
    country: "Spain",
    img: require("../assets/img/countries/barcelona.jpg"),
  },
  {
    city: "New York",
    country: "United States",
    img: require("../assets/img/countries/newyork.jpg"),
  },
]

export const stayService = {
  query,
  getById,
  getAmenities,
  getLabels,
  getPopDestinations,
  saveStay,
  deleteStay,
  getTopRated,
}
// QUERY you can pass as a filter {hostId,stayLocation,label,guestCount}
async function query(filterBy) {
  try {
    const stays = await httpService.get(END_POINT, filterBy)
    return stays
  } catch (error) {
    throw error.data
  }
}

function getAmenities() {
  return [...amenities]
}
function getLabels() {
  return [...labels]
}

function getTopRated() {
  return [
    {
      _id: "622f337b75c7d36e498aabbe",
      name: "Quiet Stylish Mosman Apartment",
      summary:
        "My 3br ground floor apartment is close to Balmoral beach, buses, city, parks, harbour foreshore walks. You'll love the room as it has its own private courtyard. Lift access.. Comfy bed. My place is good for couples, solo adventurers, and business travellers.",
      interaction:
        "I'm in and out but love talking to people so if I'm home happy to interact or if guests would prefer to be left alone that's fine with me. I'm always happy to give advice on how to get around, things to do in the area and tips on places to eat and of course where the best coffee is.",
      houseRules:
        "Only the person or people who book are allowed to stay in the room.",
      propertyType: "Apartment",
      roomType: "Private room",
      bedType: "Real Bed",
      cancellationPolicy: "moderate",
      capacity: 2,
      bedrooms: 1,
      beds: 1,
      numOfReviews: 58,
      amenities: [
        "TV",
        "Wifi",
        "Air conditioning",
        "Kitchen",
        "Free parking on premises",
        "Breakfast",
        "Pets live on this property",
        "Cat(s)",
        "Elevator",
        "Free street parking",
        "Heating",
        "Family/kid friendly",
        "Washer",
        "Dryer",
        "Smoke detector",
        "Essentials",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "translation missing: en.hosting_amenity_49",
        "Hot water",
        "Bed linens",
        "Extra pillows and blankets",
        "Microwave",
        "Coffee maker",
        "Refrigerator",
        "Dishwasher",
        "Dishes and silverware",
        "Cooking basics",
        "Oven",
        "Stove",
        "Single level home",
        "BBQ grill",
        "Patio or balcony",
        "Luggage dropoff allowed",
        "Host greets you",
      ],
      host: {
        _id: "622f3402e36c59e6164faee6",
        fullname: "Krythia",
        location: "Mosman, New South Wales, Australia",
        about:
          "I am a retired property valuer. I love to travel. I usually do houseswaps but Airbnb is also a good way to connect with the community and far better than staying in a hotel.",
        responseTime: "within an hour",
        thumbnailUrl:
          "https://xsgames.co/randomusers/assets/avatars/female/18.jpg",
        pictureUrl:
          "https://xsgames.co/randomusers/assets/avatars/female/18.jpg",
        isSuperhost: false,
        id: "461695",
      },
      address: {
        street: "Mosman, NSW, Australia",
        country: "Australia",
        location: {
          lat: 151.23421,
          lan: -33.82085,
        },
        countryCode: "AU",
        city: "Sydney",
      },
      id: "14223095",
      bathrooms: 1,
      price: 90,
      securityDeposit: null,
      cleaningFee: 24,
      extraPeople: 0,
      reviewScores: {
        accuracy: 10,
        cleanliness: 10,
        checkin: 10,
        communication: 10,
        location: 9,
        value: 10,
        rating: 96,
      },
      reviews: [
        {
          at: "2016-08-13T04:00:00.000Z",
          by: {
            _id: "622f3403e36c59e6164fb0ef",
            fullname: "Mark",
            imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/36.jpg",
            id: "12196870",
          },
          txt: "Keythia was a wonderful Host. \nShe made myself and partner feel very at home. \nThe apartment was very clean and tidy with all necessary amenities. \nThe bed was extremely comfortable and the sheets were 5 star. \nKeythia left out a beautiful selection of breakfast treats. \nI would highly recommend this apartment. \nMany thanks \nMark & Rebecca ",
        },
        {
          at: "2016-11-16T05:00:00.000Z",
          by: {
            _id: "622f3402e36c59e6164facef",
            fullname: "Melanie",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/12.jpg",
            id: "16533128",
          },
          txt: "We stayed at krythias apartment for four nights. The apartment and the room is as you can see it on the pictures. Modern and nice looking. Everything was clean and the bed was very comfy. Krythia is a really nice lady and we had some great short conversations with her. We felt very welcomed. The only thing we like to mention for the apartment that is located in a really nice area of Sydney, is that you can only reach it by bus (5 stops) - so there is no tram nearby. The last bus we were able to find to the direction of the apartment left the city at 8:30 pm. That was sometimes a little bit early for us and we had to take an uber (which costs around 20AUD). Everything else was really awesome and we can recommend to stay there for sure. Thank you Krythia for the amazing stay in Sydney.",
        },
        {
          at: "2016-11-20T05:00:00.000Z",
          by: {
            _id: "622f3407e36c59e6164fbd72",
            fullname: "Diana",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/59.jpg",
            id: "1209829",
          },
          txt: "We received a lovely welcome, everything was as described and perfect for our requirements. Thanks so much Krythia, for sharing your home with us.",
        },
        {
          at: "2016-11-24T05:00:00.000Z",
          by: {
            _id: "622f3406e36c59e6164fbb8e",
            fullname: "Jay",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/64.jpg",
            id: "103123318",
          },
          txt: "Very good house, very clean room and private bathroom, very lovely cat and one very kindliness host. Spend a nice week with Krythia ",
        },
        {
          at: "2016-11-25T05:00:00.000Z",
          by: {
            _id: "622f3407e36c59e6164fbf99",
            fullname: "Shauna",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/41.jpg",
            id: "5482907",
          },
          txt: "Super comfortable bed and Krythia is very friendly and welcoming.",
        },
        {
          at: "2016-11-26T05:00:00.000Z",
          by: {
            _id: "622f3406e36c59e6164fba98",
            fullname: "Daniel",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/27.jpg",
            id: "31041006",
          },
          txt: "Krythia room was just what we looked for. Quiet location. Great price. Easy walking to places. Kriathia was a gracious host.  All was as we hoped.",
        },
        {
          at: "2016-12-03T05:00:00.000Z",
          by: {
            _id: "622f3407e36c59e6164fbe57",
            fullname: "Meriel",
            imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/25.jpg",
            id: "101800827",
          },
          txt: "Very clean and comfortable, ",
        },
        {
          at: "2016-12-10T05:00:00.000Z",
          by: {
            _id: "622f3406e36c59e6164fbce0",
            fullname: "Allen",
            imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/45.jpg",
            id: "104682460",
          },
          txt: "Highly recommended. No problems at all .",
        },
        {
          at: "2016-12-15T05:00:00.000Z",
          by: {
            _id: "622f3405e36c59e6164fb707",
            fullname: "Jason",
            imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/27.jpg",
            id: "10061185",
          },
          txt: "Great apartment located at a nice area. Good public transportation to the city. Car park available and very easy to get around. Lots of cafes and restaurants around the area. The room is nice and clean with a nice private bathroom. Cindy the cat is very friendly too.",
        },
        {
          at: "2016-12-26T05:00:00.000Z",
          by: {
            _id: "622f3403e36c59e6164fb1d8",
            fullname: "Jeryl",
            imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg",
            id: "54176523",
          },
          txt: "The apartment is in a small, modern complex, very close to a bus route direct to the centre of Sydney (10 minutes). Shops and beach are close but a LONG walk.\nThe bedroom is A-C, very private with very comfortable bed.\n",
        },
        {
          at: "2017-01-06T05:00:00.000Z",
          by: {
            _id: "622f3406e36c59e6164fba83",
            fullname: "Luke",
            imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
            id: "103951086",
          },
          txt: "Amazing place, friendly host and good in value ",
        },
        {
          at: "2017-01-10T05:00:00.000Z",
          by: {
            _id: "622f3404e36c59e6164fb4f5",
            fullname: "Georgia",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/29.jpg",
            id: "38806754",
          },
          txt: "Krythia's place is central to Sydney and close to some beautiful beaches. The room is soacuous and the courtyard offers a nice private area to chill out. Krythia was a great host and very accommodating.",
        },
      ],
      imgUrls: ["144.jpeg", "119.jpeg", "036.jpeg", "059.jpeg", "055.jpeg"],
    },
    {
      _id: "622f337c75c7d36e498aabd7",
      name: "Your spot in Copacabana",
      summary:
        "Having a large airy living room. The apartment is well divided. Fully furnished and cozy. The building has a 24h doorman and camera services in the corridors. It is very well located, close to the beach, restaurants, pubs and several shops and supermarkets. And it offers a good mobility being close to the subway.",
      interaction:
        "I am available to assist and answer questions regarding the use of the apartment and everything we can to make your stay a success!",
      houseRules:
        "Espero que você sinta-se em casa, e cuide do meu apartamento como se fosse seu.  É proibido fumar, trazer animais de estimação, trazer pessoas não autorizadas( que não sejam os hóspedes previamente informados), fazer festinhas  e fazer barulho após as 22hs. Por motivo de segurança, desligue luz e ar condicionado sempre que sair do apartamento.",
      propertyType: "Apartment",
      roomType: "Entire home/apt",
      bedType: "Real Bed",
      cancellationPolicy: "strict_14_with_grace_period",
      capacity: 6,
      bedrooms: 2,
      beds: 5,
      numOfReviews: 8,
      amenities: [
        "TV",
        "Cable TV",
        "Wifi",
        "Air conditioning",
        "Kitchen",
        "Paid parking off premises",
        "Doorman",
        "Elevator",
        "Buzzer/wireless intercom",
        "Family/kid friendly",
        "Washer",
        "First aid kit",
        "Essentials",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
        "translation missing: en.hosting_amenity_50",
        "Window guards",
        "Hot water",
        "Bed linens",
        "Extra pillows and blankets",
        "Microwave",
        "Coffee maker",
        "Refrigerator",
        "Dishes and silverware",
        "Cooking basics",
        "Oven",
        "Stove",
        "Long term stays allowed",
        "Host greets you",
      ],
      host: {
        _id: "622f3403e36c59e6164fafd5",
        fullname: "Ana Lúcia",
        location: "Rio de Janeiro, State of Rio de Janeiro, Brazil",
        about:
          "Tenho muito prazer em fazer novos amigos, com outras culturas, informações e vivências. Gosto de ser uma anfitriã atenciosa e disponível. O que estiver ao meu alcance tenha certeza que será feito, para tornar sua estadia no Rio inesquecível. ",
        responseTime: "within a few hours",
        thumbnailUrl:
          "https://xsgames.co/randomusers/assets/avatars/female/66.jpg",
        pictureUrl:
          "https://xsgames.co/randomusers/assets/avatars/female/66.jpg",
        isSuperhost: false,
        id: "52772199",
      },
      address: {
        street: "Rio de Janeiro, Rio de Janeiro, Brazil",
        country: "Brazil",
        location: {
          lat: -43.17714541632985,
          lan: -22.96270793328072,
        },
        countryCode: "BR",
        city: "Rio De Janeiro",
      },
      id: "10264100",
      bathrooms: 2,
      price: 798,
      securityDeposit: 500,
      cleaningFee: 150,
      extraPeople: 20,
      reviewScores: {
        accuracy: 10,
        cleanliness: 9,
        checkin: 10,
        communication: 10,
        location: 10,
        value: 10,
        rating: 100,
      },
      reviews: [
        {
          at: "2016-08-13T04:00:00.000Z",
          by: {
            _id: "622f3407e36c59e6164fc02c",
            fullname: "Tim",
            imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/17.jpg",
            id: "2840692",
          },
          txt: "Fantastic apartment in a perfect location. Ana Lucia made us feel right at home with fresh fruit and snacks! The apt is blocks away from the beach, near tons of great food (Go to Amir and Galeto Sats, thank me later) and plenty of places to hang out with locals (Bip Bip). Highly recommend staying here for your visit to Copacabana.",
        },
        {
          at: "2016-11-27T05:00:00.000Z",
          by: {
            _id: "622f3405e36c59e6164fb7ad",
            fullname: "Gesiani",
            imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/7.jpg",
            id: "103110814",
          },
          txt: "Ana Lucia foi muito prestativa, nos recebeu super bem, apartamento bem equipado e bem localizado, próximo a praia, transporte público, restaurantes...superou todas as nossas expectativas!!",
        },
        {
          at: "2016-12-17T05:00:00.000Z",
          by: {
            _id: "622f3407e36c59e6164fbe0f",
            fullname: "Clarissa",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/56.jpg",
            id: "107126702",
          },
          txt: "Ana Lúcia foi super atenciosa, rápida nas respostas e flexível com meus horários de check-in e check-out. O apartamento é ótimo e super bem localizado!",
        },
        {
          at: "2017-02-06T05:00:00.000Z",
          by: {
            _id: "622f3402e36c59e6164faec2",
            fullname: "Ademilson",
            imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/26.jpg",
            id: "111737379",
          },
          txt: "muito bom",
        },
        {
          at: "2017-09-26T04:00:00.000Z",
          by: {
            _id: "622f3407e36c59e6164fbf67",
            fullname: "Gabriel",
            imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/36.jpg",
            id: "142806855",
          },
          txt: "Ana Lúcia nos atendeu muito bem e tirou todas as dúvidas da estadia, além de nos orientar em algumas questões. Parabéns pelo ótimo atendimento!",
        },
        {
          at: "2018-03-07T05:00:00.000Z",
          by: {
            _id: "622f3406e36c59e6164fbbf9",
            fullname: "Cintia",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/9.jpg",
            id: "175824532",
          },
          txt: "Ótimo apartamento, bem equipado e em ótima localização",
        },
        {
          at: "2018-03-18T04:00:00.000Z",
          by: {
            _id: "622f3408e36c59e6164fc074",
            fullname: "Andrea",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/60.jpg",
            id: "54276772",
          },
          txt: "Ótimo apartamento, bem equipado, limpo, confortável. Localização perfeita, muitos comércios na redondeza, perto da praia.\nFomos muito bem recebidos pela anfitriã que foi bem flexível com o horário de checkin.",
        },
      ],
      imgUrls: ["100.jpeg", "082.jpeg", "146.jpeg", "058.jpeg", "052.jpeg"],
    },
    {
      _id: "622f337a75c7d36e498aab00",
      name: "Monte dos Burgos - Cosy Room",
      summary:
        "The neighbourhood is a quiet, family residential area, 20 minutes by bus from the historic center of Porto and 20 minutes from the beach (Matosinhos - where you may eat very GOOD fish!). You will love to stay in a very spacious, familiar and bright room, where you can enjoy a large and flowery garden, comfortable kitchen and laundry with washer and dryer machine. My space is good for couples, solo adventures, and business travelers!",
      interaction: "Respect and confidance is the key to our hosts!!!",
      houseRules: "",
      propertyType: "House",
      roomType: "Private room",
      bedType: "Real Bed",
      cancellationPolicy: "strict_14_with_grace_period",
      capacity: 2,
      bedrooms: 1,
      beds: 1,
      numOfReviews: 5,
      amenities: [
        "Wifi",
        "Kitchen",
        "Free parking on premises",
        "Pets live on this property",
        "Cat(s)",
        "Washer",
        "Dryer",
        "First aid kit",
        "Fire extinguisher",
        "Essentials",
        "Shampoo",
        "Lock on bedroom door",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
        "translation missing: en.hosting_amenity_49",
        "translation missing: en.hosting_amenity_50",
      ],
      host: {
        _id: "622f3404e36c59e6164fb54f",
        fullname: "Patrícia Sousa Casimiro",
        location: "Senhora da Hora, Porto, Portugal",
        about: "",
        responseTime: "a few days or more",
        thumbnailUrl:
          "https://xsgames.co/randomusers/assets/avatars/female/26.jpg",
        pictureUrl:
          "https://xsgames.co/randomusers/assets/avatars/female/26.jpg",
        isSuperhost: false,
        id: "80558077",
      },
      address: {
        street: "Porto, Porto District, Portugal",
        country: "Portugal",
        location: {
          lat: -8.63082,
          lan: 41.18075,
        },
        countryCode: "PT",
        city: "Porto",
      },
      id: "13750579",
      bathrooms: 1,
      price: 26,
      securityDeposit: null,
      cleaningFee: 8,
      extraPeople: 5,
      reviewScores: {
        accuracy: 10,
        cleanliness: 10,
        checkin: 10,
        communication: 10,
        location: 9,
        value: 10,
        rating: 96,
      },
      reviews: [
        {
          at: "2016-08-15T04:00:00.000Z",
          by: {
            _id: "622f3402e36c59e6164faedf",
            fullname: "Sandra",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/25.jpg",
            id: "66617047",
          },
          txt: "Une chambre très spacieuse et une salle de bain privée : au top ! \r\nChristian et Patricia ont été très accueillants et nous nous sommes tout de suite sentis comme chez nous ! ",
        },
        {
          at: "2016-08-20T04:00:00.000Z",
          by: {
            _id: "622f3404e36c59e6164fb3ed",
            fullname: "Erika",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/14.jpg",
            id: "78636529",
          },
          txt: "Des hôtes très accueillant et à l'écoute de leurs invités! De supers adresses à conseiller. \r\nUne maison décorée avec goût et avec une sublime salle de bain privée.\r\nLe centre est très facile d'accès en bus car inaccessible en voiture. \r\nTrès facile de se garer dans la rue de nos hôtes.\r\nUn excellent rapport qualité prix!",
        },
        {
          at: "2016-08-22T04:00:00.000Z",
          by: {
            _id: "622f3405e36c59e6164fb9bd",
            fullname: "Guy",
            imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
            id: "88496638",
          },
          txt: "Patricia et Casimir ont été très accueillants et nous ont donné toutes les informations pratiques pour se rendre au centre de Porto en bus. La chambre est spacieuse et la salle de bain privée est juste à coté. Le quartier est très calme et le séjour était très agréable.",
        },
      ],
      imgUrls: ["086.jpeg", "016.jpeg", "070.jpeg", "121.jpeg", "141.jpeg"],
    },
    {
      _id: "622f337a75c7d36e498aab2c",
      name: "1 sunny bedroom in large St-Henri appartment",
      summary:
        "The apartment  is located in the  up and coming neighbourhood St. Henri. Close to new hip cafés and restaurants, as well as Canal Lachine and metro station. The apartment is very spacious, with two closed bedrooms and a shared backyard.",
      interaction:
        "We would like to welcome our guests when they arrive.  As people who love travelling, we'd be very happy to have dinner together and share tips about Montreal! We value friendly and respectful relationship with airbnb guests. Please let us know if you have any question.",
      houseRules: "We'd like to have friendly and respectful guests.",
      propertyType: "Apartment",
      roomType: "Private room",
      bedType: "Real Bed",
      cancellationPolicy: "strict_14_with_grace_period",
      capacity: 2,
      bedrooms: 1,
      beds: 2,
      numOfReviews: 2,
      amenities: [
        "TV",
        "Internet",
        "Wifi",
        "Kitchen",
        "Pets live on this property",
        "Dog(s)",
        "Heating",
        "Family/kid friendly",
        "Washer",
        "Dryer",
        "Essentials",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
      ],
      host: {
        _id: "622f3403e36c59e6164fb1c9",
        fullname: "Kim-Sanh",
        location: "Montreal, Quebec, Canada",
        about: "",
        thumbnailUrl:
          "https://xsgames.co/randomusers/assets/avatars/male/20.jpg",
        pictureUrl: "https://xsgames.co/randomusers/assets/avatars/male/20.jpg",
        isSuperhost: false,
        id: "9018452",
      },
      address: {
        street: "Montréal, Québec, Canada",
        country: "Canada",
        location: {
          lat: -73.58664,
          lan: 45.47348,
        },
        countryCode: "CA",
        city: "Montreal",
      },
      id: "11442936",
      bathrooms: 1,
      price: 70,
      securityDeposit: 150,
      cleaningFee: null,
      extraPeople: 0,
      reviewScores: {
        accuracy: 10,
        cleanliness: 10,
        checkin: 10,
        communication: 10,
        location: 10,
        value: 10,
        rating: 100,
      },
      reviews: [
        {
          at: "2016-03-26T04:00:00.000Z",
          by: {
            _id: "622f3407e36c59e6164fbfed",
            fullname: "Clara",
            imgUrl:
              "https://xsgames.co/randomusers/assets/avatars/female/21.jpg",
            id: "58070264",
          },
          txt: "Nous avons passer un excellent séjour chez Kim! Son appartement est genial, propre et très proche du centre ville. La rue est tout de même calme le soir pour bien se reposer! Merci encore Kim, tu es quelqu'un d'adorable!\r\n\r\nN'hesitez pas à faire affaire avec Kim, vous serez pas déçu.:)",
        },
      ],
      imgUrls: ["138.jpeg", "070.jpeg", "101.jpeg", "031.jpeg", "147.jpeg"],
    },
  ]
}

function getPopDestinations() {
  return [...popDestinations]
}

async function getById(stayId) {
  try {
    const stay = await httpService.get(`${END_POINT}/${stayId}`)
    return stay
  } catch (error) {
    throw error.data
  }
}

async function deleteStay(stayId) {
  try {
    return await httpService.delete(`${END_POINT}/${stayId}`)
  } catch (error) {
    throw error.data
  }
}

// name
// summary
// houseRules
// propertyType
// roomType
// capacity
// bedrooms
// beds
// amenities
// address
// bathrooms
// price
// imgUrls
async function saveStay(stay) {
  if (!stay._id) {
    try {
      const newStay = await httpService.post(END_POINT, stay)
      return newStay
    } catch (error) {
      throw error.data
    }
  } else
    try {
      const updatedStay = await httpService.put(
        `${END_POINT}/${stay._id}`,
        stay
      )
      return updatedStay
    } catch (error) {
      throw error.data
    }
}
