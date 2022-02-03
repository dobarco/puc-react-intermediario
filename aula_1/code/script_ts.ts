// console.log('Aplicação PUC - Intermediário');


// // Realiza a soma de dois números e retorna o resultado.
// function soma(x: number, y: number) {
//     return x + y;
// }

// let numero1 = 5;
// let numero2 = 4;

// const resultado = soma(numero1, numero2);

// console.log(resultado);

// let nomeAlunos: string[];

// nomeAlunos = [ 'Rafael', 'Matheus', 'Mariana']

type Aluno = { nome: string, idade: number }

// let aluno: {nome: string, idade: number};

// let alunos: Aluno[];


// let resultado : Aluno = cadastrarAluno({nome: 'Rafael', idade: 25})

// // Responsável por realizar o cadastro de novos alunos
// function cadastrarAluno (a: Aluno) {
//     return a;
// }

function addItemToArray<T>(array: T[], newItem: T){
    let newArray = [newItem, ...array];
    return newArray;
}

let initialArray = [5, 3, 2];

const newInitialArray = addItemToArray(initialArray, 9);

newInitialArray[0].split('');
