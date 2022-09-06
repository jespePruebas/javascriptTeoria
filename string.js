   let a = "Jesus David Quispe Castro";
   console.log(a.length); //25
   var x = 'Me llamo "Jesus" David';
   console.log(x); //Me llamo "Jesus" David

   var str = "Hello World!";
   var str1 = 2;
   var str2 = ["hola", "mundo"];
   var str3 = true;
   console.log(str.constructor); //ƒ String() { [native code] }
   console.log(str1.constructor); //ƒ Number() { [native code] }
   console.log(str2.constructor); //ƒ Array() { [native code] }
   console.log(str3.constructor); //ƒ Boolean() { [native code] }

   function employee(name) {
    this.name = name;
   }
   employee.prototype.salary = 500;
   employee.prototype.salary = 100;
   var fred = new employee("Jesus");
   console.log(fred.name); //Jesus
   console.log(fred.salary); //100 /variable

   var str = "Hello World!";
   var num = 15;
   console.log(str.toString()); //Hello World!
   console.log(num.toString()); //15

   var y = "It's alright.";
   console.log(y); //It's alright.

   var z = "Jesus \\ Quispe";
   console.log(z); //Jesus \ Quispe.
   /********************************************************************/
   var str = "HELLO, LOOK AT YOU!, Mr. Blue blue has a blue house";
   console.log(str.search(/\bLO/)); //7
   console.log(str.search(/LO\b/)); //3
   console.log(str.search("blue")); //30
   console.log(str.search(/blue/i)); //25
   console.log(str.match(/blue/g)); //(2) ["blue", "blue"]
   console.log(str.match(/blue/gi)); //(3) ["Blue", "blue", "blue"]

   console.log(1 == 1); // true
   console.log("1" == 1); //  true
   console.log(1 === 1); //  true
   console.log("1" === 1); // false

   var uno = "John";
   var dos = new String("John");
   console.log(typeof uno); //string
   console.log(typeof dos); //object
   console.log(uno == dos); //true
   console.log(uno === dos); //false

   var prueba = "Please locate where 'locate' occurs!";
   console.log(prueba.indexOf("locate")); //7
   console.log(prueba.indexOf("locate", 8)); //21
   console.log(prueba.lastIndexOf("locate")); //21
   console.log(prueba.lastIndexOf("locate", 20)); //7

   var str = "Apple, Banana, Kiwi";
   console.log(str.slice(7, 16)); //Banana, K (15+1)
   console.log(str.slice(7)); //Banana, Kiwi
   console.log(str.slice(-12, -6)); //Banana
   console.log(str.slice(-12)); //Banana, Kiwi
   console.log(str.substring(7, 13)); //Banana
   console.log(str.substring(7)); //Banana, Kiwi
   console.log(str.substr(7, 7)); //Banana,
   console.log(str.substr(7)); //Banana, Kiwi
   console.log(str.substr(-1)); //i

   var str = "Me, Ll@mo, DAVID, Castro, Castro";
   var str1 = "         1   Peruano    1        ";
   console.log(str.replace("Castro", "Quispe")); //Me, Ll@mo, DAVID, Quispe, Castro /reemplaza solo la primera coincidencia
   console.log(str.replace("CASTRO", "Quispe")); //ningun cambio
   console.log(str.replace(/david/i, "Jesús"), "aqui"); //Me, Ll@mo, Jesús, Castro, Castro/viceversa  funciona
   console.log(str.replace(/Castro/g, "Quispe")); //Me, llamo, DAVID, Quispe, Quispe
   console.log(str.toUpperCase()); //ME LL@MO DAVID CASTRO CASTRO
   console.log(str.toLocaleUpperCase()); //ME LL@MO DAVID CASTRO CASTRO
   console.log(str.toLocaleLowerCase()); //me, ll@mo, david, castro, castro
   console.log(str.toLowerCase()); //me, llamo, david, castro, castro
   console.log(str.concat(" + ", str1)); //Me, Ll@mo, DAVID, Castro, Castro +          1   Peruano    1
   console.log(str1.trim()); //1   Peruano    1
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