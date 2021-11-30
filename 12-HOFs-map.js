const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 }
];


const map = array.map((product) => (
  {
    ...product,
    subtotal: product.quantity * product.price
  }
))

console.log({ map });