
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

})
