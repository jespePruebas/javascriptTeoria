let cl = console;
let a = "Quispe Castro";
let b =24
let c = "HELLO, LOOK AT YOU!, Mr. Blue blue has a blue house";
var d = new String("Quispe Castro");
//cl.log(a.length); //25
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
console.log(a.toUpperCase()); //ME LL@MO DAVID CASTRO CASTRO
console.log(a.toLocaleUpperCase()); //ME LL@MO DAVID CASTRO CASTRO
console.log(a.toLocaleLowerCase()); //me, ll@mo, david, castro, castro
console.log(a.toLowerCase()); //me, llamo, david, castro, castro
console.log(a.concat(" + ", b)); //Me, Ll@mo, DAVID, Castro, Castro +          1   Peruano    1
console.log(a.trim()); //1   Peruano    1
console.log(str.charAt(1)); //e
console.log(str.charCodeAt(6)); //64
console.log(str.split("a")); //(3)["Me, Ll@mo, DAVID, C", "stro, C", "stro"]
console.log(str.split("a", 2)); //(2) ["Me, Ll@mo, DAVID, C", "stro, C"]
console.log(str.split(" ")); //(5) ["Me,", "Ll@mo,", "DAVID,", "Castro,", "Castro"]
console.log(str.split(",")); //(5) ["Me", " Ll@mo", " DAVID", " Castro", " Castro"]
console.log(str.split(",")[0]); //Me
console.log(str.split(",")[1]); // Ll@mo
console.log(str.split(",")[2]); // DAVID
console.log(str.split(",", 3)); //(3) ["Me", " Ll@mo", " DAVID"]
console.log(str.split(" ", 1)); //["Me,"]
console.log(str1.split(/(\d)/)); //(5) ["         ", "1", "   Peruano    ", "1", "        "]
console.log(str.split("").reverse().join("")); //ortsaC ,ortsaC ,DIVAD ,om@lL ,eM
console.log(str.startsWith("Me")); //true
console.log(str.startsWith("Me")); //true
console.log(str.endsWith("tro")); //true
console.log(str.endsWith("Ll@mo", 8)); //false
console.log(str.endsWith("Ll@mo", 9)); //true
console.log(String.fromCharCode(64)); //@
console.log(str.includes("o,")); //true
console.log(str.includes("DAVID", 18)); //false

var str1 = "ab";
var str2 = "cd";
var str3 = "ef";
var str4 = "ab";
console.log(str1.localeCompare(str2)); //-1
console.log(str3.localeCompare(str2)); //1
console.log(str1.localeCompare(str4)); //0
console.log(str1.repeat(2)); //abab

var x = 100 / "Apple";
var y = 20;
console.log(isNaN(x)); //true
console.log(isNaN(y)); //false

document.write(num);