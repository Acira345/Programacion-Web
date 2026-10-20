function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso"; 
    } else if (imc < 25) {
        return "Normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    }
    else {
        return "Obesidad";
    }
}

function calcularIMC(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        return "El peso y la altura deben ser mayores que cero.";
    }

    let imc = peso / (altura * altura);
    let clasificacion =  clasificarIMC(imc);
    return `Tu IMC es ${imc} y tu clasificación es: ${clasificacion}`;
}

console.log(calcularIMC(70, 1.75)); 
console.log(calcularIMC(90, 1.70)); 
console.log(calcularIMC(-10, 1.60))