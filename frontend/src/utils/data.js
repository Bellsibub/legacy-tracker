import aspirationImage1 from 'assets/img/Aspiration1.png';
import aspirationImage2 from 'assets/img/Aspiration2.png';
import trait1 from 'assets/img/Trait1.png';

export const aspirations = [
  {
    id: '69tadadayiugj',
    parent: 'aspirations',
    name: 'Friend of the Animals',
    type: 'adult',
    image: aspirationImage1,
    pack: 'cats_and_dogs',
    completed: 0
  },
  {
    id: '69tyi4tgugj',
    parent: 'aspirations',
    name: 'Bodybuilder',
    type: 'adult',
    image: aspirationImage2,
    pack: 'base_game',
    completed: 1
  },
  {
    id: '69tygfsdgiugj',
    parent: 'aspirations',
    name: 'Painter Extraordinaire',
    type: 'adult',
    image: aspirationImage1,
    pack: 'base_game',
    completed: 0
  },
  {
    id: '69ty234riugj',
    parent: 'aspirations',
    name: 'Musical Genius',
    type: 'adult',
    image: aspirationImage1,
    pack: 'base_game',
    completed: 0
  },
  {
    id: '694adfgtyiugj',
    parent: 'aspirations',
    name: 'Bestselling Author',
    type: 'adult',
    image: aspirationImage2,
    pack: 'base_game',
    completed: 0
  },
  {
    id: '69t4a5g6r46yiugj',
    parent: 'aspirations',
    name: 'Jungle Explorer',
    type: 'adult',
    image: aspirationImage2,
    pack: 'jungle_adventure',
    completed: 0
  },
  {
    id: '69ty98jb32lkyiugj',
    parent: 'aspirations',
    name: 'Archaeology Scholar',
    type: 'adult',
    image: aspirationImage2,
    pack: 'jungle_adventure',
    completed: 0
  },
  {
    id: '69tyiua7df9834gj',
    parent: 'aspirations',
    name: 'Artistic Prodigy',
    type: 'child',
    image: aspirationImage1,
    pack: 'base_game',
    completed: 0
  },
  {
    id: '69j4u4kityiugj',
    parent: 'aspirations',
    name: 'Rambunctious Scamp',
    type: 'child',
    image: aspirationImage1,
    pack: 'base_game',
    completed: 0
  },
  {
    id: '69ty546345yiugj',
    parent: 'aspirations',
    name: 'Social Butterfly',
    type: 'child',
    image: aspirationImage1,
    pack: 'base_game',
    completed: 0
  },
  {
    id: '69354y436tyiugj',
    parent: 'aspirations',
    name: 'Whiz Kid',
    type: 'child',
    image: aspirationImage1,
    pack: 'base_game',
    completed: 0
  }
];

export const traits = [
  {
    id: '56f4a12',
    parent: 'traits',
    name: 'Angelic',
    type: 'toddler',
    image: trait1,
    pack: 'base_game'
  },
  {
    id: '3erdfedcxz',
    parent: 'traits',
    name: 'Charmer',
    type: 'toddler',
    image: trait1,
    pack: 'base_game'
  },
  {
    id: '35refdc',
    parent: 'traits',
    name: 'Clingy',
    type: 'toddler',
    image: trait1,
    pack: 'base_game'
  },
  {
    id: '5asd4',
    parent: 'traits',
    name: 'Bro',
    type: 'adult',
    image: trait1,
    pack: 'base_game'
  },
  {
    id: 'sjakdgh982hdjhja',
    parent: 'traits',
    name: 'Insider',
    type: 'adult',
    image: trait1,
    pack: 'get_together'
  },
  {
    id: 'adjskf9pufajskl',
    parent: 'traits',
    name: 'Freegan',
    type: 'adult',
    image: trait1,
    pack: 'eco_lifestyle'
  },
  {
    id: '4d5a428ftiugkj',
    parent: 'traits',
    name: 'Green Friend',
    type: 'adult',
    image: trait1,
    pack: 'eco_lifestyle'
  }
];

