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
  }

};
