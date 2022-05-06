// options e un obiect de forma:
// {
//    type - add / readonly / edit
//    title - titlul cardului
//    productCount - numarul de produse din lista pentru acel magazin
//    checkedCount - numarul de produse bifate din lista pentru acel magazin
//    icon - imaginea magazinului
// }
function Card(options) {
  var card = document.createElement("div");
  if (options.type === "edit") {
      card.innerHTML =` <div class="card card-input">
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
      <button onclick="removeCard()" class="btn-ics">
        <i class="bi-x-circle"></i>
      </button>
    </div>`
    card.classList.add("test");
  } else if (options.type === "readonly") {
  
    card.classList.add("card");
    card.innerHTML = `        <button class="btn btn btn-light">
    <div class="div-magazin" id="titluMagazin"><p>${options.title}</p></div>
    <div class="div-mic">
      <img src="${options.icon}" class="card-img-top div-imagine" alt="..." />
      <div class="div-numar-produse">${options.checkedCount}/${options.productCount} produse</div>
    </div>
  </button>`
  } else if (options.type === "add") {
    card.classList.add("card", "div-buton");
    card.innerHTML= `<button class="btn btn-light"> <i class="bi bi-plus-lg"></i>
  </button>`
  }
  return card;
}

document.body.appendChild(
  Card({
    type: "add",
  })
);
// returneaza un card de adaugare



document.body.appendChild(
  Card({
    type: "readonly",
    title: "Kaufland",
    productCount: 10,
    checkedCount: 5,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kaufland_201x_logo.svg/440px-Kaufland_201x_logo.svg.png",
  })
);
// returneaza un card cu kaufland readonly

document.body.appendChild(
  Card({
    type: "edit",
    title: "Kaufland",
    productCount: 10,
    checkedCount: 5,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kaufland_201x_logo.svg/440px-Kaufland_201x_logo.svg.png",
  })
);
// returneaza un card cu kaufland în modul de editare
