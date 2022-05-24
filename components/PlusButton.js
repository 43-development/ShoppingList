function PlusButton(options) {
    const rootElement = document.createElement("button");

    rootElement.classList.add("btn", "btn-outline-secondary");
    rootElement.innerHTML = `
            <i class="bi bi-plus"></i>
          `;

    rootElement.addEventListener("click", () => {
        if (options && options.onCreateNewProduct) {
            options.onCreateNewProduct();
        }
    });

    return rootElement;
}
