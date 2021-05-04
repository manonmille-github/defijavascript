// 1ere partie


// Exercice 1
 
//  function color() {
//  document.getElementsByClassName("test")[0].style.background = "blue";
//   }


// // Exercice 2
// const button = document.querySelector('.test');

// var count= 0

// button.addEventListener('click', function ()
// {
// if(count%2 == 0)
// {
//   button.style.background = "green"; count++
// }
// else{
//     button.style.background = "yellow"; count++
// }
// if (count % 5 == 0) {
// button.style.background = "red";
// }
// })


// Exercice 3
// function controle(){
//     var saisie = document.getElementById("input").value;
//     alert("Bonjour " + saisie + "!")
// }


// Exercie 4


// function controle(){
//   var name = document.getElementById("input").value;
//   var regex = new RegExp("^[a-zA-ZéèàêÇÉÈÀëË]*$");
 
//   if (regex.test(name))
//   {
//     document.getElementById("input").className = "valide"
//     document.getElementById("validation").innerHTML = "Message envoyé"
//   }
//   else
//   {
//     document.getElementById("input").className = "invalide"
//     document.getElementById("validation").innerHTML = "Recommencez"
//   }
// }

// function controle(){
//     var saisie = document.getElementById("input").value;
//     alert("Bonjour " + saisie + "!")
// 2eme partie
function controle(){
var name = document.getElementById("name").value;
var age = 2021 - document.getElementById("yearofbirth").value;
if (age < 18)
{
  document.getElementById("reply").innerHTML = "Bonjour "+name+", tu as "+age+" ans. Couareg encore quelques années avant la majorité!"
  // alert("Bonjour " + name + ", tu as " + age + " ans. Courage, encore quelques années avant la majorité!")
}
else {
  document.getElementById("reply").innerHTML = "Bonjour "+name+", tu as "+age+" ans."
  // alert("Bonjour " + name + ", tu as " + age + " ans.")
}
}
