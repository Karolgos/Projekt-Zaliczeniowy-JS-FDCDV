const $mainPage = document.getElementById("mainPage");
const $shoppingCartPage = document.getElementById("shoppingCart");
const $thankYouPage = document.getElementById("thankYouPage");

const $backBtn = document.getElementById("backBtn");
const $confirmBtn = document.getElementById("confirmBtn");
const $mainPageBtn = document.getElementById("mainPageBtn");

const $searchInput = document.getElementById("searchInput");
const $carName = document.getElementsByClassName("carName");
const $carNameSold = document.getElementsByClassName("carNameSold");
const $carItems = document.getElementsByClassName("carItem");
const $carItemsSold = document.getElementsByClassName("carItemSold");

const $buyBtns = document.getElementsByClassName("buyBtn");
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

const $errorMessages = document.getElementById("errorMessages");
const $tiresBonus = document.getElementById("tires");
const $warrantyBonus = document.getElementById("warranty");
const $paintJobBonus = document.getElementById("paintJob");
const $waxingBonus = document.getElementById("waxing");
const $upholsteryBonus = document.getElementById("upholstery");
const $suppliesBonus = document.getElementById("supplies");
const $windscreenWipersBonus = document.getElementById("windscreenWipers");

const $chosenCarName = document.getElementById("chosenCarName");
const $deliveryDate = document.getElementById("deliveryDateInput");
const $buyerName = document.getElementById("nameInputField");
const $deliveryAddressInput = document.getElementById("deliveryAddressInput");
const $emailInput = document.getElementById("emailInput");
const $cashInput = document.getElementById("cashInput");
const $leasingInput = document.getElementById("leasingInput");
const $cashLabel = document.getElementById("cashLabel");
const $leasingLabel = document.getElementById("leasingLabel");

const $chosenCarImg = document.getElementById("chosenCarImg");
const $deliveryDateSummary = document.getElementById("deliveryDateSummary");
const $paymentMethodSummary = document.getElementById("paymentMethodSummary");
const $carNameSummary = document.getElementById("carNameSummary");

let shoppingCartItems = [];
let orderTotal = 0;
const $orderTotal = document.getElementById("orderTotal");
const $orderTotalSummary = document.getElementById("orderTotalSummary");

const audiCar = {
  name: "Audi RS6 Avant",
  price: 249900,
  img: "./img/Rs6 Avant.jpg",
};

const peugeotCar = {
  name: "Peugeot 407",
  price: 18999,
  img: "./img/407.jpg",
};

const fordCar = {
  name: "Ford Focus Hatchback",
  price: 40959,
  img: "./img/Focus.jpg",
};

const fiatCar = {
  name: "Fiat 500",
  price: 30500,
  img: "./img/Fiat 500.jpg",
};

const miniCar = {
  name: "Mini Cooper",
  price: 38900,
  img: "./img/Mini Cooper.jpg",
};

const opelCar = {
  name: "Opel Astra",
  price: 30900,
  img: "./img/Opel Astra.jpg",
};

const citroenCar = {
  name: "Citroën 2CV",
  price: 94000,
  img: "./img/Citroen 2CV.jpg",
};

const mazdaCar = {
  name: "Mazda Rx-7",
  price: 120000,
  img: "./img/Mazda rx7.jpg",
};

const lotusCar = {
  name: "Lotus Elise 111R",
  price: 69900,
  img: "./img/Lotus Elise.jpg",
};

