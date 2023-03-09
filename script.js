const $mainPage = document.getElementById("mainPage");
const $shoppingCartPage = document.getElementById("shoppingCart");
const $thankYouPage = document.getElementById("thankYouPage");

const $buyBtns = document.getElementsByClassName("buyBtn");
const $backBtn = document.getElementById("backBtn");
const $confirmBtn = document.getElementById("confirmBtn");
const $mainPageBtn = document.getElementById("mainPageBtn");

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

const $tiresBonus = document.getElementById("tires");
const $warrantyBonus = document.getElementById("warranty");
const $paintJobBonus = document.getElementById("paintJob");
const $waxingBonus = document.getElementById("waxing");
const $upholsteryBonus = document.getElementById("upholstery");
const $suppliesBonus = document.getElementById("supplies");
const $windscreenWipersBonus = document.getElementById("windscreenWipers");

const $deliveryDate = document.getElementById("deliveryDate");
const $buyerName = document.getElementById("nameInputField");
const $cashInput = document.getElementById("cashInput");
const $leasingInput = document.getElementById("leasingInput");
const $deliveryAddressInput = document.getElementById("deliveryAddressInput");

const $chosenCarImg = document.getElementById("chosenCarImg");
const $deliveryDateSummary = document.getElementById("deliveryDateSummary");
const $paymentMethodSummary = document.getElementById("paymentMethodSummary");
const $carNameSummary = document.getElementById("carNameSummary");

let shoppingCartItems = [];
let orderTotal = 0;
let $orderTotalElement = document.getElementById("orderTotal");
const $orderTotalSummary = document.getElementById("orderTotalSummary");

const audiCar = {
  name: "Audi RS6 Avant",
  price: 249900,
};

const peugeotCar = {
  name: "Peugeot 407",
  price: 18999,
};

const fordCar = {
  name: "Ford Focus Hatchback",
  price: 40959,
};

const fiatCar = {
  name: "Fiat 500",
  price: 30500,
};

const miniCar = {
  name: "Mini Cooper",
  price: 38900,
};

const opelCar = {
  name: "Opel Astra",
  price: 30900,
};

const citroenCar = {
  name: "Citroën 2CV",
  price: 94000,
};

const mazdaCar = {
  name: "Mazda Rx-7",
  price: 120000,
};

const lotusCar = {
  name: "Lotus Elise 111R",
  price: 69900,
};

const lexusCar = {
  name: "Lexus ES",
  price: 199999,
};

const tiresBonus = {
  name: "Opony zimowe",
  price: 800,
};

const warrantyBonus = {
  name: "Dodatkowy rok gwarancji",
  price: 1000,
};

const paintJobBonus = {
  name: "Lakierowanie auta",
  price: 6000,
};

const waxingBonus = {
  name: "Woskowanie i usuwanie rys",
  price: 250,
};

const upholsteryBonus = {
  name: "Wymiana tapicerki",
  price: 7500,
};

const cleaningSuppliesBonus = {
  name: "Środki czystości AutoKar",
  price: 100,
};

