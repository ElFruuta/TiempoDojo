console.log("page loading...");
var cookies = document.querySelector(".cookies");


function mostrarAlert() {
    alert("Loadding weather report...")
}


function aceptar(element) {
    cookies.remove();
}
function f(temp) {
    return Math.round(9 / 5 * temp + 32);
} 
function c(temp) {
    return Math.round((temp - 32) * 5 / 9);
}
function grado(element) {
    console.log(element.value);
    for (var i = 1; i <= 9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if (element.value == "°C") {
            tempSpan.innerText = f(tempVal);
        } else {
            tempSpan.innerText = c(tempVal);
        }
    }
}