export const legacy = {
  generation: 2,
  ruler: {
    id: '968df32ftyuioh',
    role: 'Ruler',
    generation: 2,
    species: 'Human',
    traits: [
      {
        id: '35refdc',
        parent: 'traits',
        name: 'Clingy',
        type: 'toddler',
        image: trait1,
        pack: 'base_game'
      },
      {
        id: '5asd4',
        parent: 'traits',
        name: 'Bro',
        type: 'adult',
        image: trait1,
        pack: 'base_game'
      },
      {
        id: 'sjakdgh982hdjhja',
        parent: 'traits',
        name: 'Insider',
        type: 'adult',
        image: trait1,
        pack: 'get_together'
      },
      {
        id: 'adjskf9pufajskl',
        parent: 'traits',
        name: 'Freegan',
        type: 'adult',
        image: trait1,
        pack: 'eco_lifestyle'
      }
    ],
    aspirations: [
      {
        id: '69j4u4kityiugj',
        parent: 'aspirations',
        name: 'Rambunctious Scamp',
        type: 'child',
        image: aspirationImage1,
        pack: 'base_game',
        completed: 0
      },
      {
        id: '69354y436tyiugj',
        parent: 'aspirations',
        name: 'Whiz Kid',
        type: 'child',
        image: aspirationImage1,
        pack: 'base_game',
        completed: 0
      }
    ],
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'Female',
    adopted: false,
    relations: {
      father: {
        id: '968yui3troh',
        firstName: 'John',
        lastName: 'Doe'
      },
      mother: {
        id: '968y47f56a4uioh',
        firstName: 'Jane',
        lastName: 'Doe'
      },
      spouse: {
        id: '968gs65a5g6yuioh',
        firstName: 'James',
        lastName: 'Gang'
      }
    },
    status: 'Alive, in legacy household',
    causeOfDeath: null
  },
  heir: null,
  potentialHeirs: [
    {
      id: '968g369a8g7yuioh',
      role: 'Potential Heir',
      generation: 2,
      traits: [],
      aspirations: [
        {
          id: '69t4a5g6r46yiugj',
          name: 'Jungle Explorer',
          type: 'adult',
          image: aspirationImage2,
          pack: 'jungle_adventure',
          completed: 0
        }
      ],
      firstName: 'Lolli',
      lastName: 'Doe',
      gender: 'Female'
    },
    {
      id: '455ad6a65as4d5s4d',
      role: 'Potential Heir',
      generation: 2,
      traits: [],
      aspirations: [],
      firstName: 'Amy',
      lastName: 'Doe',
      gender: 'Female'
    }
  ]
};

export const sims = [
  {
    id: '968yui3troh',
    role: 'Founder',
    generation: 1,
    traits: [
      {
        id: '35refdc',
        name: 'Clingy',
        type: 'toddler',
        image: trait1,
        pack: 'base_game'
      },
      {
        id: '5asd4',
        name: 'Bro',
        type: 'adult',
        image: trait1,
        pack: 'base_game'
      },
      {
        id: 'sjakdgh982hdjhja',
        name: 'Insider',
        type: 'adult',
        image: trait1,
        pack: 'get_together'
      },
      {
        id: 'adjskf9pufajskl',
        name: 'Freegan',
        type: 'adult',
        image: trait1,
        pack: 'eco_lifestyle'
      }
    ],
    aspirations: [
      {
        id: '69tadadayiugj',
        name: 'Friend of the Animals',
        type: 'adult',
        image: aspirationImage1,
        pack: 'cats_and_dogs',
        completed: 0
      },
      {
        id: '69tyi4tgugj',
        name: 'Bodybuilder',
        type: 'adult',
        image: aspirationImage2,
        pack: 'base_game',
        completed: 1
      },
      {
        id: '69tygfsdgiugj',
        name: 'Painter Extraordinaire',
        type: 'adult',
        image: aspirationImage1,
        pack: 'base_game',
        completed: 0
      }
    ],
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male'
  },
  {
    id: '968y47f56a4uioh',
    role: 'Spouse',
    generation: 1,
    traits: [],
    aspirations: [],
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'Female'
  },
  {
    id: '94524r668yuioh',
    role: 'Heir',
    generation: 1,
    traits: [],
    aspirations: [],
    firstName: 'Jane',
    lastName: 'Rose',
    gender: 'Other'
  },
  {
    id: '968df32ftyuioh',
    role: 'Ruler',
    generation: 2,
    traits: [
      {
        id: '35refdc',
        name: 'Clingy',
        type: 'toddler',
        image: trait1,
        pack: 'base_game'
      },
      {
        id: '5asd4',
        name: 'Bro',
        type: 'adult',
        image: trait1,
        pack: 'base_game'
      },
      {
        id: 'sjakdgh982hdjhja',
        name: 'Insider',
        type: 'adult',
        image: trait1,
        pack: 'get_together'
      },
      {
        id: 'adjskf9pufajskl',
        name: 'Freegan',
        type: 'adult',
        image: trait1,
        pack: 'eco_lifestyle'
      }
    ],
    aspirations: [
      {
        id: '69j4u4kityiugj',
        name: 'Rambunctious Scamp',
        type: 'child',
        image: aspirationImage1,
        pack: 'base_game',
        completed: 0
      },
      {
        id: '69354y436tyiugj',
        name: 'Whiz Kid',
        type: 'child',
        image: aspirationImage1,
        pack: 'base_game',
        completed: 0
      }
    ],
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'Female'
  },
  {
    id: '968gs65a5g6yuioh',
    role: 'Spouse',
    generation: 2,
    traits: [],
    aspirations: [],
    firstName: 'James',
    lastName: 'Gang',
    gender: 'Male'
  },
  {
    id: '968g369a8g7yuioh',
    role: 'Potential Heir',
    generation: 2,
    traits: [],
    aspirations: [
      {
        id: '69t4a5g6r46yiugj',
        name: 'Jungle Explorer',
        type: 'adult',
        image: aspirationImage2,
        pack: 'jungle_adventure',
        completed: 0
      }
    ],
    firstName: 'Lolli',
    lastName: 'Doe',
    gender: 'Female'
  },
  {
    id: '455ad6a65as4d5s4d',
    role: 'Potential Heir',
    generation: 2,
    traits: [],
    aspirations: [],
    firstName: 'Amy',
    lastName: 'Doe',
    gender: 'Female'
  },
  {
    id: 'gdas45s3g41s',
    role: 'Non-eligible child',
    generation: 2,
    traits: [],
    aspirations: [],
    firstName: 'Amy',
    lastName: 'Doe',
    gender: 'Female'
  }
];

