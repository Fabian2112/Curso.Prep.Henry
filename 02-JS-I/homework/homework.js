// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola mundo';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 35;

// Crea una variable booleana:
const nuevoBool = 3 < 5;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var string = str
  return string
  // "Return" la string provista: str
  // Tu código:
}

function suma(x, y) {
  var suma3 = x + y
  var x = 4
  var y = 6
  return suma3
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
}

function resta(x, y) {
  var resta3 = x - y
  return resta3
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
}

function multiplica(x, y) {
  var multiplicacion = x * y
  return multiplicacion
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
}

function divide(x, y) {
  var dividir = x / y
  return dividir
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
}

function sonIguales(x, y) {
  var igualar = x == y
  return igualar
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length == str2.length) {
    return true;
  }
  return false;

  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
}

function menosQueNoventa(num) {
  var numero = num < 90
  return numero
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
}

function mayorQueCincuenta(num) {
  var numero2 = num > 50
  return numero2
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
}

function obtenerResto(x, y) {
  var resto = x % y
  return resto
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
}

function esPar(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;

  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esImpar(num) {
  if (num % 2 != 0) {
    return true;
  }
  return false;
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
}

function elevarAlCuadrado(num) {
  var potencia2 = (num ** 2)
  return potencia2
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
}

function elevarAlCubo(num) {
  var potencia3 = (num ** 3)
  return potencia3
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
}

function elevar(num, exponent) {
  var potencian = (num ** exponent)
  return potencian
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
}

function redondearNumero(num) {
  var redondeo = Math.round(num)
  return redondeo
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
}

function redondearHaciaArriba(num) {
  var redondeosup = Math.ceil(num)
  return redondeosup
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
}

function numeroRandom() {
  var random = Math.random()
  return random
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
}

function esPositivo(numero) {
  var chequeo = numero
  if (chequeo > 0) {
    return ('Es positivo');
  }
  else if (chequeo < 0) {
    return ('Es negativo');
  }
  else (chequeo = 0)
  return false

  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
}

function agregarSimboloExclamacion(str) {
  var frase = (str + "!")
  return frase


  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  var completo = (nombre + " " + apellido)
  return completo
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
}

function obtenerSaludo(nombre) {
  var saludo = ("Hola" + " " + nombre + "!")
  return saludo
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
}

function obtenerAreaRectangulo(alto, ancho) {
  var area3 = (alto * ancho)
  return area3
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
}


function retornarPerimetro(lado) {
  var perimetro = lado * 4
  return perimetro
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
}


function areaDelTriangulo(base, altura) {
  var area = (base * altura / 2)
  return area
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro) {
  var dolar = euro * 1.2
  return dolar

  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

}


function esVocal(letra) {
  var vocal1 = "a"
  var vocal2 = "e"
  var vocal3 = "i"
  var vocal4 = "o"
  var vocal5 = "u"
  if (letra == vocal1) {
    return "Es vocal";
  }
  else if (letra == vocal2) {
    return "Es vocal";
  }
  else if (letra == vocal3) {
    return "Es vocal";
  }
  else if (letra == vocal4) {
    return "Es vocal";
  }
  else if (letra == vocal5) {
    return "Es vocal";
  }
  return "Dato incorrecto"


  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
