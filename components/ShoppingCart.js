function ShoppingCart(options) {
  const rootElement = document.createElement("div");

  rootElement.classList.add("shopping-cart");
  rootElement.innerHTML = `<button type="button" class="btn btn-primary position-relative">
    <i class="bi bi-cart3"></i>
    <span
      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      >5</span>
  </button>
          `;

  rootElement.addEventListener("click", () => {
    if (options && options.onCart) {
      options.onCart();
    }
  });

  return rootElement;
}
