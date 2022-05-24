function ProductRemove(options) {
  const rootElement = document.createElement("div");

  rootElement.classList.add("product");
  rootElement.innerHTML = `
            <div class="product-icon">${options.icon}</div>
            <div class="product-name">${options.name}</div>
        `;

  return rootElement;
}

let touchstartX = 0;
let touchendX = 0;

const slider = document.getElementById("slider");

function handleGesture() {
  if (touchendX < touchstartX) alert("swiped left!");
  if (touchendX > touchstartX) alert("swiped right!");
}

slider.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].options.name;
});

slider.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].options.name;
  handleGesture();
});
