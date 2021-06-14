import aspirationImage1 from 'assets/img/Aspiration1.png';
import aspirationImage2 from 'assets/img/Aspiration2.png';
import trait1 from 'assets/img/Trait1.png';

export const startingSim = {
  role: 'Founder',
  generation: 1,
  firstName: 'Bella',
  lastName: 'Goth',
  gender: 'Female',
  species: {
    value: 'Human',
    _id: '60c5d964bae7ee3724418514'
  }
};

export const startingLegacySettings = {
  name: 'Goth',
  laws: {
    gender: {
      title: 'Matriarchy',
      description:
        'The Founder must be female. Only girls are eligible to be named heir unless there are no female children, at which point boys become eligible for that generation.'
    },
    bloodline: {
      title: 'Traditional',
      description:
        'Children who are naturally born from the previous generation are eligible to be named heir. Adopted children are ineligible to be named heir unless there are no naturally born children, at which point they become eligible for that generation.'
    },
    heir: {
      title: 'First Born',
      description:
        'The oldest, by order of joining the family, eligible living child is named heir.'
    },
    species: {
      title: 'Brood',
      description:
        'Heirs must be carried in a pregnancy by the previous heir, regardless of the heir’s gender'
    }
  },
  goals: {
    aspirations: [
      {
        focused: true,
        complete: false,
        text: 'Complete 4 aspirations'
      },
      {
        focused: false,
        complete: false,
        text: 'Complete 8 aspirations'
      },
      {
        focused: false,
        complete: false,
        text: 'Complete 12 aspirations'
      },
      {
        focused: false,
        complete: true,
        text: 'Complete 16 aspirations'
      },
      {
        focused: false,
        complete: false,
        text: 'Complete 20 aspirations'
      },
      {
        focused: false,
        complete: false,
        text: 'Complete 24 aspirations'
      },
      {
        focused: false,
        complete: true,
        text: 'Complete 28 aspiraitons'
      },
      {
        focused: false,
        complete: false,
        text: 'Complete 32 aspiraitons'
      },
      {
        focused: false,
        complete: false,
        text: 'Complete 36 aspitations'
      },
      {
        focused: false,
        complete: false,
        text: 'Complete all aspirations'
      }
    ]
  }
};

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
  name: 'Goth',
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
      gender: 'Female',
      relations: {
        mother: '',
        father: '',
        spouse: ''
      },
      species: '',
      status: '',
      causeOfDeath: '',
      adopted: false
    },
    {
      id: '455ad6a65as4d5s4d',
      role: 'Potential Heir',
      generation: 2,
      traits: [],
      aspirations: [],
      firstName: 'Amy',
      lastName: 'Doe',
      gender: 'Female',
      relations: {
        mother: '',
        father: '',
        spouse: ''
      },
      species: '',
      status: '',
      causeOfDeath: '',
      adopted: false
    }
  ],
  laws: {
    gender: {
      id: '678yuighj',
      title: 'Matriarchy',
      description:
        'The Founder must be female. Only girls are eligible to be named heir unless there are no female children, at which point boys become eligible for that generation.'
    },
    bloodline: {
      id: '45fs4af43af',
      title: 'Traditional',
      description:
        'Children who are naturally born from the previous generation are eligible to be named heir. Adopted children are ineligible to be named heir unless there are no naturally born children, at which point they become eligible for that generation.'
    },
    heir: {
      id: '4f5s34af821f2saf',
      title: 'First Born',
      description:
        'The oldest, by order of joining the family, eligible living child is named heir.'
    },
    species: {
      id: 'fa43783442ds1f2as4fd5',
      title: 'Brood',
      description:
        'Heirs must be carried in a pregnancy by the previous heir, regardless of the heir’s gender'
    }
  },
  rules: [
    'No cheats/hacks/mods that give you an advantage over someone who did not use them',
    'No restarting after bad events',
    'Family must remain on the same lot for the duration of the challenge (except vacations)',
    'A Sim may use an anti-aging item ONCE in their lifetime (youth potion or milking the cow plant)',
    'Sims lifespans must be set to “Normal” in the gameplay menu',
    'You may not change a Sim’s current aspiration until it is completed',
    'You may not bring a Sim back from the dead once the reaper has taken them. You MAY plead',
    'You may not move/marry out the sim who currently holds the title of ‘heir’',
    'When playing a Legacy Challenge, your legacy family is the ONLY family you may play',
    'You are allowed to follow Sims to their jobs (Doctor, Detective, or Scientist careers)',
    'You may start with an Alien or Vampire Founder and have Alien/Vampire heirs',
    'Wishing Well from Sims 4 Romantic Garden Pack can be used only ONCE per Sim in their lifetime',
    'If you marry in a spouse with the “City Native” aspiration, you may randomly generate a new one',
    'Any Sim in the household can be set as a Toddler’s caretaker',
    'You do not need to roll for lot traits, you can change them at any time',
    'If you have the Sims 4 Parenthood Pack you do NOT need to roll for any of the upbringing traits',
    'If you have The Sims 4 Cats & Dogs you may adopt pets',
    'If you have The Sims 4 Seasons you may purchase any of the new traits with Satisfaction Points',
    'The new weather machine may be used to its fullest extent, risks and all',
    'You may befriend and use Patchy the Scarecrow to his fullest extent',
    'You may purchase and use the trait re-arranger potion. However, you must roll for new traits',
    'You are welcome to create as many holidays as you want while playing the legacy challenge',
    'Your Sims may not participate in the random Lottery holiday',
    'The Money Tree aspiration reward is too powerful and is not allowed',
    'Spouses may not bring in any money with them when they move in/marry into the family',
    'The first spouse specifically to partner with the heir is known as the primary spouse',
    'One “Primary Spouse” per generation, but any number of secondary spouses',
    'You may always introduce children into your family via pregnancy or adoption',
    'Children may only be adopted as infants',
    'You may not adopt if there are any infants (natural born or adopted) living in the house',
    'When an infant ages up into a toddler, you must roll for their toddler trait',
    'When aging to child, roll for their aspiration and first trait',
    'You may use the death flower to guarantee success when pleading with the reaper to save a dying sim',
    'You may NOT use ambrosia to resurrect a dead sim',
    'You may invite ghost sims back into your family but they cannot earn money or points',
    'Ghost Sims can still be memorialized but only by Sims that knew them in life',
    'An invited ghost who is no longer welcome may be moved out just like unwanted family members'
  ],
  score: {
    aspirations: {
      total: 0,
      amount: 0,
      percentage: 0
    },
    skills: {
      total: 0,
      amount: 0,
      percentage: 0
    }
  },
  tasks: [
    {
      id: '69tadadayiugj',
      parent: 'aspirations',
      name: 'Friend of the Animals',
      pack: 'cats_and_dogs',
      completed: 0
    }
  ],
  sims: [
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
      gender: 'Male',
      relations: {
        mother: '',
        father: '',
        spouse: ''
      },
      species: '',
      status: '',
      causeOfDeath: '',
      adopted: false
    },
    {
      id: '968y47f56a4uioh',
      role: 'Spouse',
      generation: 1,
      traits: [],
      aspirations: [],
      firstName: 'Jane',
      lastName: 'Doe',
      gender: 'Female',
      relations: {
        mother: '',
        father: '',
        spouse: ''
      },
      species: '',
      status: '',
      causeOfDeath: '',
      adopted: false
    },
    {
      id: '94524r668yuioh',
      role: 'Heir',
      generation: 1,
      traits: [],
      aspirations: [],
      firstName: 'Jane',
      lastName: 'Rose',
      gender: 'Other',
      relations: {
        mother: '',
        father: '',
        spouse: ''
      },
      species: '',
      status: '',
      causeOfDeath: '',
      adopted: false
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
      gender: 'Female',
      relations: {
        mother: '',
        father: '',
        spouse: ''
      },
      species: '',
      status: '',
      causeOfDeath: '',
      adopted: false
    },
    {
      id: '968gs65a5g6yuioh',
      role: 'Spouse',
      generation: 2,
      traits: [],
      aspirations: [],
      firstName: 'James',
      lastName: 'Gang',
      gender: 'Male',
      relations: {
        mother: '',
        father: '',
        spouse: ''
      },
      species: '',
      status: '',
      causeOfDeath: '',
      adopted: false
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
      gender: 'Female',
      relations: {
        mother: '',
        father: '',
        spouse: ''
      },
      species: '',
      status: '',
      causeOfDeath: '',
      adopted: false
    },
    {
      id: '455ad6a65as4d5s4d',
      role: 'Potential Heir',
      generation: 2,
      traits: [],
      aspirations: [],
      firstName: 'Amy',
      lastName: 'Doe',
      gender: 'Female',
      relations: {
        mother: '',
        father: '',
        spouse: ''
      },
      species: '',
      status: '',
      causeOfDeath: '',
      adopted: false
    },
    {
      id: 'gdas45s3g41s',
      role: 'Non-eligible child',
      generation: 2,
      traits: [],
      aspirations: [],
      firstName: 'Amy',
      lastName: 'Doe',
      gender: 'Female',
      relations: {
        mother: '',
        father: '',
        spouse: ''
      },
      species: '',
      status: '',
      causeOfDeath: '',
      adopted: false
    }
  ],
  aspirations: [
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
  ]
};

