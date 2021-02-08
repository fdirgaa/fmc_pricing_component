let slider = document.querySelector(".slider");
let views = document.querySelector(".views");
let price = document.querySelector(".price");
views.innerHTML = slider.value;
price.innerHTML = (0.16 * slider.value).toPrecision(4);
slider.oninput = function () {
  views.innerHTML = this.value;
  price.innerHTML = (0.16 * this.value).toPrecision(4);
};
