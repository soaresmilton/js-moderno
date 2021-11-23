const user = {
  firstName: 'Milton',
  lastName: 'Soares',
  age: 25,
  instagram: '@soaresmiltinho',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
};

const updatedUser = {
  ...user,
  skills: [...user.skills, 'Vendas'],
  active: true
};
console.log({ updatedUser });
console.log({ user });