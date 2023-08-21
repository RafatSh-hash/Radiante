const cards = document.querySelectorAll("card");
const selectedTitlesList = document.getElementById("selectedTitlesList");
const totalPriceElement = document.getElementById("totalPrice");
const applyButton = document.getElementById("applyCoupon");
const makePurchaseButton = document.getElementById("makePurchase");
const topsList = document.getElementById("topsList");

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

const apiUrl = "https://dummyjson.com/products/category/tops"; // Replace with your actual API URL
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const productData = data.products;
    console.log(productData);
    productData.forEach((product) => {
      console.log(product);
      const listItem = document.createElement("li");
      listItem.innerHTML = `<div class="uk-panel">
                              <div class="p-4">
                                  <div class="relative image-container h-80 rounded-lg transition-all duration-500 hover:scale-105">
                                      <img src="${product.thumbnail}" alt="Image 1" class="w-full h-auto">

                                      <div class="overlay">
                                          <div class="overlay-content">
                                             
                                              <div>
                                                <button class="w-full">Add To Cart</button>
                                               </div>
                                          </div>
                              
                                      </div>
                                      <div class="overlay1">
                                          <div class="overlay-content1">
                                             <h1 class=" my-1 font-semibold">$${product.price}</h1>
                                          </div>
                                         
                                      </div>
                                      <div class="overlay2 p-4">
                                          <div class="overlay-content2 text-left">
                                             <p class="mt-5 text-md">${product.description}</p>
                                             <p>Stock Left : ${product.stock}</p>
                                             <div class="flex justify-center mt-8"> <img src="${product.images[0]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[1]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[2]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"></div>
                                          </div>
                                         
                                      </div>
                                       
                                  </div>
                                  <h4 class="uppercase text-center text-xl font-semibold mt-2" style="color: black;">${product.title}</h4>
                              </div> 
                            </div>`;
      topsList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
