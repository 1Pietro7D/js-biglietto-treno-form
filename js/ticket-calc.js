/*let input;
let distanza;
let età;
let prezzo;

const prezzo_km = 0.21;
const sconto_20 = 0.8;
const sconto_40 = 0.6;

while (isNaN(distanza)) {
  input = prompt("quanti kilometri devi fare?");
  distanza = parseInt(input);
}

while (isNaN(età)) {
  input = prompt("quanti anni hai?");
  età = parseInt(input);
}
if (età <= 0 || età >= 100) {
  prezzo = 0;
} else if (età <= 18) {
  prezzo = distanza * prezzo_km * sconto_20;
} else if (età >= 65) {
  prezzo = distanza * prezzo_km * sconto_40;
} else {
  prezzo = distanza * prezzo_km;
}

alert(
  "Il costo del tuo biglietto è di " +
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(prezzo)
);*/

console.log("js ok");

const annul = document.getElementById("annul");
const submit = document.getElementById("submit");

const ticket = document.getElementById("ticket");

submit.addEventListener("click", function () {
  console.log("mi hai cliccato per il ticket");
  const age = document.getElementById("age").value;
  const distance = document.getElementById("distance").value;
  const username = document.getElementById("username").value;
  console.log(username);
  console.log(distance);
  console.log(age);

  ticket.classList.remove("d-none");
});

annul.addEventListener("click", function () {
  console.log("mi hai cliccato per annullare");

  ticket.classList.add("d-none");
});
