console.log("TUGAS 4 - FUNCTION\n");
console.log("~~~ NOMOR 1 ~~~\n");

function teriak (){
    teriak = "Hallo Sanbers!";
    return teriak;
}

console.log(teriak());

console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 2 ~~~\n");

var num1
var num2
function kalikan(num1 = 12, num2 = 4) {
    return num1 * num2;
}
console.log(kalikan());

//ATAU

var hasilKali
var hasilKali = function(num1, num2) {
    return num1 * num2
}
console.log(hasilKali(12, 4))


console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 3 ~~~\n");

var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
function introduce(){
    return "Nama saya " + name + ", Umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobi yaitu " + hobby + "."
}

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);