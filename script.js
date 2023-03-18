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

const $accessoryCheck = document.getElementsByClassName("accessoryItem");
const $errorMessages = document.getElementById("errorMessages");
const $tiresBonus = document.getElementById("tires");
const $warrantyBonus = document.getElementById("warranty");
const $paintJobBonus = document.getElementById("paintJob");
const $waxingBonus = document.getElementById("waxing");
const $upholsteryBonus = document.getElementById("upholstery");
const $suppliesBonus = document.getElementById("cleaningSupplies");
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

const cars = [
  (audiCar = {
    name: "Audi RS6 Avant",
    price: 249900,
    img: "./img/Rs6 Avant.jpg",
  }),
  (peugeotCar = {
    name: "Peugeot 407",
    price: 18999,
    img: "./img/407.jpg",
  }),
  (fordCar = {
    name: "Ford Focus Hatchback",
    price: 40959,
    img: "./img/Focus.jpg",
  }),
  (fiatCar = {
    name: "Fiat 500",
    price: 30500,
    img: "./img/Fiat 500.jpg",
  }),
  (miniCar = {
    name: "Mini Cooper",
    price: 38900,
    img: "./img/Mini Cooper.jpg",
  }),
  (opelCar = {
    name: "Opel Astra",
    price: 30900,
    img: "./img/Opel Astra.jpg",
  }),
  (citroenCar = {
    name: "Citroën 2CV",
    price: 94000,
    img: "./img/Citroen 2CV.jpg",
  }),
  (mazdaCar = {
    name: "Mazda Rx-7",
    price: 120000,
    img: "./img/Mazda rx7.jpg",
  }),
  (lotusCar = {
    name: "Lotus Elise 111R",
    price: 69900,
    img: "./img/Lotus Elise.jpg",
  }),
  (lexusCar = {
    name: "Lexus ES",
    price: 199999,
    img: "./img/Lexus ES.jpg",
  }),
];

const accessories = [
  (tiresBonus = {
    name: "Opony zimowe",
    price: 800,
  }),
  (warrantyBonus = {
    name: "Dodatkowy rok gwarancji",
    price: 1000,
  }),
  (paintJobBonus = {
    name: "Lakierowanie auta",
    price: 6000,
  }),
  (waxingBonus = {
    name: "Woskowanie i usuwanie rys",
    price: 250,
  }),
  (upholsteryBonus = {
    name: "Wymiana tapicerki",
    price: 7500,
  }),
  (cleaningSuppliesBonus = {
    name: "Środki czystości AutoKar",
    price: 100,
  }),
  (windscreenWipersBonus = {
    name: "Wycieraczki AutoKar",
    price: 75,
  }),
];

function search() {
  let filter = $searchInput.value.toUpperCase();

  for (let i = 0; i < $carName.length; i++) {
    let txtValue = $carName[i].textContent || $carName[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue.length === 0) {
      $carItems[i].style.display = "grid";
    } else {
      $carItems[i].style.display = "none";
    }
  }
}

$searchInput.addEventListener("keyup", search);

function loadLocalStorage() {
  if (localStorage.length > 0) {
    $buyerName.value = localStorage.getItem("buyerName");
    $emailInput.value = localStorage.getItem("email");
    $deliveryDate.value = localStorage.getItem("deliveryDate");
    $deliveryAddressInput.value = localStorage.getItem("deliveryAddress");
    $cashInput.checked = JSON.parse(localStorage.getItem("cashInput"));
    $leasingInput.checked = JSON.parse(localStorage.getItem("leasingInput"));
  }
}

for (let i = 0; i < $buyBtns.length; i++) {
  $buyBtns[i].addEventListener("click", (e) => {
    const chosenCar = e.target.dataset.carmodel;

    if (chosenCar === "audiRS6") {
      shoppingCartItems.push(audiCar);
    } else if (chosenCar === "peugeot407") {
      shoppingCartItems.push(peugeotCar);
    } else if (chosenCar === "fordFocus") {
      shoppingCartItems.push(fordCar);
    } else if (chosenCar === "fiat500") {
      shoppingCartItems.push(fiatCar);
    } else if (chosenCar === "opelAstra") {
      shoppingCartItems.push(opelCar);
    } else if (chosenCar === "citroen2CV") {
      shoppingCartItems.push(citroenCar);
    } else if (chosenCar === "lotusElise") {
      shoppingCartItems.push(lotusCar);
    } else if (chosenCar === "lexusES") {
      shoppingCartItems.push(lexusCar);
    }
    console.log(shoppingCartItems);

    $mainPage.style.display = "none";
    $shoppingCartPage.style.display = "block";
    $chosenCarName.innerText = `Wybrane auto: ${shoppingCartItems[0].name}`;
    orderTotal += shoppingCartItems[0].price;
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
    loadLocalStorage();
  });
}

for (let i = 0; i < $accessoryCheck.length; i++) {
  $accessoryCheck[i].addEventListener("click", (e) => {
    let chosenAccessory = e.target.dataset.accessoryname;
    let accessoryPrice = e.target.dataset.accessoryprice;
    let accessoryChecked = e.target.checked;

    if (accessoryChecked) {
      orderTotal += Number(accessoryPrice);
      if (chosenAccessory === "tires") {
        shoppingCartItems.push(tiresBonus);
      } else if (chosenAccessory === "warranty") {
        shoppingCartItems.push(warrantyBonus);
      } else if (chosenAccessory === "paintJob") {
        shoppingCartItems.push(paintJobBonus);
      } else if (chosenAccessory === "waxing") {
        shoppingCartItems.push(waxingBonus);
      } else if (chosenAccessory === "upholstery") {
        shoppingCartItems.push(upholsteryBonus);
      } else if (chosenAccessory === "cleaningSupplies") {
        shoppingCartItems.push(cleaningSuppliesBonus);
      } else if (chosenAccessory === "windscreenWipers") {
        shoppingCartItems.push(windscreenWipersBonus);
      }
    } else {
      orderTotal -= Number(accessoryPrice);
      if (chosenAccessory === "tires") {
        shoppingCartItems.pop(tiresBonus);
      } else if (chosenAccessory === "warranty") {
        shoppingCartItems.pop(warrantyBonus);
      } else if (chosenAccessory === "paintJob") {
        shoppingCartItems.pop(paintJobBonus);
      } else if (chosenAccessory === "waxing") {
        shoppingCartItems.pop(waxingBonus);
      } else if (chosenAccessory === "upholstery") {
        shoppingCartItems.pop(upholsteryBonus);
      } else if (chosenAccessory === "cleaningSupplies") {
        shoppingCartItems.pop(cleaningSuppliesBonus);
      } else if (chosenAccessory === "windscreenWipers") {
        shoppingCartItems.pop(windscreenWipersBonus);
      }
    }
    console.log(shoppingCartItems);
    $orderTotal.innerText = `Kwota do zapłaty: ${orderTotal}`;
  });
}

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

function checkDate() {
  let input = $deliveryDate.value;
  let dateEntered = new Date(input);

  const date = new Date();
  date.setDate(date.getDate() + 13);

  if (dateEntered >= date) {
    return true;
  } else {
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
    $buyerName.value.length > 4 &&
    $deliveryAddressInput.value.length > 5 &&
    $emailInput.value.length > 3 &&
    $emailInput.value.indexOf("@") !== -1 &&
    ($leasingInput.checked || $cashInput.checked)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkForm() {
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
  }
}

$confirmBtn.addEventListener("click", checkForm);

$mainPageBtn.addEventListener("click", function () {
  $thankYouPage.style.display = "none";
  $mainPage.style.display = "block";
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
});
