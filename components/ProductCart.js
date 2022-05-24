function ProductCart(options) {
  const rootElement = document.createElement("div");

  rootElement.classList.add("product");
  rootElement.innerHTML = `
              <div class="product-icon">${options.icon}</div>
              <div class="product-name">${options.name}</div>
          `;

  return rootElement;
}
