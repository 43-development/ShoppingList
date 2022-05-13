
function StoreCard(options) {
    var rootElement = document.createElement("div");
    var justCreated = true
  
    function renderEditableContent() {
      rootElement.classList.remove('card')
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

      const inputElement = rootElement.querySelector('.input-magazin')
      inputElement.addEventListener("change", () => {
        options.title = inputElement.value
      })

      const iconElement = rootElement.querySelector('#testButton')
      iconElement.addEventListener("click", () => {
        options.icon = prompt('Schimba iconita', options.icon)
      })
    }

    function renderReadonlyContent() {
      rootElement.classList.remove("test");
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

    if (options.editable) {
      renderEditableContent()
    } else {
      renderReadonlyContent()
    }
  
    // long click presupune click apasat cateva secunde fara sa misti mouseul
    // mousedown
    // wait
    // mouseup
    // has moved? if not, it's a long press/click

    var clickTime
    var mouseMoved

    rootElement.addEventListener('mousedown', () => {
      clickTime = Date.now()
      mouseMoved = false
    })

    rootElement.addEventListener('mousemove', () => {
      mouseMoved = true
    })

    rootElement.addEventListener('mouseup', () => {
      if (options.editable) {
        return
      }

      const timeElapsed = Date.now() - clickTime

      if (mouseMoved) {
        return
      }

      if (timeElapsed < 500) {
        // this is a simple click
        // so if it's not editable
        // we should navigate to this store details screen
        if (options && options.onNavigate) {
          options.onNavigate()
        }
      } else {
        // this is surely a long press
        options.editable = true
        renderEditableContent()
      }
    })

    const clickOutsideHandler = (event) => {
        if (justCreated) {
          justCreated = false
          return
        }

        if (rootElement.contains(event.target)) {
            return
        }

        if (!options.editable) {
            return
        }

        if (options && options.onSaveCard) {
            options.onSaveCard()
        }

        options.editable = false
        renderReadonlyContent()
    }

    document.body.addEventListener('click', clickOutsideHandler)
  
    return rootElement;
  }
  