console.log("page loading...");
var cookies = document.querySelector(".cookies");


function mostrarAlert() {
    alert("Loadding weather report...")
}


function aceptar(element) {
    cookies.remove();
}
function f_a_c(temp) {
    return Math.round((temp - 32)*(5 / 9));
} 
function c_a_f(temp) {
    return Math.round((temp * (9 / 5)) + 32);
}
function grado(element) {
    console.log(element.value);
    for (var i = 1; i < 9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if (element.value == "°C") {
            tempSpan.innerText = f_a_c(tempVal);
        } else {
            tempSpan.innerText = c_a_f(tempVal);
        }
    }
}