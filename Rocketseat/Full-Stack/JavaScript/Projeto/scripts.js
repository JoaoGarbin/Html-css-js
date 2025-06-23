//cotação de moedas do dia
const USD = 5.75;
const EUR = 6.0;
const GBP = 7.15;

//Obtendo os elementos do formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

//Manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

//captando o evento submit do formularios
form.onsubmit = () => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

//Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    //Exibindo a cotação da moeda selecionanda
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    //calcula o total
    // let total = formatCurrencyBRL(total).replace("R$","")
    let total = String(amount * price).replace(".", ",");

    //verifica se o total é um numero
    if (isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter.");
    }

    //exibe o total
    result.textContent = `${total} Reais`;

    //Aplica a classe que exibe footer para mostrar o resultado
    footer.classList.add("show-result");
  } catch (error) {
    //Remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result");
    console.log(error);
    alert("Não foi possivel converter. Tente novamente!");
  }
}

//Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
  //Convert para número para utilizar o toLocaleString para formatar no padão BRL().
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
