//Visualizar o conteúdo do document
//console.log(document);

//obter o title da pagina
console.log(document.title);

//Acessar o elemento pelo ID
const guest = document.getElementById("guest-2");
console.log(guest);

//mostra as propriedades do objeto
console.dir(guest);

//Acessar elemento com class (SELETOR class)
const guestsByClass = document.getElementsByClassName("guest");
console.dir(guestsByClass);

//Exibir o primeiro elemento da lista
console.log(guestsByClass.item(0));
console.log(guestsByClass[1]);

//Selecionar lista elementos pela tag
const guetsTag = document.getElementsByTagName("li");
console.log(guetsTag);

//Acessa o elemento pelo selector ID
const guestSelectorID = document.querySelector("#guest-2");
console.log(guest);

//Acessar o elemento pelo selector class
//const guests = document.querySelectorAll(".guest")

//Retorna todos os elementos encontrados pelo query
const guestSelectorAll = document.querySelectorAll(".guest");
console.log(guestSelectorAll);

const guestspan = document.querySelector("#guest-1 span");

//Retorna o conteúdo como texto
//console.log(guestspan.textContent);

//guestspan.textContent = "João";

console.log(guest.textContent); //retorna o conteúdo visível e oculto
console.log(guest.innerText); //retorna somente o conteúdo visível
console.log(guest.innerHTML); //Retorna o Html como texto

const input = document.querySelector("#name");

//adicionar a class
input.classList.add("input-error");

//Remover a class
input.classList.remove("input-error");

//Se nao tiver adiciona. se tiver remove
input.classList.toggle("input-error");

const button = document.querySelector("button");

//Modificar as propriedades css do elemento
button.style.backgroundColor = "red";

const guests = document.querySelector("ul");

const newGuest = document.createElement("li");
newGuest.classList.add("guest");
const guestName = document.createElement("span");

guestName.textContent = "João";

const guestSurname = document.createElement("span");
guestSurname.textContent = "Fernandes";

//Adicionar após o último filho
//newGuest.append(guestName, guestSurname);

//adiona antes do primeiro filho
//newGuest.prepend(guestSurname)

//É mais simples que o append e aceita apenas um argumento
newGuest.appendChild(guestName);

guests.append(newGuest);

console.log(newGuest);

const inputSelector = document.querySelector("input");

//adicionar um Atributo
//inputSelector.setAttribute("disabled", true);
//input.setAttribute("type", "file");

//Remover um atributo
input.removeAttribute("id");

window.addEventListener("load", () => {
  console.log("A página foi carregada!");
});

addEventListener("click", (event) => {
  event.preventDefault();

  //retorna todas as informaçoes do evento
  //console.log(event)

  //retorna o elemento clicado
  console.log(event.target);

  //retorna o textContent do elemento clicado
  console.log(event.target.textContent);
});
