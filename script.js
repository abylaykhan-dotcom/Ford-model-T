
let name = "Abylaykhan";
let age = 13;
console.log(name);
console.log(age);
let aby = document.querySelector("#abyMassage");
let button = document.querySelector("#abybtn");
button.addEventListener("click", () => {
    aby.textContent = "Nothing";
    aby.style.color = "#2563EB";
    aby.style.fontWeight = "700";

});
let Forma = document.querySelector("#contactForma");
let FormaMessage = document.querySelector("#FormaMessage");

Forma.addEventListener("submit", function(event){
    event.preventDefault();

    FormaMessage.textContent = "Forma submitted successfully!";
    FormaMessage.style.color = "#00ff40";

    Forma.reset();
}
);

