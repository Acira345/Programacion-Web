function fizzBuzz(n) {

    if(n === "" || n === null || isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        return "El numero debe ser entero positivo.";
    }

    let resultado = [];


    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {  
            resultado.push("FizzBuzz");
        } else if (i % 3 === 0) {
            resultado.push("Fizz");
        } else if (i % 5 === 0) {
            resultado.push("Buzz");
        } else {
            resultado.push(i);
        }
    }
    return  'Resultado de n = ' + n + ': ' + resultado.join(',');
}


//console.log(fizzBuzz(15)); 
//console.log(fizzBuzz(-5)); 
//console.log(fizzBuzz(3.5)); 
console.log(fizzBuzz("hola"));
