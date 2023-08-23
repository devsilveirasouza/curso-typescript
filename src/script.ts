// DECLARANDO ARRAYS //
// let nomes: string[] = ['Well', 'Ton', 'Brenda', 'Jana'];

// let idades: number[] = [25, 35, 24, 15];

// let numeros: Array<number> = [15, 23, 90, 11];
// // INSERIR DADOS NO ARRAY
// nomes.push('Souza');

// Type any = qualquer tipo //
// let nomes: string[] = ['Pedro', 'Maria', 'Cristina', 'Luana'];
// let nomes: any = ["Pedro", "Maria", "Cristina", "Luana"];
// nomes.push(556);

// let coisas: any = ['Paulo', 59, 'Mary', true];
// coisas.push(759);

// Usando types no retorno de uma função //
// function firstLetterUpperCase(name: string): string {
//     let firstLetter = name.charAt(0).toUpperCase();
//     return firstLetter+name.substring(1);
// }
// let nome: string = firstLetterUpperCase('wellington');

// function somar(n1: number, n2: number):number {
//     return n1 + n2;
// }
// let alguma = somar(90, 35);

// function somar1(n1: number, n2: number) {
//     return `${n1 + n2}`;
// }
// let outra = somar(45, 72);

// Contextual Typing em funções anônimas //
// let names = ['Maria', 'Lucia', 'Gilson', 'Pedro', 90];
// // função anônima
// names.forEach(function(nome){
//     if (typeof nome ==='string') {
//     console.log(nome.toUpperCase());
//     } else {
//         console.log(nome)
//     }
// });

// Types em objetos //
// Parte 2 -
// Propriedades Opcionais
// function resumo(usuario: {nome: string, idade?: number}) { // idade? => não obrigatório
//     if (usuario.idade !== undefined) {
//         return `Olá ${usuario.nome}, tudo bem? Você têm ${usuario.idade} anos`;
//     } else {
//         return `Olá ${usuario.nome}, tudo bem?`;
//     }

// }
// // Implementação da função
// let u = {
//     nome: 'Wellington'
// };
// resumo(u);

// Union Types (múltiplos types) //
// let idade: string | number = 90;
function mostrarIdade(idade: string | number) {
  if (typeof idade === "string") {
    console.log("Minha idade é: " + idade);
  } else {
    console.log(idade);
  }
}

mostrarIdade(90);
mostrarIdade("90");
