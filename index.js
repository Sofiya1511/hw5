fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
    displayProducts(data.products);
  });

function displayProducts(products) {
  const wrapper = document.querySelector(".wrapper");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.brand}" class="product-img position-relative object-fit-fill border rounded">
      <h3 class="product-title">${product.brand}</h3>
      <p class="product-description">${product.description}</p>
      <p class="product-price">$${product.price}</p>
      <p class="product-rating">${product.rating}</p>
      <button class="add-to-cart-btn">Add to cart</button>
    `;

    wrapper.appendChild(productDiv);
  });
}