export const data = {
  sims: [
    {
      id: '968yui3troh',
      generation: 1,
      aspirations: [
        {
          id: '69tadadayiugj',
          name: 'Friend of the Animals',
          type: 'adult',
          image: aspirationImage1,
          pack: 'cats_and_dogs',
          completed: 0
        },
        {
          id: '69tyi4tgugj',
          name: 'Bodybuilder',
          type: 'adult',
          image: aspirationImage2,
          pack: 'base_game',
          completed: 1
        },
        {
          id: '69tygfsdgiugj',
          name: 'Painter Extraordinaire',
          type: 'adult',
          image: aspirationImage1,
          pack: 'base_game',
          completed: 0
        }
      ],
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male'
    },
    {
      id: '968y47f56a4uioh',
      generation: 1,
      aspirations: [],
      firstName: 'Jane',
      lastName: 'Doe',
      gender: 'Female'
    },
    {
      id: '94524r668yuioh',
      generation: 1,
      aspirations: [],
      firstName: 'Jane',
      lastName: 'Rose',
      gender: 'Other'
    },
    {
      id: '968df32ftyuioh',
      generation: 2,
      aspirations: [
        {
          id: '69j4u4kityiugj',
          name: 'Rambunctious Scamp',
          type: 'child',
          image: aspirationImage1,
          pack: 'base_game',
          completed: 0
        },
        {
          id: '69ty546345yiugj',
          name: 'Social Butterfly',
          type: 'child',
          image: aspirationImage1,
          pack: 'base_game',
          completed: 0
        },
        {
          id: '69354y436tyiugj',
          name: 'Whiz Kid',
          type: 'child',
          image: aspirationImage1,
          pack: 'base_game',
          completed: 0
        }
      ],
      firstName: 'Jane',
      lastName: 'Doe',
      gender: 'Female'
    },
    {
      id: '968gs65a5g6yuioh',
      generation: 2,
      aspirations: [],
      firstName: 'James',
      lastName: 'Gang',
      gender: 'Male'
    },
    {
      id: '968g369a8g7yuioh',
      generation: 2,
      aspirations: [
        {
          id: '69t4a5g6r46yiugj',
          name: 'Jungle Explorer',
          type: 'adult',
          image: aspirationImage2,
          pack: 'jungle_adventure',
          completed: 0
        },
        {
          id: '69ty98jb32lkyiugj',
          name: 'Archaeology Scholar',
          type: 'adult',
          image: aspirationImage2,
          pack: 'jungle_adventure',
          completed: 0
        }
      ],
      firstName: 'Lolli',
      lastName: 'Doe',
      gender: 'Female'
    }
  ],
  genders: ['Male', 'Female', 'Other'],
  species: [
    'Alien',
    'Ghost',
    'Human',
    'Mermaid',
    'Spellcaster',
    'Vampire',
    'Hybrid A-H',
    'Hybrid A-M',
    'Hybrid A-S',
    'Hybrid A-V',
    'Hybrid M-H',
    'Hybrid M-S',
    'Hybrid S-H',
    'Hybrid V-H',
    'Hybrid V-M',
    'Hybrid V-S'
  ],
  traits: [
    { name: 'Angelic', type: 'toddler' },
    { name: 'Charmer', type: 'toddler' },
    { name: 'Clingy', type: 'toddler' },
    { name: 'Fussy', type: 'toddler' },
    { name: 'Independent', type: 'toddler' },
    { name: 'Inquisitive', type: 'toddler' },
    { name: 'Silly', type: 'toddler' },
    { name: 'Wild', type: 'toddler' },
    { type: 'adult', name: 'Active' },
    { type: 'adult', name: 'Adventurous' },
    { type: 'adult', name: 'Ambitious' },
    { type: 'adult', name: 'Art lover' },
    { type: 'adult', name: 'Bookworm' },
    { type: 'adult', name: 'Bro' },
    { type: 'adult', name: 'Cat lover' },
    { type: 'adult', name: 'Cheerful' },
    { type: 'adult', name: 'Child of the islands' },
    { type: 'adult', name: 'Child of the ocean' },
    { type: 'adult', name: 'Childish' },
    { type: 'adult', name: 'Clumsy' },
    { type: 'adult', name: 'Creative' },
    { type: 'adult', name: 'Dance machine' },
    { type: 'adult', name: 'Dog lover' },
    { type: 'adult', name: 'Erratic' },
    { type: 'adult', name: 'Evil' },
    { type: 'adult', name: 'Family oriented' },
    { type: 'adult', name: 'Foodie' },
    { type: 'adult', name: 'Freegan' },
    { type: 'adult', name: 'Geek' },
    { type: 'adult', name: 'Genius' },
    { type: 'adult', name: 'Gloomy' },
    { type: 'adult', name: 'Glutton' },
    { type: 'adult', name: 'Good' },
    { type: 'adult', name: 'Goofball' },
    { type: 'adult', name: 'Green fiend' },
    { type: 'adult', name: 'Hates children' },
    { type: 'adult', name: 'Hot-headed' },
    { type: 'adult', name: 'Insider' },
    { type: 'adult', name: 'Jealous' },
    { type: 'adult', name: 'Kleptomaniac' },
    { type: 'adult', name: 'Lazy' },
    { type: 'adult', name: 'Loner' },
    { type: 'adult', name: 'Loves outdoors' },
    { type: 'adult', name: 'Maker' },
    { type: 'adult', name: 'Materialistic' },
    { type: 'adult', name: 'Mean' },
    { type: 'adult', name: 'Music lover' },
    { type: 'adult', name: 'Neat' },
    { type: 'adult', name: 'Noncommital' },
    { type: 'adult', name: 'Outgoing' },
    { type: 'adult', name: 'Paranoid' },
    { type: 'adult', name: 'Perfectionist' },
    { type: 'adult', name: 'Proper' },
    { type: 'adult', name: 'Recycle disciple' },
    { type: 'adult', name: 'Romantic' },
    { type: 'adult', name: 'Self-absorbed' },
    { type: 'adult', name: 'Self-assured' },
    { type: 'adult', name: 'Slob' },
    { type: 'adult', name: 'Snob' },
    { type: 'adult', name: 'Squamish' },
    { type: 'adult', name: 'Unflirty' },
    { type: 'adult', name: 'Vegitarian' }
  ],
  aspirations: [
    { type: 'child', name: 'Artistic prodigy' },
    { type: 'child', name: 'Rambunctious scamp' },
    { type: 'child', name: 'Social butterfly' },
    { type: 'child', name: 'Whiz kid' },
    { type: 'adult', name: 'Academic sim' },
    { type: 'adult', name: 'Angelic ace' },
    { type: 'adult', name: 'Archaeology scolar' },
    { type: 'adult', name: 'Beach life' },
    { type: 'adult', name: 'Bestselling author' },
    { type: 'adult', name: 'Big happy family' },
    { type: 'adult', name: 'Bodybuilder' },
    { type: 'adult', name: 'Chief of mischief' },
    { type: 'adult', name: 'City native' },
    { type: 'adult', name: 'Computer whiz' },
    { type: 'adult', name: 'Eco innovator' },
    { type: 'adult', name: 'Enforcer of order' },
    { type: 'adult', name: 'Extreme sports enthousiast' },
    { type: 'adult', name: 'Fabulously Filthy' },
    { type: 'adult', name: 'Fabulously wealthy' },
    { type: 'adult', name: 'Freelance botanist' },
    { type: 'adult', name: 'Friend of the animals' },
    { type: 'adult', name: 'Friend of the world' },
    { type: 'adult', name: 'Galactic privateer' },
    { type: 'adult', name: 'Good vampire' },
    { type: 'adult', name: 'Hope VS Order' },
    { type: 'adult', name: 'Joke star' },
    { type: 'adult', name: 'Jungle explorer' },
    { type: 'adult', name: 'Leader of the pack' },
    { type: 'adult', name: 'Lord/Lady of the knits' },
    { type: 'adult', name: 'Mansion baron' },
    { type: 'adult', name: 'Master actor/actress' },
    { type: 'adult', name: 'Master chef' },
    { type: 'adult', name: 'Master maker' },
    { type: 'adult', name: 'Master mixologist' },
    { type: 'adult', name: 'Master vampire' },
    { type: 'adult', name: 'Mt. komorebi sightseer' },
    { type: 'adult', name: 'musical genius' },
    { type: 'adult', name: 'Nerd brain' },
    { type: 'adult', name: 'Outdoor enthusiast' },
    { type: 'adult', name: 'Painter extraordinaire' },
    { type: 'adult', name: 'Paragon of hope' },
    { type: 'adult', name: 'Party animal' },
    { type: 'adult', name: 'Perfectly Pristine' },
    { type: 'adult', name: 'Public enemy' },
    { type: 'adult', name: 'Purveyor of potions' },
    { type: 'adult', name: 'Renaissance sim' },
    { type: 'adult', name: 'Serial romantic' },
    { type: 'adult', name: 'Soulmate' },
    { type: 'adult', name: 'Spellcraft & sorcery' },
    { type: 'adult', name: 'Strangercille mystery' },
    { type: 'adult', name: 'Successful lineage' },
    { type: 'adult', name: 'Super parent' },
    { type: 'adult', name: 'The curator' },
    { type: 'adult', name: 'The positivity challenge' },
    { type: 'adult', name: 'Vampire family' },
    { type: 'adult', name: 'World-famous celebrity' }
  ],
  roles: [
    'Founder',
    'Ruler',
    'Heir',
    'Potential heir',
    'Spouse',
    'Secondary spouse',
    'Non-eligible child',
    'Cadet child',
    'Cadet spouse',
    'Spare'
  ],
  status: ['Alive, in legacy household', 'Alive, not in legacy household', 'Dead'],
  causeOfDeath: [
    'Beetles',
    'Cardiac explosion',
    'Cowplant',
    'Drowning',
    'Electorution',
    'Fire',
    'Flies',
    'Flower arrengement',
    'Freezing',
    'Hysteria',
    'Lightning',
    'Low-quality pufferfish',
    'Mortification',
    'Mother plant',
    'Murphy bed',
    'Old age',
    'Overextertion',
    'Overheating',
    'Poison',
    'Rabid rodent fever',
    'Spellcaster overload',
    'Starvation',
    'Steam',
    'Sunlight',
    'Vending Machine',
    'Falling'
  ],
  goals: {
    aspirations: [
      {
        id: '8d9adsadqwdasyoiuh',
        focused: true,
        complete: false,
        text: 'Complete 4 aspirations'
      },
      {
        id: '8d97tiug9asyoiuh',
        focused: false,
        complete: false,
        text: 'Complete 8 aspirations'
      },
      {
        id: '8d9asyoi875tiyughjuh',
        focused: false,
        complete: false,
        text: 'Complete 12 aspirations'
      },
      {
        id: '079uypoijlk8d9asyoiuh',
        focused: false,
        complete: true,
        text: 'Complete 16 aspirations'
      },
      {
        id: '78yoiuh8d9asyoiuh',
        focused: false,
        complete: false,
        text: 'Complete 20 aspirations'
      },
      {
        id: '87yoiu8d9asyoiuh',
        focused: false,
        complete: false,
        text: 'Complete 24 aspirations'
      },
      {
        id: '798yuioh8d9asyoiuh',
        focused: false,
        complete: true,
        text: 'Complete 28 aspiraitons'
      },
      {
        id: 'y8uoh8d9asyoiuh',
        focused: false,
        complete: false,
        text: 'Complete 32 aspiraitons'
      },
      {
        id: 'y7tui8d9asyoiuh',
        focused: false,
        complete: false,
        text: 'Complete 36 aspitations'
      },
      {
        id: 'kdl8d9asyoiuh',
        focused: false,
        complete: false,
        text: 'Complete all aspirations'
      }
    ]
  }
};
