//Variavel sem valor
var user;
console.log(user);
//Variavel com valor
var email = "garbinjoaovitor@gmail.com";
console.log(email);

//mudando valor da variavel
email = "pedro@gmail.com";
console.log(email);

//JavaScript é case-sensitive

//let cria variavel mais não deixa criar outra com o mesmo nome
let user;

//Constante e definada por const e utilizado para valores fixos exemplo: pi = 3.14 e nao pode ser alterado
const number = 42;
console.log(number);

//escopo global
var email = "marco@email.com";
{
  //escopo de bloco
  console.log(email);
}
//let respeita o escopo que foi criado
{
  let name = "joao";
}
//console.log(name);

//Tipos Primitivos string number boolean null undefined

//typeod pra mostra o tipo de dado da variavel

//passar mais de um parametro
console.log(user, email, "teste");

// Concatenar texto
let message = "Olá, " + user + ". Você conectou com o e-mail " + email;

console.log(message);

//Template literals
console.log(`Olá, ${user}. Você conecou com o e-mail ${email}`);
