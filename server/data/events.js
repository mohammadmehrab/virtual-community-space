const eventData = [
  // Events for Echo Plaza
  {
    id: 1,
    name: "Echoes of the Night - The Weeknd",
    datetime: "2024-10-15 20:00:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/The_Weeknd_Cannes_2023.png",
    location: 1
  },
  {
    id: 2,
    name: "Summer Vibes - Khalid",
    datetime: "2024-10-16 18:00:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Khalid-MTV_smiling.jpg/640px-Khalid-MTV_smiling.jpg",
    location: 1
  },
  {
    id: 3,
    name: "Retro Night - Dua Lipa",
    datetime: "2024-10-17 19:30:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Glasto24_28_300624_%28259_of_545%29_%2853838014719%29_%28cropped%29.jpg",
    location: 1
  },
  {
    id: 4,
    name: "Acoustic Evening - Ed Sheeran",
    datetime: "2024-10-18 21:00:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/1200px-Ed_Sheeran-6886_%28cropped%29.jpg",
    location: 1
  },
  {
    id: 5,
    name: "Dance Party - Lady Gaga",
    datetime: "2024-10-19 22:00:00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUIIPAO4VtinNaZm1MCJkY5BKybiJZ6uVbg&s",
    location: 1
  },

  // Events for Harmony Hall
  {
    id: 6,
    name: "Harmony Beats - Billie Eilish",
    datetime: "2024-10-20 19:30:00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcPG-AcBI72PNAMs2lM0v-mUz1UCgJIYkyA&s",
    location: 2
  },
  {
    id: 7,
    name: "Folk Festival - Mumford & Sons",
    datetime: "2024-10-21 17:00:00",
    image: "https://media.philly.com/images/MumfordAndSons-James_Mi.jpg",
    location: 2
  },
  {
    id: 8,
    name: "Pop Night - Ariana Grande",
    datetime: "2024-10-22 20:00:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Ariana_Grande_at_the_Met_Gala_2024_%281%29.jpg",
    location: 2
  },
  {
    id: 9,
    name: "Jazz Evenings - Norah Jones",
    datetime: "2024-10-23 19:00:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Norah_Jones_sings_during_Congressional_Gold_Medal_Ceremony_%28cropped%29.jpg/800px-Norah_Jones_sings_during_Congressional_Gold_Medal_Ceremony_%28cropped%29.jpg",
    location: 2
  },
  {
    id: 10,
    name: "Rock Legends - Foo Fighters",
    datetime: "2024-10-24 21:30:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Glasto2023_%2865_of_468%29_%28cropped%29.jpg",
    location: 2
  },

  // Events for The Sound Garden
  {
    id: 11,
    name: "Garden Grooves - Tame Impala",
    datetime: "2024-10-25 18:30:00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6qGuy8w50YpCtcTo7oGtxibuo7U3fbrOjQ&s",
    location: 3
  },
  {
    id: 12,
    name: "Sunset Beats - Kygo",
    datetime: "2024-10-26 19:00:00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfDmdKEWvaoLui9kNzVk3b6nbAwcmnfDBTQ&s",
    location: 3
  },
  {
    id: 13,
    name: "Indie Night - Hozier",
    datetime: "2024-10-27 20:00:00",
    image: "https://www.rollingstone.com/wp-content/uploads/2024/08/R1391_Random-Notes_Hozier_A-e1723646684359.jpg",
    location: 3
  },
  {
    id: 14,
    name: "Electronic Dreams - ODESZA",
    datetime: "2024-10-28 22:00:00",
    image: "https://wordpress.wbur.org/wp-content/uploads/2018/01/0126_odesza.jpg",
    location: 3
  },
  {
    id: 15,
    name: "Acoustic Sundays - Jason Mraz",
    datetime: "2024-10-29 18:00:00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOM3EeZaPpTwZa3xQHjTgvI_zwrHrv_JO2A&s",
    location: 3
  },

  // Events for Melody Park
  {
    id: 16,
    name: "Melodies in the Park - Taylor Swift",
    datetime: "2024-10-30 17:00:00",
    image: "https://example.com/images/taylor-swift.jpg",
    location: 4
  },
  {
    id: 17,
    name: "Country Night - Luke Bryan",
    datetime: "2024-10-31 19:30:00",
    image: "https://example.com/images/luke-bryan.jpg",
    location: 4
  },
  {
    id: 18,
    name: "Pop Rock Party - Paramore",
    datetime: "2024-11-01 20:00:00",
    image: "https://example.com/images/paramore.jpg",
    location: 4
  },
  {
    id: 19,
    name: "Reggae Vibes - Bob Marley Tribute",
    datetime: "2024-11-02 19:00:00",
    image: "https://example.com/images/bob-marley.jpg",
    location: 4
  },
  {
    id: 20,
    name: "Classic Rock Night - The Rolling Stones",
    datetime: "2024-11-03 21:00:00",
    image: "https://example.com/images/rolling-stones.jpg",
    location: 4
  },

  // Events for Rhythm Rooftop
  {
    id: 21,
    name: "Rhythms Under the Stars - Bruno Mars",
    datetime: "2024-11-04 21:00:00",
    image: "https://example.com/images/bruno-mars.jpg",
    location: 5
  },
  {
    id: 22,
    name: "Soul Night - Alicia Keys",
    datetime: "2024-11-05 20:00:00",
    image: "https://example.com/images/alicia-keys.jpg",
    location: 5
  },
  {
    id: 23,
    name: "Funky Friday - Lizzo",
    datetime: "2024-11-06 19:00:00",
    image: "https://example.com/images/lizzo.jpg",
    location: 5
  },
  {
    id: 24,
    name: "Retro Revival - Madonna",
    datetime: "2024-11-07 22:00:00",
    image: "https://example.com/images/madonna.jpg",
    location: 5
  },
  {
    id: 25,
    name: "Night of the Hits - Usher",
    datetime: "2024-11-08 20:30:00",
    image: "https://example.com/images/usher.jpg",
    location: 5
  },

  // Events for Bassline Arena
  {
    id: 26,
    name: "Bassline Beats - Dua Lipa",
    datetime: "2024-11-09 19:00:00",
    image: "https://example.com/images/dua-lipa.jpg",
    location: 6
  },
  {
    id: 27,
    name: "Electro Night - Calvin Harris",
    datetime: "2024-11-10 20:30:00",
    image: "https://example.com/images/calvin-harris.jpg",
    location: 6
  },
  {
    id: 28,
    name: "House Party - David Guetta",
    datetime: "2024-11-11 19:45:00",
    image: "https://example.com/images/david-guetta.jpg",
    location: 6
  },
  {
    id: 29,
    name: "Rave Night - Marshmello",
    datetime: "2024-11-12 22:00:00",
    image: "https://example.com/images/marshmello.jpg",
    location: 6
  },
  {
    id: 30,
    name: "Festival of Lights - Zedd",
    datetime: "2024-11-13 20:00:00",
    image: "https://example.com/images/zedd.jpg",
    location: 6
  },

  // Events for Treble Stage
  {
    id: 31,
    name: "Treble Tunes - Ed Sheeran",
    datetime: "2024-11-14 20:00:00",
    image: "https://example.com/images/ed-sheeran.jpg",
    location: 7
  },
  {
    id: 32,
    name: "Rock & Roll Night - Green Day",
    datetime: "2024-11-15 21:00:00",
    image: "https://example.com/images/green-day.jpg",
    location: 7
  },
  {
    id: 33,
    name: "Acoustic Bliss - Jack Johnson",
    datetime: "2024-11-16 18:30:00",
    image: "https://example.com/images/jack-johnson.jpg",
    location: 7
  },
  {
    id: 34,
    name: "Pop Extravaganza - Katy Perry",
    datetime: "2024-11-17 19:00:00",
    image: "https://example.com/images/katy-perry.jpg",
    location: 7
  },
  {
    id: 35,
    name: "Indie Fiesta - Florence + The Machine",
    datetime: "2024-11-18 20:00:00",
    image: "https://example.com/images/florence-machine.jpg",
    location: 7
  },

  // Events for Acoustic Corner
  {
    id: 36,
    name: "Acoustic Vibes - John Mayer",
    datetime: "2024-11-19 18:00:00",
    image: "https://example.com/images/john-mayer.jpg",
    location: 8
  },
  {
    id: 37,
    name: "Singer-Songwriter Night - Sarah Bareilles",
    datetime: "2024-11-20 20:30:00",
    image: "https://example.com/images/sarah-bareilles.jpg",
    location: 8
  },
  {
    id: 38,
    name: "Piano Serenades - Alicia Keys",
    datetime: "2024-11-21 19:00:00",
    image: "https://example.com/images/alicia-keys.jpg",
    location: 8
  },
  {
    id: 39,
    name: "Guitar Melodies - Jason Isbell",
    datetime: "2024-11-22 18:30:00",
    image: "https://example.com/images/jason-isbell.jpg",
    location: 8
  },  {
    id: 40,
    name: "Evening Chords - Brandi Carlile",
    datetime: "2024-11-23 20:00:00",
    image: "https://example.com/images/brandi-carlile.jpg",
    location: 8
  },

  // Events for Soulful Stage
  {
    id: 41,
    name: "Vibrato Nights - Alicia Keys",
    datetime: "2024-11-24 19:00:00",
    image: "https://example.com/images/alicia-keys.jpg",
    location: 9
  },
  {
    id: 42,
    name: "Classic Soul - Aretha Franklin Tribute",
    datetime: "2024-11-25 20:00:00",
    image: "https://example.com/images/aretha-franklin.jpg",
    location: 9
  },
  {
    id: 43,
    name: "Neo-Soul Evening - Erykah Badu",
    datetime: "2024-11-26 18:30:00",
    image: "https://example.com/images/erykah-badu.jpg",
    location: 9
  },
  {
    id: 44,
    name: "R&B Revival - Usher",
    datetime: "2024-11-27 21:00:00",
    image: "https://example.com/images/usher.jpg",
    location: 9
  },
  {
    id: 45,
    name: "Smooth Jazz Night - Norah Jones",
    datetime: "2024-11-28 19:00:00",
    image: "https://example.com/images/norah-jones.jpg",
    location: 9
  },

  // Events for Festival Field
  {
    id: 46,
    name: "Rhythmic Fusion - Khalid",
    datetime: "2024-11-29 20:00:00",
    image: "https://example.com/images/khalid.jpg",
    location: 10
  },
  {
    id: 47,
    name: "Rock the Field - Imagine Dragons",
    datetime: "2024-11-30 21:00:00",
    image: "https://example.com/images/imagine-dragons.jpg",
    location: 10
  },
  {
    id: 48,
    name: "Hip Hop Festival - Travis Scott",
    datetime: "2024-12-01 19:30:00",
    image: "https://example.com/images/travis-scott.jpg",
    location: 10
  },
  {
    id: 49,
    name: "Music Under the Stars - Coldplay",
    datetime: "2024-12-02 20:00:00",
    image: "https://example.com/images/coldplay.jpg",
    location: 10
  },
  {
    id: 50,
    name: "Global Beats - DJ Snake",
    datetime: "2024-12-03 22:00:00",
    image: "https://example.com/images/dj-snake.jpg",
    location: 10
  }
];

export default eventData;