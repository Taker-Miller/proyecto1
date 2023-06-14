// script.js
var changeContraste = () => {
    let btn = document.getElementById("btnContraste");
    let estado = btn.value;
    if (estado == "o") {
        btn.value = "c";
        let elements = document.getElementsByClassName('negro');
        elements[0].classList.add('blanco');
        elements[0].classList.remove('negro');
    } else if (estado == "c") {
        btn.value = "o";
        let elements = document.getElementsByClassName('blanco');
        elements[0].classList.add('negro');
        elements[0].classList.remove('blanco');
    }
}

var changeFuente = () => {
    let btn = document.getElementById("btnFuente");
    let estado = btn.value;
    if (estado == '0') {
        btn.value = '1';
        let elements = document.getElementsByClassName("small");
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            element.classList.add("medium");
            element.classList.remove("small");
        }
    } else if (estado == '1') {
        btn.value = '2';
        let elements = document.getElementsByClassName("medium");
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            element.classList.add("large");
            element.classList.remove("medium");
        }
    } else if (estado == '2') {
        btn.value = '0';
        let elements = document.getElementsByClassName("large");
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            element.classList.add("small");
            element.classList.remove("large");
        }
    }
}

document.getElementById("btnContraste").addEventListener("click", changeContraste);
document.getElementById("btnFuente").addEventListener("click", changeFuente);
