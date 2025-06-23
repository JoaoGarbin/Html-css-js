function message() {
  console.log("Olá. E bom ter você aqui");
}

message();

//passando paramentro username
function messageTwo(username) {
  console.log("Olá", username);
}

//passando argumentos
messageTwo("Rodrigo");
messageTwo("João");

function sum(a = 0, b = 0) {
  let result = a + b;
  console.log(result);
  return result;
}

let resultadofunction = sum(10, 20);

//da pra atribuir valores padrão

//Comentario de documentação em javaScript

/**
 * Authenticates the user
 *
 * @param {string} email user email
 * @param {string} password more than 6 caracters
 * @returns {number} user id
 */

function signIn(email, password) {
  //fluxo de autentcação do usuario
  return 7;
}
signIn("joaogarbin@gmail.com", "123456789");

// Função Anônimo (função que nao possui nome)

const showMessage1 = function () {
  return "Olá, João";
};

console.log(showMessage1());

const showMessage2 = function (name) {
  return "Olá" + name;
};

console.log(showMessage2("João"));

// Arrow Function

const showMessage3 = () => {
  return "Olá, João";
};

console.log(showMessage1());

const showMessage4 = (name) => {
  return "Olá" + name;
};

console.log(showMessage2("João"));

//Callback function: é uma função passada para outra função com um argumento.

function execute(taskName, callBack) {
  console.log("Executando a tarefa: ", taskName);
  callback();
}

function callBack() {
  console.log("Tarefa finalizada");
}

//passando para a função
execute("Download do arquivo...", callBack());

//Função de callBack com uma função anônima.
execute("Upload do arquivo...", function () {
  console.log("Função de callBack com uma função anônima.");
});

//Utilizando Arrow Function
execute("Excluindo arquivo...", () => {
  console.log("Arquivo Excluido");
});
