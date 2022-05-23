function MicButton(options) {
    const rootElement = document.createElement("div");

    rootElement.classList.add("mic-button");
    rootElement.innerHTML = `
            <i class="bi bi-mic-fill"></i>
          `;

    rootElement.addEventListener("click", () => {
        if (options && options.onVocalCreateNewProduct) {
            options.onVocalCreateNewProduct();
        }
    });

    return rootElement;
}
