console.log("TUGAS 5 - ARRAY\n");

console.log("~~~ NOMOR 1 - Array to object ~~~\n");

function arrayToObject(arr) {
    var result = [];
    var obj =[];
    for (var i = 0; i < arr.length; i++){
        var now = new Date();
        var yearNow = now.getFullYear();
        var temp = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[1][2],
            age: yearNow - (arr[i][3] * 1)
        }
        obj[res] = dataTemp;
        var res = i + 1 + ". " + arr[i][0] + " " + arr[i][1];
        var dataTemp = res + ":" + temp;
        
        result.push(dataTemp);
    }
    return result;
}

var input = [
    ["Abduh", "Muhammad", "male", "1992"],
    ["Ahmad", "Taufik", "male", "1985"]
]

console.log(arrayToObject(input));

console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 2 - Shopping time ~~~\n");



console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 2 - Naik angkot ~~~\n");