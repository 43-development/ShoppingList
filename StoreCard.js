
function StoreCard(options) {
    var rootElement = document.createElement("div");
  
    if (options.editable) {
      rootElement.classList.add("test");
      rootElement.innerHTML = `
        <div class="card card-input">
          <div class="div-magazin">
            <input type="text" class="input-magazin" id="inputMagazin" value="${options.title}"/>
          </div>
          <div class="div-mic">
            <button class="btn btn-input" id="testButton">
              <i class="bi bi-plus-lg"></i>
            </button>
            <div class="div-numar-produse">${options.checkedCount}/${options.productCount} produse</div>
          </div>
        </div>
        <div>
          <button class="btn-ics">
            <i class="bi-x-circle"></i>
          </button>
        </div>
      `

      rootElement.querySelector(".btn-ics").addEventListener("click", () => {
          if (options && options.onDeleteCard) {
            options.onDeleteCard();
            document.body.removeEventListener('click', clickOutsideHandler)
          }
      })
    } else {
      rootElement.classList.add("card");
      rootElement.innerHTML = `
        <button class="btn btn btn-light">
          <div class="div-magazin" id="titluMagazin"><p>${options.title}</p></div>
          <div class="div-mic">
            <img src="${options.icon}" class="card-img-top div-imagine" alt="..." />
            <div class="div-numar-produse">${options.checkedCount}/${options.productCount} produse</div>
          </div>
        </button>
      `;
    }
  
    rootElement.addEventListener('dblclick', () => {
      if (options.editable) {
        return
      }
  
      if (options && options.onEnterEditMode) {
        options.onEnterEditMode()
        document.body.removeEventListener('click', clickOutsideHandler)
      }
    })

    const clickOutsideHandler = (event) => {
        if (rootElement.contains(event.target)) {
            return
        }

        if (!options.editable) {
            return
        }

        if (options && options.onSaveCard) {
            options.onSaveCard()
        }
    }

    document.body.addEventListener('click', clickOutsideHandler)
  
    return rootElement;
  }
  