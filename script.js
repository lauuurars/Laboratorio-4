
document.getElementById("calcular").addEventListener("click", function() {
    // nombrar las variables

    let op1 = document.getElementById("operador1").value;
    let operador = document.getElementById("operadores").value;
    let op2 = document.getElementById("operador2").value;
    let resultado = document.getElementById("resultado");
    let num1 = parseInt(op1);
    let num2 = parseInt(op2);

    // verificar si los valores son números
    if (isNaN(op1) || isNaN(op2)) {
        resultado.textContent = "ERROR: Ingresa números válidos.";
        return;
    }

    // apartado de las operaciones
    if (operador === "+") {
        resultado.textContent = "Resultado: " + (num1 + num2);
    } else if (operador === "-") {
        resultado.textContent = "Resultado: " + (num1 - num2);
    } else if (operador === "**"){
        resultado.textContent = "Resultado: " + (num1 ** num2);
    } else if (operador === "%"){
        resultado.textContent = "Resultado: " + (num1 % num2);
    }else if (operador === "*") {
        resultado.textContent = "Resultado: " + (num1 * num2);
    } else if (operador === "/") {
        if (num2 === 0) {
            resultado.textContent = "ERROR: ¡No se puede dividir entre cero!";
        } else {
            resultado.textContent = "Resultado: " + (num1 / num2);
        }
    } else {
        resultado.textContent = "ERROR: ¡Operador No Válido!";
    }
});