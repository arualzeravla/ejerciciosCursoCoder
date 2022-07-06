//Mensaje de bienvenida

alert ("Bienvenido a la calculadora de intereses de plazo fijo en pesos.");

//Definiciones variables
const capitalInicial = parseInt(prompt("Ingrese su capital a invertir en pesos:"));
const plazo = parseInt(prompt("Ingrese el plazo de la inversión (días):"));
const interesTNA = 0.53;


//Cálculo de intereses acumulados
function calcuGanancia (ganancia){
    ganancia = capitalInicial * interesTNA / 365 * plazo;
    return ganancia;
}

//Cálculo del capital total final
const capitalFinal = capitalInicial + calcuGanancia();


//Conversión de montos a moneda ARS y redondeo de decimales
let gananciaEnPesos = calcuGanancia().toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
let totalFinalEnPesos = capitalFinal.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });




alert ("El total de intereses acumulados es: " + gananciaEnPesos +
        "\nEl capital total acumulado es: " + totalFinalEnPesos);