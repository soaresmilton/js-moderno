//diferenças entre o objeto arguments e utilização do spread operator com arrow functions
function soma() {
  console.log(arguments);
  console.log(Object.values(arguments));
};

soma(1, 2, 3, 4, 5, 6);

const outraFunction = (...arguments) => {
  console.log(arguments)
}

outraFunction(1, 2, 3, 4, 5, 6);
