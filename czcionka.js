(function() {
  var element = document.getElementById("tytul");
  
  element.addEventListener("mouseover", function(){
    this.style.fontWeight = "bold";
  });
  
  element.addEventListener("mouseout", function(){
    this.style.fontWeight = "normal";
  });
  
})();
