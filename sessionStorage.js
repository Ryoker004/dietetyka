var field = document.getElementById("komentarz");
 if ( sessionStorage.autosave ) {
     field.value = sessionStorage.autosave;
 }
 setInterval(function(){
     sessionStorage.autosave = field.value;
 }, 1000);