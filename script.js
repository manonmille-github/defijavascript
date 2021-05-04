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
// var re = /[a-zA-Z]+/g
// function valider(){
//   var OK = re.exec()
//     if (!ok)
//     alert("le nom n'est pas valide");
//     else 
//     alert("Merci votre nom est : "+OK[0]  
// }



function controle(){
  var name = document.getElementById("input").value;
  var regex = new RegExp("^[a-zA-ZéèàêÇÉÈÀëË]*$");
 
  if (regex.test(name))
  {
    document.getElementById("input").className = "valide"
    document.getElementById("validation").innerHTML = "Message envoyé"
  }
  else
  {
    document.getElementById("input").className = "invalide"
    document.getElementById("validation").innerHTML = "Recommencez"
  }
}