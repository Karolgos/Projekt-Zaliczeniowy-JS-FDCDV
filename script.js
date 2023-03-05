const $mainPage = document.getElementById("mainPage");
const $shoppingCartPage = document.getElementById("shoppingCart");
const $thankYouPage = document.getElementById("thankYouPage");
const $buyBtn = document.getElementsByClassName("buyBtn");
const $backBtn = document.getElementById("backBtn");
const $confirmBtn = document.getElementById("confirmBtn");
const $mainPageBtn = document.getElementById("mainPageBtn");

for (let i = 0; i < $buyBtn.length; i++) {
  $buyBtn[i].addEventListener("click", function () {
    $mainPage.style.display = "none";
    $shoppingCartPage.style.display = "flex";
  });
}

$backBtn.addEventListener("click", function () {
  $shoppingCartPage.style.display = "none";
  $mainPage.style.display = "block";
});

$confirmBtn.addEventListener("click", function () {
  $shoppingCartPage.style.display = "none";
  $thankYouPage.style.display = "block";
});

$mainPageBtn.addEventListener("click", function () {
  $thankYouPage.style.display = "none";
  $mainPage.style.display = "block";
});
