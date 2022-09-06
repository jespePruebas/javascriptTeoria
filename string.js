let cl = console;
let a = "Quispe Castro";
let b =24
let c = "HELLO, LOOK AT YOU!, Mr. Blue blue has a blue house";
var d = new String("Quispe Castro");
//cl.log(a.length); //Representa la longitud de una cadena
//cl.log(a.constructor); //ƒ String() { [native code] }
//cl.log(b.toString()); //24
//var z = "Jesus \\ Quispe"; //Jesus \ Quispe.
/********************************************************************/
//cl.log(c.search(/\bLO/)); //7
//cl.log(c.search(/LO\b/)); //3
//cl.log(c.search("blue")); //30
//cl.log(c.search(/blue/i)); //25
//cl.log(c.match(/blue/g)); //(2) ["blue", "blue"]
//cl.log(c.match(/blue/gi)); //(3) ["Blue", "blue", "blue"]
/********************************************************************/
//console.log(typeof a); //string
//console.log(typeof d); //object
//console.log(a == d); //true
//console.log(a === d); //false
/********************************************************************/
//cl.log(c.indexOf("blue")); //30
//cl.log(c.indexOf("blue", 31)); //41
//cl.log(c.lastIndexOf("blue")); //41
//cl.log(c.lastIndexOf("blue", 40)); //30
/********************************************************************/
//cl.log(a.slice(2, 5)); //isp
//cl.log(a.slice(7)); //Castro
//cl.log(a.substring(2, 5)); //isp
//cl.log(a.substr(2, 5)); //ispe,
/********************************************************************/
//cl.log(a.replace("Castro", "Quispe")); //Quispe Quispe /reemplaza solo la primera coincidencia
//cl.log(a.replace("CASTRO", "Quispe")); //ningun cambio
//cl.log(a.toUpperCase()); //QUISPE CASTRO
//cl.log(a.toLocaleUpperCase()); //QUISPE CASTRO / para otros idiomas
//cl.log(a.toLocaleLowerCase()); //quispe castro / para otros idiomas
//cl.log(a.toLowerCase()); //quispe castro
//cl.log(a.concat(" + ", b)); // Quispe Castro + 24
//cl.log(a.trim());//elimina los espacios en blanco en ambos extremos del string
//cl.log(a.charAt(1)); //u
//cl.log(a.charCodeAt(1)); //117 / Alt +117 

/*El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
S: cadena.split([separador][,limite])
*/
//cl.log(c.split("u")); //(5) ["HELLO, LOOK AT YOU!, Mr. Bl", "e bl", "e has a bl", "e ho", "se"]
//cl.log(c.split("u", 2)); // (2) ["HELLO, LOOK AT YOU!, Mr. Bl", "e bl"]
//cl.log(c.split(" ")); //(11) ["HELLO,", "LOOK", "AT", "YOU!,", "Mr.", "Blue", "blue", "has", "a", "blue", "house"]
//cl.log(c.split(",")); //(3) ["HELLO", " LOOK AT YOU!", " Mr. Blue blue has a blue house"]
//cl.log(c.split(",")[0]); //HELLO
//cl.log(c.split(",")[1]); // LOOK AT YOU!
//cl.log(c.split(",")[2]); //  Mr. Blue blue has a blue house
//cl.log(c.split(",", 3));// (3) ["HELLO", " LOOK AT YOU!", " Mr. Blue blue has a blue house"]
//cl.log(c.includes("o,")); //false
//cl.log(c.includes("house", 18)); //true
