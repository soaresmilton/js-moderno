const user = {
  firstName: 'Milton',
  lastName: 'Soares',
  full_name: 'Milton Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};

const { firstName, age, skills, full_name: fullName } = user;
const [primary, secondary, tertiary, quaternary] = skills;

console.log(fullName);

