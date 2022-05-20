function StoreHeader(options) {
  const rootElement = document.createElement("div");

  rootElement.classList.add("store-header");

  const backButton = BackButton(options);
  rootElement.appendChild(backButton);

  const storeTitle = StoreTitle(options);
  rootElement.appendChild(storeTitle);

  return rootElement;
}
