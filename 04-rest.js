const user = {
  firstName: 'Milton',
  lastName: 'Soares',
  full_name: 'Milton Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};

const { firstName, skills, ...demaisPropreidades } = user;
const [primary] = skills;

console.log( firstName, primary, demaisPropreidades );

