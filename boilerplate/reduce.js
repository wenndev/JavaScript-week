/*
    Quando voce deve usar o reduce:

    Quando baseado no array original, voce precisa "reduzir"
    o array á um valor.
*/ 

/*
função executada, para cada item do array.
na primeira vez que a função for executada, o accumulator vai receber o 0, e item vai receber o primeiro item do array (numero 1), 
e fará a soma 1 + 0 = 1;
na segunda execução o accumulator armazena o valor que a funçao retornou na execução passada que foi 1, e o item recebe o segundo item
do array (numero 2) e fará a soma 1 + 2 = 3;
e na terceira execução o accumulator armazena o valor que a função retornou na execução passada que foi 3, e o item recebe o 
terceiro item do array(numero 3) e fará a soma 3 + 3 = 6;

*/

const numbers = [1,2,3];
const sumResult = numbers.reduce((accumulator,item)=>accumulator + item,0);
console.log(sumResult);




/* 
recebe um array de objetos que representa uma pontuações de jogadore de um jogo
em uma determinada fase, cada objeto tem um nome e uma pontuçao de cada jogador, pode
ter mais de um objeto, o objetivo é obter a pontuação total de um jogador.
*/
const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
]

const playerTotalScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Roger Melo'){
        return accumulator += phaseScore.score;
    }
    return accumulator;
},0);

console.log(playerTotalScore);
