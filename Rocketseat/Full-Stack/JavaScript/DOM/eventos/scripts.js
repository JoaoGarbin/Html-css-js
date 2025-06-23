const ul = document.querySelector("ul");

//ul.addEventListener("scroll", (event) => {
//console.log(ul.scrollTop);
//});

ul.addEventListener("scroll", () => {
  if (ul.scrollTop > 302) {
    //console.log("Fim da Lista");

    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
/*
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Clicou!");
});
*/
const form = document.querySelector("form");

//nao mostra pq tem outro onsubmit depois
form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você fez submit ao formulario #1");
};
//mostra
form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você fez submit ao formulario #2");
};
//mostra mesmo tendo outro a frente igual
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você fez submit ao formulario #3");
});
//mostra
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você fez submit ao formulario #4");
});

const input = document.querySelector("input");

//keydown - quando uma tecla é presionada (captura tudo, incluido CTRL, SHIFT, etc.)
/*input.addEventListener("keydown", (event) => {
  console.log(event.key);
});
*/

//keypress - quando uma tecla do tipo caractere é presionada (letras, números, pontos, etc)
//input.addEventListener("keypress", (event) => {
//  console.log(event.key);
//});

input.onchange = () => {
  console.log("O INPUT MUDOU!");
};

//input.addEventListener("input", () => {
//  console.log(input.value);
//});

input.addEventListener("input", () => {
  const value = input.value;

  const regex = /\D+/g;
  //Retorna o padrão encontrado na string
  //console.log(value.match(regex));

  const isValid = regex.test(value);
  console.log(isValid);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  const regex = /\D+/g;

  if (regex.test(value)) {
    console.log(value);
  } else {
    alert("Valor inválido. Digite corretamente!");
  }

  //const value = input.value.replace(regex, "");
  //console.log(value);
});

const input2 = document.querySelector("input");
const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();

  const value = input.value;
  const hasNumberRegex = /\d+/g;

  if (hasNumberRegex.test(value)) {
    alert("O texto contém número. Por favor, digite corretamente.");
  } else {
    alert("Enviado!");
  }
};
