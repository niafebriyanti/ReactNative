console.log("TUGAS 6 - OBJECT LITERAL\n");
/*
console.log("~~~ NOMOR 1 - Array to object ~~~\n");

function arrayToObject(arr) {
    var now = new Date();
    var yearNow = now.getFullYear();
    var age = 0;
    for (var i = 0; i < arr.length; i++){
        // if(arr[i][3] == null || arr[i][3] > yearNow){
        //     age = "Invalid Year"
        // }
        // else{
        //     age = yearNow - arr[i][3]
        // }
        var temp = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: yearNow - arr[i][3]
        }
        console.log(temp.firstName + " " + temp.lastName + ": ")
        console.log(temp)
    }
}

var input = [
    ["Abduh", "Muhammad", "male", "1992"],
    ["Ahmad", "Taufik", "male", "1985"],
    ["Audi", "Mayunda", "female", "1993"]
]

console.log(arrayToObject(input));

console.log("\n---------------------------------------------------\n");


console.log("~~~ NOMOR 2 - Shopping time ~~~\n");

function shoppingTime(memberId, money) {
    var stuff = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]

    var output = {
        memberId : memberId,
        money : money,
        listPurchased : [],
        changeMoney : 0
    }

    if(!memberId && !money){
        return "Mohon maaf, toko Hijau hanya berlaku untuk member saja";
    }
    else if(!memberId){
        return "Mohon maaf, toko Hijau hanya berlaku untuk member saja";
    }
    else if(money < 50000){
        return "Mohon maaf, uang tidak cukup";
    }
    else {
        for(var i = 0; i < stuff.length; i++){
            if(money >= stuff[i][1]){
                output.listPurchased.push(stuff[i][0])
                money -= stuff[i][1]
                output.changeMoney = money
            }
        }
        return output;
    }
  }



  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
  console.log(shoppingTime('82Ku8Ma742', 170000));
  console.log(shoppingTime('', 2475000)); 
  console.log(shoppingTime('234JdhweRxa53', 15000)); 
  console.log(shoppingTime()); 

console.log("\n---------------------------------------------------\n");
*/

console.log("~~~ NOMOR 2 - Naik angkot ~~~\n");

function naikAngkot(listPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var price = [];

    for(var i = 0; i < listPenumpang.length; i++){
        var start = rute.indexOf(listPenumpang[i][1])
        var finish = rute.indexOf(listPenumpang[i][2])
        var output = {
            penumpang : listPenumpang[i][0],
            naikDari : listPenumpang[i][1],
            tujuanAkhir : listPenumpang[i][2],
            bayar : (finish - start) * 2000
        }
        price.push(output)
    }
    return price
  }
   
  //TEST CASE
  console.log(naikAngkot([
      ['Dimitri', 'B', 'F'], 
      ['Icha', 'A', 'B']
    ]));
  
   
//   console.log(naikAngkot([])); //[]

  console.log("\n---------------------------------------------------\n");
