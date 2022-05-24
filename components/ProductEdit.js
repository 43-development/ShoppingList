
function ProductEdit(options) {
    const rootElement = document.createElement("div");
  
    rootElement.classList.add("product", "product-edit");
    rootElement.innerHTML = `
            <div class="product-icon"></div>
            <input class="product-name-input" value="" />
          `;
   
    return rootElement;
  }
