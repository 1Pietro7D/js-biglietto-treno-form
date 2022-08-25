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

// variable

const annul = document.getElementById("annul");
const submit = document.getElementById("submit");
const ticketHTML = document.getElementById("ticket");

// input element
submit.addEventListener("click", function () {
  // recupera l'età
  const age = document.getElementById("age").value;
  // recupera la distanza
  const distance = document.getElementById("distance").value;
  // recupera il nome
  const username = document.getElementById("username").value;
  // calcola il prezzo per la distanza
  const price = 0.21 * distance;

  // console log
  console.log("mi hai cliccato per il ticket");
  console.log(username);
  console.log(distance);
  console.log(age);
  console.log(price);
  ticketHTML.classList.remove("d-none");
  // /console log

  // applico lo sconto
  let discountPercent = 0;

  switch (age) {
    case "underage": {
      discountPercent = 20;
      break;
    }
    case "senior_citizen": {
      discountPercent = 40;
      break;
    }
    case "centenary": {
      discountPercent = 100;
      break;
    }
  }
  const discount = (price / 100) * discountPercent;
  const total_price = price - discount;
  // /applico lo sconto
  console.log(total_price);
});

annul.addEventListener("click", function () {
  console.log("mi hai cliccato per annullare");

  ticketHTML.classList.add("d-none");
});
