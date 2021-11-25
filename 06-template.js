const person = {
  firstName: 'Miltinho',
  lastName: 'Soares'
}

const { firstName, lastName } = person;

console.log(`Seja bem vindo ${firstName} ${lastName}!
Seu último login: ${new Date()}
`);