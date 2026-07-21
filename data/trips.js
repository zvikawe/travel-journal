const TRIPS = [
  {
    "slug": "manchester",
    "flag": "🇬🇧",
    "title": "Manchester",
    "dates": "1–2 August 2026",
    "location": "Manchester, England",
    "tagline": "Architecture, theatre and a personal return to Prestwich.",
    "status": "Confirmed",
    "accent": "city",
    "highlights": [
      "Chetham’s Library",
      "Royal Exchange Theatre",
      "Prestwich"
    ],
    "days": [
      {
        "date": "Saturday 1 August",
        "title": "Arrival, city centre and Fun Home",
        "items": [
          "12:05 — Arrive in Manchester by train",
          "Check in at Holiday Inn Manchester City Centre",
          "Explore the city centre, including key architecture and the Northern Quarter",
          "Visit Chetham’s Library if the booked tour time fits",
          "19:30 — Fun Home at the Royal Exchange Theatre",
          "Dinner or drinks after the performance"
        ]
      },
      {
        "date": "Sunday 2 August",
        "title": "Prestwich and final Manchester sights",
        "items": [
          "Breakfast and check out",
          "Travel to Prestwich",
          "Visit 8 Hereford Drive, your mother’s former neighbourhood",
          "Return to central Manchester for remaining sights and lunch",
          "16:55 — Preferred return train to London"
        ]
      }
    ],
    "book": [
      "Chetham’s Library tour",
      "Fun Home ticket",
      "Return train"
    ],
    "notes": "No museums. Keep Sunday timing comfortable around the Prestwich visit.",
    "image": "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=85"
  },
  {
    "slug": "croatia",
    "flag": "🇭🇷",
    "title": "Croatia",
    "dates": "8–16 August 2026",
    "location": "Croatia",
    "tagline": "A summer Adriatic escape.",
    "status": "Needs itinerary details",
    "accent": "coast",
    "highlights": [
      "Adriatic coast",
      "Historic towns",
      "Island scenery"
    ],
    "days": [
      {
        "date": "8–16 August",
        "title": "Itinerary to be added",
        "items": [
          "Add confirmed arrival and departure airports",
          "Add accommodation locations",
          "Add any island, city or national park plans",
          "Add restaurant, boat trip and transfer bookings"
        ]
      }
    ],
    "book": [
      "Flights",
      "Hotels",
      "Ferries or transfers",
      "Popular boat trips"
    ],
    "notes": "This page is ready structurally, but I do not yet have your actual Croatia route.",
    "image": "https://images.unsplash.com/photo-1555990538-1e6c6f80f28f?auto=format&fit=crop&w=1800&q=85"
  },
  {
    "slug": "newbury",
    "flag": "🇬🇧",
    "title": "Newbury",
    "dates": "30–31 August 2026",
    "location": "Newbury, Berkshire",
    "tagline": "Theatre, a characterful stay and Highclere Castle.",
    "status": "Mostly confirmed",
    "accent": "country",
    "highlights": [
      "The Watermill Theatre",
      "The Coat & Bear",
      "Highclere Castle"
    ],
    "days": [
      {
        "date": "Sunday 30 August",
        "title": "Newbury and Chitty Chitty Bang Bang",
        "items": [
          "Travel from London to Newbury",
          "Check in at The Coat & Bear",
          "Explore Newbury at a relaxed pace",
          "Matinee — Chitty Chitty Bang Bang at The Watermill Theatre",
          "Dinner in Newbury"
        ]
      },
      {
        "date": "Monday 31 August",
        "title": "Highclere Castle",
        "items": [
          "Breakfast and check out",
          "Travel to Highclere Castle",
          "Visit the castle and Egyptian Exhibition",
          "Return to London after the visit"
        ]
      }
    ],
    "book": [
      "Watermill Theatre ticket",
      "Highclere Castle and Egyptian Exhibition",
      "Hotel",
      "Transport to Highclere"
    ],
    "notes": "Bank Holiday weekend: advance booking is essential.",
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85"
  },
  {
    "slug": "chichester",
    "flag": "🇬🇧",
    "title": "Chichester",
    "dates": "5–6 September 2026",
    "location": "Chichester, West Sussex",
    "tagline": "A refined theatre break built around My Fair Lady.",
    "status": "Partially confirmed",
    "accent": "theatre",
    "highlights": [
      "Chichester Festival Theatre",
      "Cathedral quarter",
      "My Fair Lady"
    ],
    "days": [
      {
        "date": "Saturday 5 September",
        "title": "Arrival and Chichester",
        "items": [
          "Train from London to Chichester",
          "Check in and explore the compact historic centre",
          "Visit Chichester Cathedral and the surrounding streets",
          "Dinner before or after the performance",
          "My Fair Lady at Chichester Festival Theatre"
        ]
      },
      {
        "date": "Sunday 6 September",
        "title": "Slow morning and return",
        "items": [
          "Breakfast and check out",
          "Final walk through Chichester",
          "Optional nearby stop if transport and weather allow",
          "Return to London"
        ]
      }
    ],
    "book": [
      "My Fair Lady ticket",
      "Hotel",
      "Train"
    ],
    "notes": "Hotel and exact performance time still need to be added.",
    "image": "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1800&q=85"
  },
  {
    "slug": "lake-district",
    "flag": "🇬🇧",
    "title": "Lake District",
    "dates": "10–13 September 2026",
    "location": "Keswick, Cumbria",
    "tagline": "A 40th birthday escape among lakes and fells.",
    "status": "Confirmed",
    "accent": "mountain",
    "highlights": [
      "Friar’s Crag",
      "Catbells",
      "Buttermere"
    ],
    "days": [
      {
        "date": "Thursday 10 September",
        "title": "London to Keswick and Friar’s Crag",
        "items": [
          "09:30 — Train from London Euston to Carlisle",
          "12:45 — Arrive in Carlisle",
          "14:00 — Bus 554 to Keswick",
          "15:23 — Arrive and check in at Crow Park Hotel, mountain-view room",
          "Late afternoon — Derwentwater and Friar’s Crag",
          "Dinner in Keswick"
        ]
      },
      {
        "date": "Friday 11 September",
        "title": "Keswick Launch and Catbells",
        "items": [
          "Breakfast overlooking the fells",
          "09:30 — Keswick Launch to Hawse End",
          "Catbells via the classic ridge route",
          "Return by ferry or lakeside path",
          "Relaxed evening in Keswick"
        ]
      },
      {
        "date": "Saturday 12 September",
        "title": "Buttermere and birthday dinner",
        "items": [
          "Morning bus from Keswick toward Buttermere",
          "Walk part or all of the Buttermere circuit",
          "Lunch in the village",
          "Return to Keswick for rest",
          "Special dinner for the 40th birthday"
        ]
      },
      {
        "date": "Sunday 13 September",
        "title": "Final morning and home",
        "items": [
          "Leisurely breakfast and final Keswick stroll",
          "12:35 — Bus to Carlisle",
          "15:20 — Train to London Euston",
          "18:50 — Arrive in London"
        ]
      }
    ],
    "book": [
      "Keswick Launch",
      "Birthday dinner",
      "Train and bus tickets"
    ],
    "notes": "Keep Friday and Saturday swappable depending on the mountain forecast.",
    "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=85"
  },
  {
    "slug": "lake-garda",
    "flag": "🇮🇹",
    "title": "Lake Garda",
    "dates": "8–11 October 2026",
    "location": "Lake Garda, Italy",
    "tagline": "Scenery, food, spa time and gentle exploration.",
    "status": "Needs confirmed base",
    "accent": "lake",
    "highlights": [
      "Lake views",
      "Spa time",
      "Italian food and wine"
    ],
    "days": [
      {
        "date": "Thursday 8 October",
        "title": "Arrival in northern Italy",
        "items": [
          "Fly to Milan Malpensa",
          "Transfer to the Lake Garda area",
          "Check in and enjoy a relaxed first evening"
        ]
      },
      {
        "date": "Friday 9 October",
        "title": "Lake village and spa",
        "items": [
          "Explore one of Lake Garda’s scenic towns",
          "Long lunch with lake views",
          "Spa or pool time",
          "Dinner near the hotel"
        ]
      },
      {
        "date": "Saturday 10 October",
        "title": "Scenery and mild hiking",
        "items": [
          "Gentle scenic walk or cable-car excursion",
          "Wine, olive oil or local food experience",
          "Final special dinner"
        ]
      },
      {
        "date": "Sunday 11 October",
        "title": "Return to London",
        "items": [
          "Relaxed morning",
          "Transfer to Milan Malpensa",
          "18:50 — London couple’s return flight"
        ]
      }
    ],
    "book": [
      "Hotel or spa resort",
      "Airport transfer or car",
      "Restaurants",
      "Any cable car or wine experience"
    ],
    "notes": "The exact Garda base, hotel and routing still need to be added.",
    "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=85"
  },
  {
    "slug": "thailand",
    "flag": "🇹🇭",
    "title": "Thailand",
    "dates": "24 December 2026 – 5 January 2027",
    "location": "Bangkok, Krabi and Phuket",
    "tagline": "Amit’s 40th birthday journey from city energy to tropical calm.",
    "status": "Hotels and flights confirmed",
    "accent": "tropical",
    "highlights": [
      "Bangkok",
      "Krabi",
      "Phuket"
    ],
    "days": [
      {
        "date": "24–28 December",
        "title": "Bangkok",
        "items": [
          "24 December — Depart for Thailand",
          "25 December, 16:00 — Arrive at Bangkok Suvarnabhumi",
          "Stay at Eastin Grand Hotel Sathorn",
          "Explore Bangkok with a mix of major sights, food and downtime",
          "28 December — Morning domestic flight to Krabi"
        ]
      },
      {
        "date": "28 December–1 January",
        "title": "Krabi",
        "items": [
          "Stay at Pakasai Resort",
          "Beach and pool time",
          "At least one major day trip, such as Phi Phi or James Bond Island",
          "Balance excursions with relaxed resort time"
        ]
      },
      {
        "date": "1–5 January",
        "title": "Phuket",
        "items": [
          "Transfer from Krabi to Phuket",
          "Stay in a Pool Pavilion at Amatara Welleisure Resort",
          "Private pool and sea-view downtime",
          "Spa, scenic dining and one optional outing",
          "5 January, 14:30 — Fly from Phuket to London"
        ]
      }
    ],
    "book": [
      "Bangkok restaurants",
      "Krabi boat trip",
      "Krabi–Phuket transfer",
      "Birthday meal or spa treatment"
    ],
    "notes": "No nightlife focus. Prioritise scenery, beaches, relaxation and memorable birthday experiences.",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85"
  }
];
