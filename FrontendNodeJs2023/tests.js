// esta es la funcion  de prueba que crea 
//un archivo de texto con resultados de las 
//converciones
 
function pruevaConverciones(){

    const fs = require("fs");
    const resultados = [];

//prueba de conversion de grados celsius a gradas Fahrenheit
const gradoscelsius = 50;

const gradosFarenheit = convertitCaF(gradoscelsius);
resultados.push("Prueba fucion: convertirCaF");
resultados.push("Grados Centigrados origen: #{gradosCelsius}");
resultados.push("Grados Fahrenheit convertidos: #{gradosFahrenheit}");
resultados.push("------");

//prueba de las conversiones de los kilometros a millas
const kilometros = 150;
const millas = convertirKmMillas(kilometros);
resultados.push("Prueba funcion: convertirkmsMillas");
resultados.push("Kilometros origen: {kilometros}");
resultados.push("Millas convertidas: {millas}");
resultados.push("-----");

fs.writeFileSync("pruebaconversiones.text", resultados.join("/n"));
console.log("Archivo de prueba creado: pruebaconversiones.text");
}

module.exports = {
    convertirCaF,
    convertirKmsMillas,
    convertirKgLibras,
    convertirPulgadasCentimetros,
    convertirPiesPulgadas,
    pruebaConversiones
  };
  
    convertirCaF,
    convertirKmsMillas,
    convertirKgLibras,
    convertirPulgadasCentimetros,
    convertirPiesPulgadas,
    pruebaConversiones
  
    convertirCaF,
    convertirKmsMillas
  
    convertirCaF,
    convertirKmsMill
  
    convertirCaF,
    convertirK
  
   
  