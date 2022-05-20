function BackButton(options) {
    const rootElement = document.createElement("div");

    rootElement.classList.add("back-button");
    rootElement.innerHTML = `
            <i class="bi bi-arrow-left-short"></i>
        `;

    rootElement.addEventListener("click", () => {
        if (options && options.onBack) {
            options.onBack();
        }
    });

    return rootElement;
}