export const rules = [
  'No cheats/hacks/mods that give you an advantage over someone who did not use them',
  'No restarting after bad events',
  'Family must remain on the same lot for the duration of the challenge (except vacations)',
  'A Sim may use an anti-aging item ONCE in their lifetime (youth potion or milking the cow plant)',
  'Sims lifespans must be set to “Normal” in the gameplay menu',
  'You may not change a Sim’s current aspiration until it is completed',
  'You may not bring a Sim back from the dead once the reaper has taken them. You MAY plead',
  'You may not move/marry out the sim who currently holds the title of ‘heir’',
  'When playing a Legacy Challenge, your legacy family is the ONLY family you may play',
  'You are allowed to follow Sims to their jobs (Doctor, Detective, or Scientist careers)',
  'You may start with an Alien or Vampire Founder and have Alien/Vampire heirs',
  'Wishing Well from Sims 4 Romantic Garden Pack can be used only ONCE per Sim in their lifetime',
  'If you marry in a spouse with the “City Native” aspiration, you may randomly generate a new one',
  'Any Sim in the household can be set as a Toddler’s caretaker',
  'You do not need to roll for lot traits, you can change them at any time',
  'If you have the Sims 4 Parenthood Pack you do NOT need to roll for any of the upbringing traits',
  'If you have The Sims 4 Cats & Dogs you may adopt pets',
  'If you have The Sims 4 Seasons you may purchase any of the new traits with Satisfaction Points',
  'The new weather machine may be used to its fullest extent, risks and all',
  'You may befriend and use Patchy the Scarecrow to his fullest extent',
  'You may purchase and use the trait re-arranger potion. However, you must roll for new traits',
  'You are welcome to create as many holidays as you want while playing the legacy challenge',
  'Your Sims may not participate in the random Lottery holiday',
  'The Money Tree aspiration reward is too powerful and is not allowed',
  'Spouses may not bring in any money with them when they move in/marry into the family',
  'The first spouse specifically to partner with the heir is known as the primary spouse',
  'One “Primary Spouse” per generation, but any number of secondary spouses',
  'You may always introduce children into your family via pregnancy or adoption',
  'Children may only be adopted as infants',
  'You may not adopt if there are any infants (natural born or adopted) living in the house',
  'When an infant ages up into a toddler, you must roll for their toddler trait',
  'When aging to child, roll for their aspiration and first trait',
  'You may use the death flower to guarantee success when pleading with the reaper to save a dying sim',
  'You may NOT use ambrosia to resurrect a dead sim',
  'You may invite ghost sims back into your family but they cannot earn money or points',
  'Ghost Sims can still be memorialized but only by Sims that knew them in life',
  'An invited ghost who is no longer welcome may be moved out just like unwanted family members'
];

