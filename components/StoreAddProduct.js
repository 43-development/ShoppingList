function StoreAddProduct(options) {
    const rootElement = document.createElement("div");

    rootElement.classList.add("store-add-product");

    const plusButton = PlusButton(options);

    const micButton = MicButton(options);

    rootElement.appendChild(plusButton);

    rootElement.appendChild(micButton);
    

    return rootElement;
}
