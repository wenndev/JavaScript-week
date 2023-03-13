/*
    Quando voce deve usar o reduce:

    Quando baseado no array original, voce precisa "reduzir"
    o array á um valor.
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