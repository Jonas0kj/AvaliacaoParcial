var info1 = document.getElementById('info1');
var info2 = document.getElementById('info2');
var res1 = document.getElementById('resInfo1');
var res2 = document.getElementById('resInfo2');
var valido = document.getElementById('valido');
var Nvalido = document.getElementById('Nvalido');


info1.addEventListener('input', () => {
    var regex = /^[0-9][A-Z]{1}[0-9]{2}\_[A-Z]{2}[a-z]{2}[0-9]{2}\.[0-9]\.\_? $/;
    if(regex.test(info1.value)) {
        valido.innerHTML = "Formato valido"
        valido.style.color = "green";
    } else {
        valido.innerHTML = "Formato Invalido. Use xYxx_YYyyxx.x_?"
        valido.style.color = "red";
    }  
});
info2.addEventListener('input', () => {
    var regexInfo2 = /^D\.[0-9]+$/;
    if(regexInfo2.test(info2.value)) {
        Nvalido.innerHTML = "Formato valido"
        Nvalido.style.color = "green";
    } else {
        Nvalido.innerHTML = "Formato Invalido. Use xYxx_YYyyxx.x_?"
        Nvalido.style.color = "red";
    }   
});
function gerar() {
    if (/^[0-9][A-Z]{1}[0-9]\d{2}_[A-Z]{2}[a-z]{2}[0-9]{2}\.[0-9]\._? $/.test(info1.value)) {
      res1.innerHTML = "info 1: " +info1.value;

    } else {
     res1.innerHTML = "info 1: Formato Invalido" ;
    }
    if (/^D\.[0-9]+$/.test(info2.value)) {
        res2.innerHTML = "info 1: " +info2.value;
    } else {
        res2.innerHTML = "info 2: Formato Invalido";
    }
}
redValue = Math.min(256,Math.max(0,redValue));
    greenValue = Math.min(256,Math.max(0,greenValue));
    blueValue = Math.min(256,Math.max(0,blueValue));


    var generateDiv

function apagar() {
    info1.value = '';
    info2.value = '';
    res1.innerHTML = '';
    res2.innerHTML = '';
}