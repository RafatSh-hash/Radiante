

const selectedTitlesList = document.getElementById("selectedTitlesList");
const totalPriceElement = document.getElementById("totalPrice");
const applyButton = document.getElementById("applyCoupon");
const makePurchaseButton = document.getElementById("makePurchase");
const topsList = document.getElementById("topsList");
const womensDressesList = document.getElementById("womensDressesList");
const womenBagList = document.getElementById("womensBagList");
const womensJwellery = document.getElementById("womensJwlry");

const apiUrl = "https://dummyjson.com/products/category/tops"; // Replace with your actual API URL
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const productData = data.products;
    // console.log(productData);
    productData.forEach((product) => {
      // console.log(product);
      const listItem = document.createElement("li");
      listItem.classList.add("w-[85%]", "lg:w-[30%]");
      listItem.innerHTML = `<div class="uk-panel">
                              <div class="p-4 product-card">
                                  <div class="relative image-container h-80 rounded-lg transition-all duration-500 hover:scale-105">
                                      <img src="${product.thumbnail}" alt="Image 1" class="w-full h-full">

                                      <div class="overlay">
                                          <div class="overlay-content">
                                             
                                              <div>
                                                <button class="w-full toCart" type="button" onClick="addToCart(this)">Add To Cart</button>
                                               </div>
                                          </div>
                              
                                      </div>
                                      <div class="overlay1">
                                          <div class="overlay-content1">
                                             <h1 class=" my-1 font-semibold">TK- <span class="price">${product.price}</h1>
                                          </div>
                                         
                                      </div>
                                      <div class="overlay2 p-4">
                                          <div class="overlay-content2 text-left">
                                             <p class="mt-5 text-md">${product.description.slice(0, 90)}</p>
                                             <p>Stock Left : ${product.stock}</p>
                                             <div class="flex justify-center mt-8"> <img src="${product.images[0]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[1]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[2]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[3]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"></div>
                                          </div>
                                         
                                      </div>
                                       
                                  </div>
                                  <h4 class="uppercase text-center text-xl font-semibold mt-2 title" style="color: black;">${product.title}</h4>
                              </div> 
                            </div>`;
      topsList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

  const apiUrl1 = "https://dummyjson.com/products/category/womens-dresses"; // Replace with your actual API URL
fetch(apiUrl1)
  .then((response) => response.json())
  .then((data) => {
    const productData = data.products;
    // console.log(productData);
    productData.forEach((product) => {
      // console.log(product);
      const listItem1 = document.createElement("li");
      listItem1.classList.add("w-[85%]", "lg:w-[30%]");
      listItem1.innerHTML = `<div class="uk-panel ">
                              <div class="p-4 product-card">
                                  <div class="relative image-container h-80 rounded-lg transition-all duration-500 hover:scale-105">
                                      <img src="${product.thumbnail}" alt="Image 1" class="w-full  h-full">

                                      <div class="overlay">
                                          <div class="overlay-content">
                                             
                                              <div>
                                                <button class="w-full toCart" type="button" onClick="addToCart(this)">Add To Cart</button>
                                               </div>
                                          </div>
                              
                                      </div>
                                      <div class="overlay1">
                                          <div class="overlay-content1">
                                             <h1 class=" my-1 font-semibold">TK- <span class="price">${product.price}</h1>
                                          </div>
                                         
                                      </div>
                                      <div class="overlay2 p-4">
                                          <div class="overlay-content2 text-left">
                                             <p class="mt-5 text-md">${product.description.slice(0, 90)}</p>
                                             <p>Stock Left : ${product.stock}</p>
                                             <div class="flex justify-center mt-8"> <img src="${product.images[0]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[1]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[2]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[3]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"></div>
                                          </div>
                                         
                                      </div>
                                       
                                  </div>
                                  <h4 class="uppercase text-center text-xl font-semibold mt-2 title" style="color: black;">${product.title}</h4>
                              </div> 
                            </div>`;
      womensDressesList.appendChild(listItem1);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

   const apiUrl2 = "https://dummyjson.com/products/category/womens-bags"; // Replace with your actual API URL
fetch(apiUrl2)
  .then((response) => response.json())
  .then((data) => {
    const productData = data.products;
    // console.log(productData);
    productData.forEach((product) => {
      // console.log(product);
      const listItem2 = document.createElement("li");
      listItem2.classList.add("w-[85%]", "lg:w-[30%]");
      listItem2.innerHTML = `<div class="uk-panel">
                              <div class="p-4 product-card">
                                  <div class="relative image-container h-80 rounded-lg transition-all duration-500 hover:scale-105">
                                      <img src="${product.thumbnail}" alt="Image 1" class="w-full  h-full">

                                      <div class="overlay">
                                          <div class="overlay-content">
                                             
                                              <div>
                                                <button class="w-full toCart" type="button" onClick="addToCart(this)">Add To Cart</button>
                                               </div>
                                          </div>
                              
                                      </div>
                                      <div class="overlay1">
                                          <div class="overlay-content1">
                                             <h1 class=" my-1 font-semibold">TK- <span class="price">${product.price}</h1>
                                          </div>
                                         
                                      </div>
                                      <div class="overlay2 p-4">
                                          <div class="overlay-content2 text-left">
                                             <p class="mt-5 text-md">${product.description.slice(0, 90)}</p>
                                             <p>Stock Left : ${product.stock}</p>
                                             <div class="flex justify-center mt-8"> <img src="${product.images[0]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[1]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[2]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[3]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"></div>
                                          </div>
                                         
                                      </div>
                                       
                                  </div>
                                  <h4 class="uppercase text-center text-xl font-semibold mt-2 title" style="color: black;">${product.title}</h4>
                              </div> 
                            </div>`;
      womenBagList.appendChild(listItem2);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

   const apiUrl3 = "https://dummyjson.com/products/category/womens-jewellery"; // Replace with your actual API URL
fetch(apiUrl3)
  .then((response) => response.json())
  .then((data) => {
    const productData = data.products;
    // console.log(productData);
    productData.forEach((product) => {
      // console.log(product);
      const listItem3 = document.createElement("li");
      listItem3.classList.add("w-[85%]", "lg:w-[30%]");
      listItem3.innerHTML = `<div class="uk-panel">
                              <div class="p-4 product-card" >
                                  <div class="relative image-container h-80 rounded-lg transition-all duration-500 hover:scale-105">
                                      <img src="${product.thumbnail}" alt="Image 1" class="w-full  h-full">

                                      <div class="overlay">
                                          <div class="overlay-content">
                                             
                                              <div>
                                                <button class="w-full toCart" type="button" onClick="addToCart(this)">Add To Cart</button>

                                               </div>
                                          </div>
                              
                                      </div>
                                      <div class="overlay1">
                                          <div class="overlay-content1">
                                             <h1 class=" my-1 font-semibold">TK- <span class="price">${product.price}</h1>
                                          </div>
                                         
                                      </div>
                                      <div class="overlay2 p-4">
                                          <div class="overlay-content2 text-left">
                                             <p class="mt-5 text-md">${product.description.slice(0, 90)}</p>
                                             <p>Stock Left : ${product.stock}</p>
                                             <div class="flex justify-center mt-8"> <img src="${product.images[0]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[1]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[2]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"><img src="${product.images[3]}" alt="Image 1" class="w-14 h-14 rounded-sm mx-2"></div>
                                          </div>
                                         
                                      </div>
                                       
                                  </div>
                                  <h4 class="uppercase text-center text-xl font-semibold mt-2 title" style="color: black;">${product.title}</h4>
                              </div> 
                            </div>`;
      womensJwellery.appendChild(listItem3);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

let totalPrice = 0;

function buttonTask() {
  if (totalPrice < 800) {
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

// add tocart button
function addToCart(button) {
  // console.log("clicked")
  const productCard = button.closest(".product-card");

    // Get the product title from the card
    const titleElements = productCard.getElementsByClassName("text-xl");
    const titleElement = titleElements[0];
    const title = titleElement.textContent.trim();

    // Get the product price from the card
    const priceElements = productCard.getElementsByClassName("price");
    const priceElement = priceElements[0];
  const priceText = priceElement.textContent;
  console.log(priceText)
    const price = parseFloat(priceText);
    totalPrice += price;
    totalPriceElement.textContent = totalPrice.toFixed(2);
    buttonTask();

    // You can use these title and price variables to add the product to the cart
    // For now, let's just log them to the console
    console.log("Product Title:", title);
  console.log("Product Price:", price);
  
  const productTitleList = document.createElement("li");
  productTitleList.innerText = title;
  selectedTitlesList.appendChild(productTitleList);
  
    buttonTask();

  

}

// cart calculations 

applyButton.addEventListener("click", function () {
  const discountInput = document.getElementById("disCountInput");
  const discountInputValue = discountInput.value.toUpperCase();

  if (!(discountInputValue === "SELL800")) {
    window.alert("Please enter 'SELL800' for the discount");
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

