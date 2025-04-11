function saludar() 
{
    let nombre = prompt('Escribe tu nombre')
    alert ("Hola" + nombre + "Suerte en tu examen")
}

function CalcularCuadrado()
{
    let numero= parseInt(prompt('Escriba un numero'));
    if (isNaN(numero) || numero<0);
    {
        alert ("Ingresa los datos correctos");
        return CalcularCuadrado()
    }
    
    { 
    let numeroalcuadrado=numero*numero;
    alert ("El cuadrado del numero es" + numeroalcuadrado+ "")
    }
}

