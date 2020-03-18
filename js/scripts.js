var age = -1;

var loadPage = function(){
  if(age >= 18){
    jQuery(".adult").toggleClass("hidden");
  } else if(0 < age && age < 18){
    jQuery(".minor").toggleClass("hidden");
  } else{
    alert("Try again");
    age = parseInt(prompt("How old are you?"));
    loadPage();
  };
};

jQuery(document).ready(function(){
age = parseInt(prompt("How old are you?"))
loadPage();
});