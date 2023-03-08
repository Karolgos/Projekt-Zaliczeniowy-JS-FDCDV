const $mainPage = document.getElementById("mainPage");
const $shoppingCartPage = document.getElementById("shoppingCart");
const $thankYouPage = document.getElementById("thankYouPage");

const $buyBtns = document.getElementsByClassName("buyBtn");
const $backBtn = document.getElementById("backBtn");
const $confirmBtn = document.getElementById("confirmBtn");
const $mainPageBtn = document.getElementById("mainPageBtn");
const $deliveryDate = document.getElementById("deliveryDate");
const $buyerName = document.getElementById("nameInputField");
const $cashInput = document.getElementById("cashInput");
const $leasingInput = document.getElementById("leasingInput");
const $deliveryAddressInput = document.getElementById("deliveryAddressInput");

const $chooseAudiBtn = document.getElementById("chooseAudiBtn");
const $choosePeugeotBtn = document.getElementById("choosePeugeotBtn");
const $chooseFordBtn = document.getElementById("chooseFordBtn");
const $chooseFiatBtn = document.getElementById("chooseFiatBtn");
const $chooseMiniBtn = document.getElementById("chooseMiniBtn");
const $chooseOpelBtn = document.getElementById("chooseOpelBtn");
const $chooseCitroenBtn = document.getElementById("chooseCitroenBtn");
const $chooseMazdaBtn = document.getElementById("chooseMazdaBtn");
const $chooseLotusBtn = document.getElementById("chooseLotusBtn");
const $chooseLexusBtn = document.getElementById("chooseLexusBtn");

let shoppingCartItems = [];
let orderTotal = 0;
let $orderTotalElement = document.getElementById("orderTotal");

const audiCar = {
  name: "Audi RS6 Avant",
  price: 249900,
  img: document.getElementById("audiImg"),
};

const peugeotCar = {
  name: "Peugeot 407",
  price: 18999,
  img: document.getElementById("peugeotImg"),
};

const fordCar = {
  name: "Ford Focus Hatchback",
  price: 40959,
  img: document.getElementById("fordImg"),
};

const fiatCar = {
  name: "Fiat 500",
  price: 30500,
  img: document.getElementById("fiatImg"),
};

const miniCar = {
  name: "Mini Cooper",
  price: 38900,
  img: document.getElementById("miniImg"),
};

const opelCar = {
  name: "Opel Astra",
  price: 30900,
  img: document.getElementById("opelImg"),
};

const citroenCar = {
  name: "Citroën 2CV",
  price: 94000,
  img: document.getElementById("citroenImg"),
};

const mazdaCar = {
  name: "Mazda Rx-7",
  price: 120000,
  img: document.getElementById("mazdaImg"),
};

const lotusCar = {
  name: "Lotus Elise 111R",
  price: 69900,
  img: document.getElementById("lotusImg"),
};

const lexusCar = {
  name: "Lexus ES",
  price: 199999,
  img: document.getElementById("lexusImg"),
};

for (let i = 0; i < $buyBtns.length; i++) {
  $buyBtns[i].addEventListener("click", function () {
    $mainPage.style.display = "none";
    $shoppingCartPage.style.display = "block";
  });
}

$chooseAudiBtn.addEventListener("click", function () {
  shoppingCartItems.push(audiCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + audiCar.name;
  orderTotal += audiCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$choosePeugeotBtn.addEventListener("click", function () {
  shoppingCartItems.push(peugeotCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + peugeotCar.name;
  orderTotal += peugeotCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseFordBtn.addEventListener("click", function () {
  shoppingCartItems.push(fordCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + fordCar.name;
  orderTotal += fordCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseFiatBtn.addEventListener("click", function () {
  shoppingCartItems.push(fiatCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + fiatCar.name;
  orderTotal += fiatCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseOpelBtn.addEventListener("click", function () {
  shoppingCartItems.push(opelCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + opelCar.name;
  orderTotal += opelCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseCitroenBtn.addEventListener("click", function () {
  shoppingCartItems.push(citroenCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + citroenCar.name;
  orderTotal += citroenCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseLotusBtn.addEventListener("click", function () {
  shoppingCartItems.push(lotusCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + lotusCar.name;
  orderTotal += lotusCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseLexusBtn.addEventListener("click", function () {
  shoppingCartItems.push(lexusCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + lexusCar.name;
  orderTotal += lexusCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

function addAccessoryToCart(item) {
  shoppingCartItems.push(item);
  orderTotal += item.price;
}

$backBtn.addEventListener("click", function () {
  $shoppingCartPage.style.display = "none";
  $mainPage.style.display = "block";
  shoppingCartItems = [];
  orderTotal = 0;
});

function checkDate() {
  let input = $deliveryDate.value;
  let dateEntered = new Date(input);
  let chosenDay = Number(dateEntered.getDate());
  let chosenMonth = Number(dateEntered.getMonth() + 1);
  let chosenYear = Number(dateEntered.getFullYear());
  const date = new Date();
  let minDay = Number(date.getDate() + 14);
  let month = Number(date.getMonth() + 1);
  let year = Number(date.getFullYear());

  if (chosenDay >= minDay && chosenMonth >= month && chosenYear >= year) {
    console.log("Data poprawna");
    return true;
  } else {
    console.log("Data bledna");
    return false;
  }
}

function checkName() {
  if ($buyerName.value.indexOf(" ") !== -1) {
    let buyerName = $buyerName.value;
    let firstName =
      buyerName[0].toUpperCase() +
      buyerName.slice(1, buyerName.indexOf(" ")) +
      " ";
    const lastName =
      buyerName[buyerName.indexOf(" ") + 1].toUpperCase() +
      buyerName.slice(buyerName.indexOf(" ") + 2, buyerName.length);
    $buyerName.value = firstName + lastName;
    if (
      $buyerName.value.indexOf(" ") !== -1 &&
      firstName.length >= 2 &&
      lastName.length >= 2
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function isFilled() {
  if (
    $buyerName.value.length !== 0 &&
    $deliveryAddressInput.value.length !== 0 &&
    ($leasingInput.checked || $cashInput.checked)
  ) {
    console.log("pola wypelnione");
    return true;
  } else {
    return false;
  }
}

function checkForm() {
  if (checkDate() && checkName() && isFilled()) {
    $shoppingCartPage.style.display = "none";
    $thankYouPage.style.display = "block";
  } else if (checkName() === false) {
    console.log("display a name error");
  } else if (checkDate() === false) {
    console.log("display a date error");
  } else if (isFilled() === false) {
    console.log("Sa puste pola w formularzu");
  }
}

$confirmBtn.addEventListener("click", checkForm);

$mainPageBtn.addEventListener("click", function () {
  $thankYouPage.style.display = "none";
  $mainPage.style.display = "block";
  $buyerName.value = null;
  $deliveryAddressInput.value = null;
  $deliveryDate.value = null;
  $leasingInput.checked = false;
  $cashInput.checked = false;
  shoppingCartItems = [];
  orderTotal = 0;
});
