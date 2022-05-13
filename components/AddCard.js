
function AddCard(options) {
    const rootElement = document.createElement("div");
  
    rootElement.classList.add("card", "div-buton");
    rootElement.innerHTML = `
                  <button class="btn btn-light">
                          <i class="bi bi-plus-lg"></i>
                  </button>
          `;
  
    rootElement.addEventListener("click", () => {
      if (options && options.onCreateNewCard) {
        options.onCreateNewCard();
      }
    });
  
    return rootElement;
  }
  