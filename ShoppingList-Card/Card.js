// Salvați stadiul curent al cardului la orice click în afara lui, și afișați cardul de adăugare (cel cu +)

var body = document.getElementById("body");
var titluMagazin = document.getElementById("titluMagazin");
var inputMagazin = document.getElementById("inputMagazin");
var testButton = document.getElementById("testButton");


testButton.addEventListener("click", function myFunction() {
    // Select first child element:
    const element = document.getElementById("titluMagazin").children[0];
    
    // Create a new text node:
    const newNode = document.createElement("Water");
    
    // Replace the text node:
    element.replaceChild(newNode, element.childNodes[0]);
    });
//document.getElementById('titluMagazin').innerHTML = document.getElementById('inputMagazin').value;

//titluMagazin.appendChild(document.createTextNode(inputMagazin.value));

//titluMagazin.insertAdjacentHTML("beforeend", inputMagzin.value);

/*const newElement = document.createElement("p");
newElement.innerHTML = inputMagzin.value;
paragraf.appendChild(newElement);*/

//  const elementHTML = '<div class="div-magazin" id="titluMagazin">' + inputMagzin.value + '</div>';
//  titluMagazin.insertAdjacentHTML("beforeend", elementHTML);

 

// var divMagazin = document.createElement("div");
// divMagazin.innerHTML = `<p>${inputMagzin.value}</p>`;
// inputMagazin.appendChild(divMagazin);






// function butonAdaugare () {
//     var el_nou = document.createElement("div");
//     var camp = document.getElementById('userInput')
//     el_nou.innerHTML = camp.value;
//     var element = document.getElementById('TitluMagazin')
//     element.after(el_nou);
//     });
  
    



// function saveTitluMagazin() {
//     localStorage.setItem("titluMagazin", inputMagazin.innerHTML);
// }








































/*
document.body.addEventListener('click', function (e) {
    //if (document.getElementById('clickbox').contains(e.target)) {
        // if(!document.getElementsByClassName("div-buton")){                                                                                                      //daca NU e deja adaugat addCard in document
        var tree = document.getElementById('clickbox');
        tree.insertAdjacentHTML('afterend', '<div class="div-buton card"><button class="btn btn-light"><i class="bi bi-plus-lg"></i></button></div>');              //adaugare card addCard (.div-buton)
   // }
})
*/



/*function clickTime() {
    var start, end, diff;
    var clickTime = 500;
    var longClick = new CustomEvent('longclick');
    var divCard = document.querySelector('.test');

    document.body.addEventListener('longclick', function (event) {
        var q = document.getElementById('clicktime');
        q.innerHTML = diff / 1000 + 's';
        q.style.color = '#00E676';
    });

    divCard.onmousedown = function () {
        start = Date.now();

        divCard.onmouseup = function () {
            end = Date.now();
            diff = (end - start) + 1;
            if (diff > clickTime) {                                                                                                     //LongClick activ => EDIT CARD
                document.body.createElement("<span>"longClick"</span>");
            } else {                                                                                                                    //ShortClick activ => switch la pagina Magazin"X".html
                var q = document.getElementById('clicktime');
                q.innerHTML = diff / 1000 + 's';
                q.style.color = '#F44336';
            }
        }
    }
}*/