// Exercice 1
 
 function color() {
 document.getElementsByClassName("test")[0].style.background = "blue";
  }


// Exercice 2
const button = document.querySelector('.test');

var count= 0

button.addEventListener('click', function ()
{
if(count%2 == 0)
{
  button.style.background = "green"; count++
}
else{
    button.style.background = "yellow"; count++
}
if (count % 5 == 0) {
button.style.background = "red";
}
})


// Exercice 3
function controle(){
    var saisie = document.getElementById("input").value;
    alert("Bonjour " + saisie + " !")
}


// Exercie 4