const windscreenWipersBonus = {
  name: "Wycieraczki AutoKar",
  price: 75,
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
  $chosenCarImg.setAttribute("src", "img/Rs6 Avant.jpg");
  $chosenCarImg.setAttribute("alt", "Rs6 Avant");
  orderTotal += audiCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$choosePeugeotBtn.addEventListener("click", function () {
  shoppingCartItems.push(peugeotCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + peugeotCar.name;
  $chosenCarImg.setAttribute("src", "img/407.jpg");
  $chosenCarImg.setAttribute("alt", "Peugeot 407");
  orderTotal += peugeotCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseFordBtn.addEventListener("click", function () {
  shoppingCartItems.push(fordCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + fordCar.name;
  $chosenCarImg.setAttribute("src", "img/Focus.jpg");
  $chosenCarImg.setAttribute("alt", "Ford Focus Hatchback");
  orderTotal += fordCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseFiatBtn.addEventListener("click", function () {
  shoppingCartItems.push(fiatCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + fiatCar.name;
  $chosenCarImg.setAttribute("src", "img/Fiat 500.jpg");
  $chosenCarImg.setAttribute("alt", "Fiat 500");
  orderTotal += fiatCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseOpelBtn.addEventListener("click", function () {
  shoppingCartItems.push(opelCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + opelCar.name;
  $chosenCarImg.setAttribute("src", "img/Opel Astra.jpg");
  $chosenCarImg.setAttribute("alt", "Opel Astra");
  orderTotal += opelCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseCitroenBtn.addEventListener("click", function () {
  shoppingCartItems.push(citroenCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + citroenCar.name;
  $chosenCarImg.setAttribute("src", "img/Citroen 2CV.jpg");
  $chosenCarImg.setAttribute("alt", "Citroen 2CV");
  orderTotal += citroenCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseLotusBtn.addEventListener("click", function () {
  shoppingCartItems.push(lotusCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + lotusCar.name;
  $chosenCarImg.setAttribute("src", "img/Lotus Elise.jpg");
  $chosenCarImg.setAttribute("alt", "Lotus Elise 111R");
  orderTotal += lotusCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$chooseLexusBtn.addEventListener("click", function () {
  shoppingCartItems.push(lexusCar);
  document.getElementById("chosenCarName").innerText =
    "Wybrane auto: " + lexusCar.name;
  $chosenCarImg.setAttribute("src", "img/Lexus ES.jpg");
  $chosenCarImg.setAttribute("alt", "Lexus ES");
  orderTotal += lexusCar.price;
  $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  console.log(shoppingCartItems);
});

$tiresBonus.addEventListener("click", function () {
  if ($tiresBonus.checked) {
    shoppingCartItems.push(tiresBonus);
    orderTotal += tiresBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  } else if ($tiresBonus.checked === false) {
    shoppingCartItems.pop(tiresBonus);
    orderTotal -= tiresBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  }
});

$warrantyBonus.addEventListener("click", function () {
  if ($warrantyBonus.checked) {
    shoppingCartItems.push(warrantyBonus);
    orderTotal += warrantyBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  } else if ($warrantyBonus.checked === false) {
    shoppingCartItems.pop(warrantyBonus);
    orderTotal -= warrantyBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  }
});

$paintJobBonus.addEventListener("click", function () {
  if ($paintJobBonus.checked) {
    shoppingCartItems.push(paintJobBonus);
    orderTotal += paintJobBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  } else if ($paintJobBonus.checked === false) {
    shoppingCartItems.pop(paintJobBonus);
    orderTotal -= paintJobBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  }
});

$waxingBonus.addEventListener("click", function () {
  if ($waxingBonus.checked) {
    shoppingCartItems.push(waxingBonus);
    orderTotal += waxingBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  } else if ($waxingBonus.checked === false) {
    shoppingCartItems.pop(waxingBonus);
    orderTotal -= waxingBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  }
});

$upholsteryBonus.addEventListener("click", function () {
  if ($upholsteryBonus.checked) {
    shoppingCartItems.push(upholsteryBonus);
    orderTotal += upholsteryBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  } else if ($upholsteryBonus.checked === false) {
    shoppingCartItems.pop(upholsteryBonus);
    orderTotal -= upholsteryBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  }
});

$suppliesBonus.addEventListener("click", function () {
  if ($suppliesBonus.checked) {
    shoppingCartItems.push(cleaningSuppliesBonus);
    orderTotal += cleaningSuppliesBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  } else if ($suppliesBonus.checked === false) {
    shoppingCartItems.pop(cleaningSuppliesBonus);
    orderTotal -= cleaningSuppliesBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  }
});

$windscreenWipersBonus.addEventListener("click", function () {
  if ($windscreenWipersBonus.checked) {
    shoppingCartItems.push(windscreenWipersBonus);
    orderTotal += windscreenWipersBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  } else if ($windscreenWipersBonus.checked === false) {
    shoppingCartItems.pop(windscreenWipersBonus);
    orderTotal -= windscreenWipersBonus.price;
    $orderTotalElement.innerText = "Kwota do zapłaty: " + orderTotal;
  }
});

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
      console.log("Imie poprawne");
      return true;
    } else {
      console.log("Imie niepoprawne");
      return false;
    }
  } else {
    console.log("Imie niepoprawne");
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
    console.log("sa puste pola");
    return false;
  }
}

function checkForm() {
  if (checkDate() && checkName() && isFilled()) {
    $shoppingCartPage.style.display = "none";
    $thankYouPage.style.display = "block";
    $carNameSummary.innerText = `Dziękujemy za zakup ${shoppingCartItems[0].name}`;
    $orderTotalSummary.innerText = `Zapłacono ${orderTotal}PLN`;
    $deliveryDateSummary.innerText = `Termin dsotawy: ${$deliveryDate.value}`;
    if ($leasingInput.checked) {
      $paymentMethodSummary.innerText = `Wybrana metoda płatności: Leasing`;
    } else if ($cashInput.checked) {
      $paymentMethodSummary.innerText = `Wybrana metoda płatności: Gotówka`;
    }
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
