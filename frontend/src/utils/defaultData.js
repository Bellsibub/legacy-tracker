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
        text: 'Complete 4 aspirations',
        count: 4
      },
      {
        text: 'Complete 8 aspirations',
        count: 8
      },
      {
        text: 'Complete 12 aspirations',
        count: 12
      },
      {
        text: 'Complete 16 aspirations',
        count: 16
      },
      {
        text: 'Complete 20 aspirations',
        count: 20
      },
      {
        text: 'Complete 24 aspirations',
        count: 24
      },
      {
        text: 'Complete 28 aspiraitons',
        count: 28
      },
      {
        text: 'Complete 32 aspiraitons',
        count: 32
      },
      {
        text: 'Complete 36 aspitations',
        count: 36
      },
      {
        text: 'Complete all aspirations',
        count: 56
      }
    ],
    skills: [
      { count: 3, text: 'Max 3 skills' },
      { count: 6, text: 'Max 6 skills' },
      { count: 9, text: 'Max 9 skills' },
      { count: 12, text: 'Max 12 skills' },
      { count: 15, text: 'Max 15 skills' },
      { count: 18, text: 'Max 18 skills' },
      { count: 21, text: 'Max 21 skills' },
      { count: 24, text: 'Max 24 skills' },
      { count: 27, text: 'Max 27 skills' },
      { count: 3, text: 'Max all skills at least once' }
    ],
    food: [
      { text: 'Purchase the most expensive fridge and stove and fully upgrade both of them' },
      { text: 'Have a Sim make a highest quality version of Baked Alaska, the most difficult to make dish.' },
      { text: 'Have a single Sim max the cooking, baking, gourmet cooking, and mixology skills' },
      { text: 'Have Sims complete both food aspirations in a single generation, this can be done by two different Sims' },
      { text: 'Have a Sim get fat from your family’s cooking' },
      { text: 'Have at least six Sims all sitting at the table eating at the same time' },
      { text: 'Reach the top of both food career branches' },
      { text: 'Cook a meal with at least two fresh ingredients that are of the highest quality' },
      { text: 'Have a Sim make their date a max-quality meal or mix a max-quality drink during a single date' },
      { text: 'Serve a max-quality party-sized meal and mix a max-quality drink and serve both during a single party' }
    ]
  }
};
