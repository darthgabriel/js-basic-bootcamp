//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break


let fc = 10; //factorial a calcular
let fr = 1; //inicializar factorial resultante

let bucle = true;

while (bucle == true) {
    fr = fr * (fc);
    fc = fc - 1;

    if(fc === 1) {
       break;
    }
    
}

console.log(fr)