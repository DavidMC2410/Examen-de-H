/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function palabraMasLarga(array) {
  // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
  // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
  // Por ej:
  // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'

  // Tu código aca:
  var palabra_mas_grande="";
  var new_array= array.split(" ");
  new_array.forEach(function (new_array){
    if (new_array.length>palabra_mas_grande.length){
      palabra_mas_grande=new_array;
    }
  });
  return palabra_mas_grande;
}

// No modifiques nada debajo de esta linea //


module.exports = palabraMasLarga