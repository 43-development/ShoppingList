function ProductsScreen(options) {
  const rootElement = document.createElement("div");

  rootElement.classList.add("products-screen-list");

  const backButton = BackButton(options);
  rootElement.appendChild(backButton);

  const productsPageTitle = ProductsPageTitle(options);
  rootElement.appendChild(productsPageTitle);

  return rootElement;
}
