function ProductsPageTitle(options) {
  const rootElement = document.createElement("div");

  rootElement.classList.add("products-page-title");
  rootElement.innerHTML = `
            <h1>${options.title}</h1>
            `;

  return rootElement;
}
