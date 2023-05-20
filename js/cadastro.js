const formulario = document.querySelector(".formulario")
const confirmar = document.querySelector(".confirmar")
const complete = document.querySelector(".complete")

const cartaonum = document.getElementById("numero-cartao")
const numeroform = document.getElementById("number")
const numeroerro = document.getElementById("cartaonumero-erro")

const cartaonome = document.getElementById("nome-pessoa")
const nomeform = document.getElementById("nome")
const nomeerro = document.getElementById("cartaonome-erro")

const cartaomes = document.getElementById("mes-cartao")
const mesform = document.getElementById("mes")
const meserro = document.getElementById("cartaomes-erro")

const cartaoano = document.getElementById("ano-cartao")
const anoform = document.getElementById("ano")
const anoerro = document.getElementById("cartaoano-erro")

const cartaocvc = document.getElementById("numero-verificacao")
const cvcform = document.getElementById("cvc")
const cvcerro = document.getElementById("cartaocvc-erro")



function format(s){
    const digitsOnly = s.replace(/\D/g, "");
  
    const groups = digitsOnly.match(/(\d{1,4})/g);
  
    const formatted = groups ? groups.join(" ") : "";
  
  return formatted;
}

function setCartaonum(e){
    cartaonum.innerText = format(e.target.value)
}

function setCartaonome(e){
    cartaonome.innerText = e.target.value
}

function setCartaomes(e){
    cartaomes.innerText = e.target.value
}

function setCartaoano(e){
    cartaoano.innerText = e.target.value
}

function setCartaocvc(e){
    cartaocvc.innerText = e.target.value
}

numeroform.addEventListener("keyup",setCartaonum)
nomeform.addEventListener("keyup",setCartaonome)
mesform.addEventListener("keyup",setCartaomes)
anoform.addEventListener("keyup",setCartaoano)
cvcform.addEventListener("keyup",setCartaocvc)

function limitarCaracteresmax(input, maxLength) {
  if (input.value.length > maxLength) {
    input.value = input.value.slice(0, maxLength);
  }
}


confirmar.addEventListener("click", () => {  
    if (nomeform.value.length <= 0) {
      nomeerro.innerHTML = "Please enter your name!";
    } else if (numeroform.value.length <= 0) {
      numeroerro.innerHTML = "Please enter your card number!";
    } else if (mesform.value.length <= 0) {
      meserro.innerHTML = "Please enter month!";
    } else if (anoform.value.length <= 0) {
      anoerro.innerHTML = "Please enter year!";
    } else if (cvcform.value.length <= 0) {
      cvcerro.innerHTML = "Please enter your cvc!";
    } else {
        formulario.style.display =  "none"
        complete.style.display = "block"
    }
});

complete.addEventListener("click",() =>{
    complete.style.display = "none"
    formulario.style.display = "block"
    numeroform.value = ""
    nomeform.value = ""
    mesform.value= ""
    anoform.value = ""
    cvcform.value = ""
    cartaonum.innerText = "0000 0000 0000 0000"
    cartaonome.innerText = "JANNE APPLESEED"
    cartaomes.innerText = "00"
    cartaoano.innerText = "00"
    cartaocvc.innerText = "000"
    numeroerro.innerText = ""
    nomeerro.innerText = ""
    meserro.innerText = ""
    anoerro.innerText = ""
    cvcerro.innerText = ""
})









