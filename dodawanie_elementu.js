var el = document.createElement("div");

el.id = "potrawy";
el.innerText = "Potraw";
el.setAttribute("text", "bold");
el.classList.add("podtytul");
el.style.setProperty("background-color", "#FF6633");

var div = document.querySelector(".Header");
div.appendChild(el);