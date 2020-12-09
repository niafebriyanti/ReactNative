
//TUGAS NO 1 - LOOPING WHILE
console.log("~~~ LOOPING WHILE ~~~~\n");
console.log("LOOPING PERTAMA\n");
var x = 2;
while (x !== 21) {
  if (x % 2 == 0)
    console.log(x + " - I love coding");
  x++;
}


console.log("\nLOOPING KEDUA\n");
var x = 20;
while (x !== 0) {
  if (x % 2 == 0)
    console.log(x + " - I will become a mobile developer");
  x--;
}

console.log("\n---------------------------------------------------\n")

//TUGAS NO 2 - LOOPING FOR
console.log("~~~ LOOPING FOR ~~~\n")
for (var y = 1; y <= 20; y++){
    if (y%2 != 0 && y%3 === 0) {
            console.log(y +  " - I Love Coding");
    }
    else if (y%2 == 0) {
            console.log(y + " - Berkualitas");   
    }
    else if (y%2 != 0) {
        console.log(y + " - Santai");
    }
}

console.log("\n---------------------------------------------------\n")


//TUGAS NO 3 - MEMBUAT PERSEGI PANJANG 
console.log("~~~ MEMBUAT PERSEGI PANJANG ~~~\n")
var pp = "";
for (a = 1; a <= 4; a++){
    for (b = 1; b <= 8; b++){
        pp += "#";
    }
    console.log(pp);
    pp = "";
}


console.log("\n---------------------------------------------------\n")


//Tugas NO 4 - MEMBUAT TANGGA
console.log("~~~ MEMBUAT TANGGA ~~~\n");
var tgg = "";
for (var i = 7; i >= 1; i--) {
    for (var j = i; j <= 7; j++) {
    tgg += "#";
       }
   console.log(tgg);
   tgg = "";
  }


console.log("\n---------------------------------------------------\n")

//TUGAS NO 5 - MEMBUAT PAPAN CATUR
console.log("~~~ MEMBUAT PAPAN CATUR ~~~\n");
var ukuran = 8; 
var papan = "";

for (var p = 0; p < ukuran; p++) {
  for (var q = 0; q < ukuran; q++) {
    if ((p + q) % 2 == 0)
      papan += " ";
    else
      papan += "#";
  }
  papan += "\n";
}

console.log(papan);