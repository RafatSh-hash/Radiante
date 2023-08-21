const cards = document.querySelectorAll("card");
const selectedTitlesList = document.getElementById("selectedTitlesList");
const totalPriceElement = document.getElementById("totalPrice");
const applyButton = document.getElementById("applyCoupon");
const makePurchaseButton = document.getElementById("makePurchase");

let totalPrice = 0;

function buttonTask() {
  if (totalPrice < 200) {
    applyButton.disabled = true;
  } else {
    applyButton.disabled = false;
  }

  if (totalPrice > 0) {
    makePurchaseButton.disabled = false;
  } else {
    makePurchaseButton.disabled = true;
  }
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector(".title").textContent;
    const listItem = document.createElement("li");
    listItem.textContent = title;
    selectedTitlesList.appendChild(listItem);
    const price = parseFloat(card.querySelector(".price").textContent);
    totalPrice += price;
    totalPriceElement.textContent = totalPrice.toFixed(2);
    buttonTask();
  });
});

applyButton.addEventListener("click", function () {
  const discountInput = document.getElementById("disCountInput");
  const discountInputValue = discountInput.value.toUpperCase();

  if (!(discountInputValue === "SELL200")) {
    window.alert("Please enter 'SELL200' for the discount");
  } else {
    const discount = totalPrice * 0.2;
    const finalTotal = totalPrice - discount;
    document.getElementById("discountTotal").innerText = discount.toFixed(2);
    document.getElementById("finalTotal").innerText = finalTotal.toFixed(2);
    applyButton.classList.add("falling");
    setTimeout(function () {
      applyButton.classList.remove("falling");
      applyButton.classList.add("returning");
    }, 500);
    setTimeout(function () {
      applyButton.classList.remove("returning");
      discountInput.value = "";
    }, 2000);
  }

  buttonTask();
});

buttonTask();

document.getElementById("makePurchase").addEventListener("click", function () {
  document.getElementById("modalContainer").classList.remove("hidden");
});

// Close the modal
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modalContainer").classList.add("hidden");
});