export const laws = {
  gender: [
    {
      id: '678yuighj',
      title: 'Matriarchy',
      description:
        'The Founder must be female. Only girls are eligible to be named heir unless there are no female children, at which point boys become eligible for that generation.'
    },
    {
      id: '4fa354f8q4w3',
      title: 'Strict Matriarchy',
      description:
        'The Founder must be female. Only girls are eligible to be named heir. Male children cannot, under any circumstance, ever be the heir to the next generation.'
    },
    {
      id: 'fad4357a43f5',
      title: 'Patriarchy',
      description:
        'The Founder must be male. Only boys are eligible to be named heir unless there are no male children, at which point girls become eligible for that generation.'
    },
    {
      id: 'f432351ea',
      title: 'Strict Patriarchy',
      description:
        'The Founder must be male. Only boys are eligible to be named heir. Female children cannot, under any circumstance, ever be the heir to the next generation.'
    },
    {
      id: 'ds1af3831wea2d',
      title: 'Equality',
      description:
        'The Founder may be of either gender. Both boys and girls are eligible for the title of heir.'
    },
    {
      id: '43ghs44r531dgftsh5e5ra',
      title: 'Strict Equality',
      description:
        'The founder may be of either gender. However, only children of the opposite gender to the founder are eligible to be named heir. This repeats itself for the next generation (the next heir must be a different gender than the previous heir) so that each generation will have alternating-genders as heirs.'
    }
  ],
  bloodline: [
    {
      id: 'hgs24354365a43w43',
      title: 'Strict Traditional',
      description:
        'To be eligible to be named heir, a child must be naturally born from their previous-generation parents and be able to trace an unbroken bloodline back to the founder. Adopted children may never be named heir.'
    },
    {
      id: '45fs4af43af',
      title: 'Traditional',
      description:
        'Children who are naturally born from the previous generation are eligible to be named heir. Adopted children are ineligible to be named heir unless there are no naturally born children, at which point they become eligible for that generation.'
    },
    {
      id: 'hsfd4z35433aw4',
      title: 'Modern',
      description:
        'Both Naturally born and adopted children are eligible to be named heir.'
    },
    {
      id: '424hfd5xsh433a5q2r3a',
      title: 'Foster',
      description:
        'Children who are adopted are eligible to be named heir. Naturally born children are not eligible to be named heir unless there are no adopted children, at which point they become eligible for that generation.'
    },
    {
      id: 'gfsdg43se421gr35a',
      title: 'Strict Foster',
      description:
        'Only Children who are adopted are eligible for the title of heir. Naturally born children may never be heir.'
    }
  ],
  heir: [
    {
      id: '4f5s34af821f2saf',
      title: 'First Born',
      description:
        'The oldest, by order of joining the family, eligible living child is named heir.'
    },
    {
      id: 'agrw3g435g4321r',
      title: 'Last Born',
      description:
        'The youngest, by order of joining the family, eligible living child is named heir.'
    },
    {
      id: 'agre4354rg354',
      title: 'Living Will',
      description:
        'The eligible child with the highest friendly relationship score with their previous-generation’s parent will be named heir.'
    },
    {
      id: 'ahreh4r1es3h5214bs',
      title: 'Merit',
      description:
        'The child with the most fully completed aspirations will be named heir. If there is a tie, the child with the highest level in a single skill will become heir from among the children who are tied.'
    },
    {
      id: '4r6a5ghw',
      title: 'Strength',
      description:
        'The first born eligible child becomes heir by default… but the tile can be forcefully taken from them if an eligible sibling beats them in a fight. That sibling may have their title taken, (or taken back) if they lose a fight to another eligible sibling.'
    },
    {
      id: 'a465grfe',
      title: 'Random',
      description:
        'The title of heir is randomly selected from the pool of all eligible children. Every time the eligible pool changes size, The heir must be re-rolled using the new pool.'
    },
    {
      id: 'a465r3ge',
      title: 'Exemplar',
      description:
        'At the beginning of the challenge, name a single trait. This trait must be one of your founder’s three traits.. Any eligible heir that has this trait will gain the title of heir. If a single generation has no children with this trait follow the First Born rule. If more than one child has the Exemplar trait then the oldest child WITH the trait will be the heir.'
    },
    {
      id: '64hrst6',
      title: 'Democracy',
      description:
        'This rule may be used if you are displaying your Legacy Challenge in some public way. Either via Let’s Play, Livestream, blog or other format where people can leave comment. The heir is chosen by your viewers/readers from among the pool of eligible heirs.'
    },
    {
      id: '4sr6ht',
      title: 'Magical Bloodline',
      description:
        'Choose the heir by whoever has the strongest magical bloodline trait. If there is no magical bloodline trait (ie in the earlier generations) then the law defaults to first born until magic is introduced to the family. If multiple potential heirs have the same level of magical trait, choose the oldest one.'
    },
    {
      id: '64sthr',
      title: 'Magical strength',
      description:
        'Similar to the Strength law above, this one requires two or more potential heirs to have a magical duel. Whoever wins the duel, is the new heir.'
    }
  ],
  species: [
    {
      id: 's46t5h1r3',
      title: 'Xenoarchy',
      description: 'Heirs must alternate between human and alien'
    },
    {
      id: 'fa43783442ds46sth51f2as4fd5',
      title: 'Xenophobic',
      description: 'Heirs cannot be a different species from the founder'
    },
    {
      id: 'fa43783442ds1f2as4fd5',
      title: 'Brood',
      description:
        'Heirs must be carried in a pregnancy by the previous heir, regardless of the heir’s gender'
    },
    {
      id: '68gz47rs531f',
      title: 'Tolerant',
      description:
        'The species of the child has no impact on their eligibility for heir status'
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
    gender: 'Male',
    relations: {
      mother: '',
      father: '',
      spouse: ''
    },
    species: '',
    status: '',
    causeOfDeath: '',
    adopted: false
  },
  {
    id: '968y47f56a4uioh',
    role: 'Spouse',
    generation: 1,
    traits: [],
    aspirations: [],
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'Female',
    relations: {
      mother: '',
      father: '',
      spouse: ''
    },
    species: '',
    status: '',
    causeOfDeath: '',
    adopted: false
  },
  {
    id: '94524r668yuioh',
    role: 'Heir',
    generation: 1,
    traits: [],
    aspirations: [],
    firstName: 'Jane',
    lastName: 'Rose',
    gender: 'Other',
    relations: {
      mother: '',
      father: '',
      spouse: ''
    },
    species: '',
    status: '',
    causeOfDeath: '',
    adopted: false
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
    gender: 'Female',
    relations: {
      mother: '',
      father: '',
      spouse: ''
    },
    species: '',
    status: '',
    causeOfDeath: '',
    adopted: false
  },
  {
    id: '968gs65a5g6yuioh',
    role: 'Spouse',
    generation: 2,
    traits: [],
    aspirations: [],
    firstName: 'James',
    lastName: 'Gang',
    gender: 'Male',
    relations: {
      mother: '',
      father: '',
      spouse: ''
    },
    species: '',
    status: '',
    causeOfDeath: '',
    adopted: false
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
    gender: 'Female',
    relations: {
      mother: '',
      father: '',
      spouse: ''
    },
    species: '',
    status: '',
    causeOfDeath: '',
    adopted: false
  },
  {
    id: '455ad6a65as4d5s4d',
    role: 'Potential Heir',
    generation: 2,
    traits: [],
    aspirations: [],
    firstName: 'Amy',
    lastName: 'Doe',
    gender: 'Female',
    relations: {
      mother: '',
      father: '',
      spouse: ''
    },
    species: '',
    status: '',
    causeOfDeath: '',
    adopted: false
  },
  {
    id: 'gdas45s3g41s',
    role: 'Non-eligible child',
    generation: 2,
    traits: [],
    aspirations: [],
    firstName: 'Amy',
    lastName: 'Doe',
    gender: 'Female',
    relations: {
      mother: '',
      father: '',
      spouse: ''
    },
    species: '',
    status: '',
    causeOfDeath: '',
    adopted: false
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