const lexusCar = {
  name: "Lexus ES",
  price: 199999,
  img: "./img/Lexus ES.jpg",
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

function search() {
  let filter = $searchInput.value.toUpperCase();

  for (i = 0; i < $carName.length; i++) {
    let txtValue = $carName[i].textContent || $carName[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue.length === 0) {
      $carItems[i].style.display = "grid";
    } else {
      $carItems[i].style.display = "none";
    }
  }

  for (i = 0; i < $carNameSold.length; i++) {
    let txtValue = $carNameSold[i].textContent || $carName[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue.length === 0) {
      $carItemsSold[i].style.display = "grid";
    } else {
      $carItemsSold[i].style.display = "none";
    }
  }
}

$searchInput.addEventListener("keyup", search);

$chooseAudiBtn.addEventListener("click", function () {
  shoppingCartItems.push(audiCar);
});

$choosePeugeotBtn.addEventListener("click", function () {
  shoppingCartItems.push(peugeotCar);
});

$chooseFordBtn.addEventListener("click", function () {
  shoppingCartItems.push(fordCar);
});

$chooseFiatBtn.addEventListener("click", function () {
  shoppingCartItems.push(fiatCar);
});

$chooseOpelBtn.addEventListener("click", function () {
  shoppingCartItems.push(opelCar);
});

$chooseCitroenBtn.addEventListener("click", function () {
  shoppingCartItems.push(citroenCar);
});

$chooseLotusBtn.addEventListener("click", function () {
  shoppingCartItems.push(lotusCar);
});

$chooseLexusBtn.addEventListener("click", function () {
  shoppingCartItems.push(lexusCar);
});

$tiresBonus.addEventListener("click", function () {
  localStorage.setItem("tiresChoice", $tiresBonus.checked);
  if ($tiresBonus.checked) {
    shoppingCartItems.push(tiresBonus);
    orderTotal += tiresBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  } else if ($tiresBonus.checked === false) {
    shoppingCartItems.pop(tiresBonus);
    orderTotal -= tiresBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  }
});

$warrantyBonus.addEventListener("click", function () {
  localStorage.setItem("warrantyChoice", $warrantyBonus.checked);
  if ($warrantyBonus.checked) {
    shoppingCartItems.push(warrantyBonus);
    orderTotal += warrantyBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  } else if ($warrantyBonus.checked === false) {
    shoppingCartItems.pop(warrantyBonus);
    orderTotal -= warrantyBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  }
});

$paintJobBonus.addEventListener("click", function () {
  localStorage.setItem("paintJobChoice", $paintJobBonus.checked);
  if ($paintJobBonus.checked) {
    shoppingCartItems.push(paintJobBonus);
    orderTotal += paintJobBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  } else if ($paintJobBonus.checked === false) {
    shoppingCartItems.pop(paintJobBonus);
    orderTotal -= paintJobBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  }
});

$waxingBonus.addEventListener("click", function () {
  localStorage.setItem("waxingChoice", $waxingBonus.checked);
  if ($waxingBonus.checked) {
    shoppingCartItems.push(waxingBonus);
    orderTotal += waxingBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  } else if ($waxingBonus.checked === false) {
    shoppingCartItems.pop(waxingBonus);
    orderTotal -= waxingBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  }
});

$upholsteryBonus.addEventListener("click", function () {
  localStorage.setItem("upholsteryChoice", $upholsteryBonus.checked);
  if ($upholsteryBonus.checked) {
    shoppingCartItems.push(upholsteryBonus);
    orderTotal += upholsteryBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  } else if ($upholsteryBonus.checked === false) {
    shoppingCartItems.pop(upholsteryBonus);
    orderTotal -= upholsteryBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  }
});

$suppliesBonus.addEventListener("click", function () {
  localStorage.setItem("suppliesChoice", $suppliesBonus.checked);
  if ($suppliesBonus.checked) {
    shoppingCartItems.push(cleaningSuppliesBonus);
    orderTotal += cleaningSuppliesBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  } else if ($suppliesBonus.checked === false) {
    shoppingCartItems.pop(cleaningSuppliesBonus);
    orderTotal -= cleaningSuppliesBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  }
});

$windscreenWipersBonus.addEventListener("click", function () {
  localStorage.setItem(
    "windscreenWipersChoice",
    $windscreenWipersBonus.checked
  );

  if ($windscreenWipersBonus.checked) {
    shoppingCartItems.push(windscreenWipersBonus);
    orderTotal += windscreenWipersBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  } else if ($windscreenWipersBonus.checked === false) {
    shoppingCartItems.pop(windscreenWipersBonus);
    orderTotal -= windscreenWipersBonus.price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  }
});

$backBtn.addEventListener("click", function () {
  $shoppingCartPage.style.display = "none";
  $mainPage.style.display = "block";
  shoppingCartItems = [];
  orderTotal = 0;
});

$buyerName.addEventListener("keyup", function () {
  localStorage.setItem("buyerName", $buyerName.value);
});

$emailInput.addEventListener("keyup", function () {
  localStorage.setItem("email", $emailInput.value);
});

$deliveryDate.addEventListener("change", function () {
  localStorage.setItem("deliveryDate", $deliveryDate.value);
});

$deliveryAddressInput.addEventListener("keyup", function () {
  localStorage.setItem("deliveryAddress", $deliveryAddressInput.value);
});

$cashInput.addEventListener("change", function () {
  localStorage.setItem("cashInput", $cashInput.checked);
  localStorage.setItem("leasingInput", ($leasingInput.checked = false));
});

$leasingInput.addEventListener("change", function () {
  localStorage.setItem("leasingInput", $leasingInput.checked);
  localStorage.setItem("cashInput", ($cashInput.checked = false));
});

function loadLocalStorage() {
  if (localStorage.length > 0) {
    $tiresBonus.checked = JSON.parse(localStorage.getItem("tiresChoice"));
    $warrantyBonus.checked = JSON.parse(localStorage.getItem("warrantyChoice"));
    $paintJobBonus.checked = JSON.parse(localStorage.getItem("paintJobChoice"));
    $waxingBonus.checked = JSON.parse(localStorage.getItem("waxingChoice"));
    $upholsteryBonus.checked = JSON.parse(
      localStorage.getItem("upholsteryChoice")
    );
    $suppliesBonus.checked = JSON.parse(localStorage.getItem("suppliesChoice"));
    $windscreenWipersBonus.checked = JSON.parse(
      localStorage.getItem("windscreenWipersChoice")
    );
    $buyerName.value = localStorage.getItem("buyerName");
    $emailInput.value = localStorage.getItem("email");
    $deliveryDate.value = localStorage.getItem("deliveryDate");
    $deliveryAddressInput.value = localStorage.getItem("deliveryAddress");
    $cashInput.checked = JSON.parse(localStorage.getItem("cashInput"));
    $leasingInput.checked = JSON.parse(localStorage.getItem("leasingInput"));
  }
}

function addCar() {
  $mainPage.style.display = "none";
  $shoppingCartPage.style.display = "block";
  loadLocalStorage();
  $chosenCarName.innerText = `Wybrane auto: ${shoppingCartItems[0].name}`;
  orderTotal += shoppingCartItems[0].price;
  $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  console.log(shoppingCartItems);
}

for (let i = 0; i < $buyBtns.length; i++) {
  $buyBtns[i].addEventListener("click", addCar);
}

function checkDate() {
  let input = $deliveryDate.value;
  let dateEntered = new Date(input);

  const date = new Date();
  date.setDate(date.getDate() + 13);

  if (dateEntered >= date) {
    console.log("Data poprawna");
    return true;
  } else {
    console.log("Data bledna");
    return false;
  }
}

function checkName() {
  let alphaExp = /^[a-z A-ZżŻźŹąĄęĘåÅäÄÖüÜðÐæÆþÞ]+$/;
  if (
    $buyerName.value.match(alphaExp) &&
    $buyerName.value.indexOf(" ") !== -1
  ) {
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
      firstName.length >= 3 &&
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
    $buyerName.value.length > 4 &&
    $deliveryAddressInput.value.length > 5 &&
    $emailInput.value.length > 3 &&
    $emailInput.value.indexOf(" ") !== -1 &&
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
    $chosenCarImg.setAttribute("src", shoppingCartItems[0].img);
    $orderTotalSummary.innerText = `Zapłacono ${orderTotal} PLN`;
    $deliveryDateSummary.innerText = `Termin dostawy: ${$deliveryDate.value}`;
    if ($leasingInput.checked) {
      $paymentMethodSummary.innerText = `Wybrana metoda płatności: Leasing`;
    } else if ($cashInput.checked) {
      $paymentMethodSummary.innerText = `Wybrana metoda płatności: Gotówka`;
    }
    $tiresBonus.checked = false;
    $warrantyBonus.checked = false;
    $paintJobBonus.checked = false;
    $waxingBonus.checked = false;
    $upholsteryBonus.checked = false;
    $suppliesBonus.checked = false;
    $windscreenWipersBonus.checked = false;
    $buyerName.value = null;
    $emailInput.value = null;
    $deliveryAddressInput.value = null;
    $deliveryDate.value = null;
    $leasingInput.checked = false;
    $cashInput.checked = false;
    shoppingCartItems = [];
    orderTotal = 0;
    localStorage.clear();
  }

  if (checkName() === false) {
    const nameError = document.createElement("p");
    nameError.innerText = `Proszę wprowadzić poprawne imię i nazwisko.`;
    nameError.setAttribute("class", "errorMessage");
    $errorMessages.appendChild(nameError);
    setTimeout(() => {
      nameError.style.cssText +=
        "visibility: hidden;opacity: 0;transition: visibility 0.5s, opacity 0.5s linear;";
    }, 4000);
    setTimeout(() => {
      $errorMessages.removeChild(nameError);
    }, 4600);
    $buyerName.setAttribute("class", "errorHihglight");
  } else if (checkName()) {
    $buyerName.setAttribute("class", "defaultInput");
  }

  if (checkDate() === false) {
    const dateError = document.createElement("p");
    dateError.innerText = `Data dostawy to minimum 14 dni.`;
    dateError.setAttribute("class", "errorMessage");
    $errorMessages.appendChild(dateError);
    $deliveryDate.setAttribute("class", "errorHihglight");
    setTimeout(() => {
      dateError.style.cssText +=
        "visibility: hidden;opacity: 0;transition: visibility 0.5s, opacity 0.5s linear;";
    }, 3750);
    setTimeout(() => {
      $errorMessages.removeChild(dateError);
    }, 4400);
  } else if (checkDate()) {
    $deliveryDate.setAttribute("class", "defaultInput");
  }

  if (isFilled() === false) {
    const emptyError = document.createElement("p");
    emptyError.innerText = `Pola są puste lub adres e-mail jest niepoprawny.`;
    emptyError.setAttribute("class", "errorMessage");
    $errorMessages.appendChild(emptyError);
    setTimeout(() => {
      emptyError.style.cssText +=
        "visibility: hidden;opacity: 0;transition: visibility 0.5s, opacity 0.5s linear;";
    }, 3750);
    setTimeout(() => {
      $errorMessages.removeChild(emptyError);
    }, 4400);
    $deliveryAddressInput.setAttribute("class", "errorHihglight");
    $emailInput.setAttribute("class", "errorHihglight");
    $cashLabel.setAttribute("class", "errorHihglightRadio");
    $leasingLabel.setAttribute("class", "errorHihglightRadio");
  } else if (isFilled()) {
    $deliveryAddressInput.setAttribute("class", "defaultInput");
    $emailInput.setAttribute("class", "defaultInput");
    $cashLabel.setAttribute("class", "customRadioLabel");
    $leasingLabel.setAttribute("class", "customRadioLabel");
  }
}

$confirmBtn.addEventListener("click", checkForm);

$mainPageBtn.addEventListener("click", function () {
  $thankYouPage.style.display = "none";
  $mainPage.style.display = "block";
});
