/* Quando voce deve usar o filter?
    Quando você precisa obter um novo array,
    com uma quantidade de itens menor que a do
    array original;
*/


// retorna valores no novo array maior que 37;
const randomNumbers = [36,99,37,63];
const numbersGreaterThan37 = randomNumbers.filter(item => item > 37);
console.log(numbersGreaterThan37);

// retorna um novo array, só com os usuarios premium
const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);