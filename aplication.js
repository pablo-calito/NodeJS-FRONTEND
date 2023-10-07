const {CelciusFarenheit,kilometrosMillas,piesPulgadas,pulgadasCentimetros,kilogramosLibras} = require("./conversiones")

let fs = require("fs");

let celcius = 32;

let kilometros = 219;

let pies = 12;

let pulgadasVar = 93;

let kilogramos = 66;

const farenheit = CelciusFarenheit(celcius);

const millas= kilometrosMillas(kilometros);

const pulgadas = piesPulgadas(pies);

const centimetros = pulgadasCentimetros(pulgadasVar);

const libras = kilogramosLibras(kilogramos);


fs.writeFile("./conversionesprueba.txt", 

`la conversion de ${celcius} grados celcius a farenheit es de : ${farenheit} f 
la conversion de ${kilometros} kilometros a millas es de: ${millas} mi
la conversion de ${pies} pies a pulgadas es de: ${pulgadas} plg
la conversion de ${pulgadasVar} pulgadas a centimetros es: ${centimetros} cm
la conversion de ${kilogramos} kilogramos a libras es: ${libras} lb `,

function(error){

    if(error){
        console.log(error);
    }else {
        console.log("archivo creado exitosamente");
    }

})


