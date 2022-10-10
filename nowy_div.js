var el = document.createElement("div");

el.id = "kontak";
el.innerText = "z";
el.setAttribute("text", "bold");
el.style.setProperty("background-color", "#FF6633");

var div = document.querySelector("header");
div.appendChild(el);