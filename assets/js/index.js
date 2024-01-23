const inputText = document.getElementById("input");
const botaoSubsCribe = document.querySelector(".btn");
const required = document.querySelector(".valid.ativo");
const containThanks = document.querySelector(".thank-you.mostrar");
const containt = document.querySelector(".card.hidden");
const email = document.getElementById("email-thanks");
const btnDismiss = document.querySelector(".dismiss");

botaoSubsCribe.addEventListener("click", (e) => {
  e.preventDefault();
  const valorDoInput = inputText.value;
  if (valorDoInput === "" || !emailValid(inputText.value)) {
    inputText.classList.add("required");
    required.classList.remove("ativo");
    required.classList.add("valid");
    return;
  }
  containt.classList.remove("hidden");
  containt.classList.add("card");

  containThanks.classList.remove("mostrar");
  containThanks.classList.add("thank-you");

  email.innerText = valorDoInput;
});

btnDismiss.addEventListener("click", () => {
  containThanks.classList.add("mostrar");
  containt.classList.add("hidden");
  inputText.classList.remove("required");
  required.classList.add("ativo");

  inputText.value = "";
});

function emailValid(email) {
  const emailRegex = new RegExp(/.+@[^@\s]+\.[a-zA-Z]{2,}/);
  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}
