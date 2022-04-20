const arr = [
  {
    id: 1,
    title: 'a',
    price: 22
  },
  {
    id: 2,
    title: 'b',
    price: 2
  },
  {
    id: 3,
    title: 'c',
    price: 1

  },
  {
    id: 4,
    title: 'd',
    price: 32

  }
];

const arrV = arr.sort((a, b) => b.price - a.price )
console.log(arrV);