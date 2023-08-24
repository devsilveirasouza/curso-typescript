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
// function mostrarIdade(idade: string | number) {
//   if (typeof idade === "string") {
//     console.log("Minha idade é: " + idade);
//   } else {
//     console.log(idade);
//   }
// }
// mostrarIdade(90);
// mostrarIdade("90");

// Type e Interface: Como usar e diferenças
// Simplificar e organizar o código
// --- Definindo o type --- //
// type NomeCompleto = string;
// type Idade = string | number;

// let nome: NomeCompleto = "Wellington";
// let idade: Idade = 90;

// function mostrarIdade(i: Idade): Idade {
//   return i;
// }
// // --- Type
// // Não pode ser alterada a estrutura
// type User = {
//   nome: string;
//   idade: number;
// };

// function resumo(usuario: User) {
//   // function resumo(usuario: {nome: string, idade: number} ) {
//   return `Olá ${usuario.nome}, você têm ${usuario.idade} anos.`;
// }

// resumo({
//   nome: "Wellington",
//   idade: 40,
// });

// // --- Interface
// // Pode ter a estrutura alterada
// interface Carro {
//   modelo: string;
//   portas: number;
// }

// interface Carro {
//   marca: string;
// }

// function descricao(carro: Carro) {
//   // function resumo(carro: {modelo: string, portas: number} ) {
//   return `Olá ${carro.modelo}, você têm ${carro.portas} anos.`;
// }

// descricao({
//   modelo: "GOL",
//   portas: 4,
//   marca: "VW"
// });

// -- Type Assertions -- //
// let idadeField = document.getElementById('idade') as HTMLInputElement;
// ...
// console.log( idadeField.value );

// -- Types literais -- //
// let nome: "Ton" = "Ton";

// nome = 'pedro';
// function mostrarTexto(
//   texto: string,
//   alinhamento: "left" | "right" | "center"
// ) {
//     return `<div style="text-align: ${alinhamento}">${texto}</div>`;
// }

// mostrarTexto("Ton", "left");
// mostrarTexto("Ton", "right");
// mostrarTexto("Ton", "blabla");// <- literal não aceita

// Exemplo 02
// function temNome(nome: string): true | false {
//     if (nome !== '') {
//         return true;
//     } else {
//         return false;
//     }
// }

// Exemplo 03
// let n1: number = 10;
// let n2: number = 5;

// type VerdadeiroOuFalso = true | false;

// function maior(n1: number, n2: number): true | false {
//     if (n1 > n2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Exemplo 04
// type Opcoes = {
//     width: number,
//     height: number
// }

// function configurar( props: Opcoes | 'auto' ) {

// }

// configurar({width: 100, height: 200});
// configurar('auto');
// configurar('automatico');// <- não funciona

// --- Inferência literal --- //
// --- Exemplo 01 --- //
// function fazerOutraRequiscao(url: string, method: "GET" | "POST") {
//   // ...
// }
// type RequestDetails = {
//   url: string;
//   method: "GET" | "POST";
// };
// let req: RequestDetails = {
//   url: "https://google.com.br",
//   method: "GET",
// };
// fazerOutraRequiscao(req.url, req.method);

// // --- Exemplo 02 --- //
// function fazerRequiscao(url: string, method: "GET" | "POST") {
//   // ...
// }
// type Methods = "GET" | "POST";

// let url = "https://google.com.br";
// let method: Methods = "GET";

// fazerRequiscao(url, method);

// -- Type para funções -- //
// Exemplo 01
// type MathFunction = (n1: number, n2: number) => number;

// const somar: MathFunction = (n1, n2) => {
//   return n1 + n2;
// }

// const subtrair: MathFunction = (n1, n2) => {
//   return n1 - n2;
// }

// const multiplicar: MathFunction = (n1, n2) => {
//   return n1 * n2;
// }

// const dividir: MathFunction = (n1, n2) => {
//   return n1 / n2;
// }

// somar(51, 65);
// subtrair(90, 30);
// multiplicar(90, 30);
// dividir(90, 30);

// Type void
// Exemplo 01
// function removerElemento(el: HTMLElement): void {
//   // processo de remoção do elemento
//   el.remove();
// }
// removerElemento( document.getElementById('teste') );

// Exemplo 02
type QualquerFuncao = () => void;// Não espera nada de retorno

const algo: QualquerFuncao = () => {
  return "bla bla";
}

// Exemplo 03
let retorno = algo();

const blabla = (): void => { // Retorno é void
  // ... nada
}