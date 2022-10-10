
const profil = document.getElementById("jeanJean");

profil.addEventListener("click", function(){
    profil.src = "image/avatar-bis.png";
})


const myBtn = document.getElementById('myBtn')
const myColor = document.querySelectorAll('.pink-bg')

myBtn.addEventListener("click", function() {
    const nouveauNom = prompt("Entrez votre nom :");
    document.getElementById('name').innerHTML= nouveauNom;
    document.getElementById('name').style.color= "white";
    const newColor = prompt("Entrez votre couleur :");
    myColor.forEach(element=>{element.style.backgroundColor = newColor;})


})  