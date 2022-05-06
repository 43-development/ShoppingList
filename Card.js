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
    card.classList.add("test");
  } else if (options.type === "readonly") {
    card.classList.add("card");
  } else if (options.type === "add") {
    card.classList.add("card", "div-buton");
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
