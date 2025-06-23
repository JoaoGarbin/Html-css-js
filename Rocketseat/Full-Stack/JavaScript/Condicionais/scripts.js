//operador condicional ternário

let age = 21;
console.log(
  age >= 18 //condição
    ? "Você pode dirigir." //true
    : "Você não pode dirigir."
); //false

//Exemplo de falsy

console.log(false ? "Verdadeiro" : "False");
console.log(0 ? "Verdadeiro" : "False");
console.log(-0 ? "Verdadeiro" : "False");
console.log("" ? "Verdadeiro" : "False");
console.log(null ? "Verdadeiro" : "False");
console.log(undefined ? "Verdadeiro" : "False");
console.log(NaN ? "Verdadeiro" : "False");

//exemplo de truthy

console.log(true ? "Verdadeiro" : "False");
console.log({} ? "Verdadeiro" : "False");
console.log([] ? "Verdadeiro" : "False");
console.log(1 ? "Verdadeiro" : "False");
console.log(false ? "Verdadeiro" : "False");
console.log(3.23 ? "Verdadeiro" : "False");
console.log("0" ? "Verdadeiro" : "False");
console.log(" " ? "Verdadeiro" : "False");
console.log("Joao" ? "Verdadeiro" : "False");
console.log("false" ? "Verdadeiro" : "False");
console.log(-1 ? "Verdadeiro" : "False");
console.log(Infinity ? "Verdadeiro" : "False");
console.log(-Infinity ? "Verdadeiro" : "False");

//If (SE)

let hour = 11;
if (hour <= 12) {
  console.log("Bom dia!");
}

//if else

let ages = 23;

if (age < 18) {
  console.log("Você não pode dirigir");
} else {
  console.log("Você pode dirigir");
}

//else if

let hours = 19;

if (hours <= 12) {
  console.log("Bom dia");
} else if (hours > 18 && hours <= 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

//switch

let option = 1;

switch (option) {
  case 1:
    console.log("Consultar pedido");
    console.log("Aguarde...");
    break;
  case 2:
    console.log("Falar com atendente");
    break;
  case 3:
    console.log("Cancelar pedido");
    break;
  default:
    console.log("Opção inválida!");
}

//Try catch finally

try {
  //tenta executar algo
  console.log(result);
} catch (error) {
  // captura o erro pra tratar

  //console.log("Não foi possivel executar seu pedido, tente novamente mais tarde!")

  console.log(error);
} finally {
  console.log("Fim");
}
