/*  Quando voce deve usar o map ?
Quando voce precisa obter um novo array, com a mesma quantidade
de itens do array original.
*/

const numbers = [1,2,3];
/*
const subtraction = numbers.map(number =>{
    return number * 2;
})
*/
const doubleNumbers = numbers.map(number => number * 2);
console.log(numbers,doubleNumbers);

/* pegar um array com preços de produtos, e obter um novo array
desses preços em promoção(todos os produtos pela metade do preço)*/
const prices = [20,10,30,25,15,40,80,5];

const salesPrices = prices.map(price => price /2);
console.log(salesPrices);


/*pegar um array de produtos, e obter um novo array com os mesmos
produtos, mas os produtos que tem um preço igual ou acima de 30 reais
nesse novo array deve custar a metade do preço original*/ 
const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const promotions = products.map(product =>{
    if(product.price >= 30){
      return  {
        name: product.name,
        price: product.price/ 2
      }
    };
    return product;
});

console.log(products,promotions)