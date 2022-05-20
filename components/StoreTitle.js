function StoreTitle(options) {
  const rootElement = document.createElement("div");

  rootElement.classList.add("store-title");
  rootElement.innerHTML = `
          <img
            src="${options.logo}"
            class="store-image"
          />
          <h1>${options.title}</h1>
          `;

  return rootElement;
}
