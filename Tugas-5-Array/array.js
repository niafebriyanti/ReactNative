console.log("TUGAS 5 - ARRAY\n");

console.log("~~~ NOMOR 1 - Range ~~~\n");

console.log("Nomer 1");
function range(startNum, finishNum) {
  if (!startNum || !finishNum) {
    return -1;
  } 
  else {
    var result = [];
    if (startNum < finishNum) {
      for (var i = startNum; i <= finishNum; i++) {
        result.push(i);
      }
    } 
    else {
      for (var i = startNum; i >= finishNum; i--) {
        result.push(i);
      }
    }
    return result;
  }
}
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

console.log("\n---------------------------------------------------\n");


console.log("~~~ NOMOR 2 - Range with step ~~~\n");

function rangeWithStep(startNum, finishNum, step = 1){
    if (!startNum || !finishNum){
        return -1;
    }
    else {
        var result = [];
        if(startNum < finishNum){
            for(var i = startNum; i <= finishNum; i += step){
                result.push(i);
            }
        }
        else {
            for(var i = startNum; i >= finishNum; i -= step){
                result.push(i)
            }
        }
    return result;    
    }
}
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 3 - Sum of range ~~~\n");

function sum(startNum, finishNum, step){
    var array = [];
    var total = 0;
    if (!startNum && !finishNum && !step){
        return 0;
    }
    else if (!step) {
        if (startNum < finishNum){
            for (var i = startNum; i <= finishNum; i++){
                total += i;
            }
            return total;
        }
        else if (startNum > finishNum){
            for(var i = startNum; i >= finishNum; i--){
                total += i;
            }
            return total;
        }
        else if(!startNum || !finishNum){
            return 1;
        }
    }
    else{
        if (startNum < finishNum){
            for (var i = startNum; i <= finishNum; i += step){
                total += i;
            }
            return total;
        }
        else if(startNum > finishNum){
            for(var i = startNum; i >= finishNum; i -= step){
                total += i;
            }
            return total
        }
        else if(!startNum || !finishNum){
            return 1;
        }
    }
}
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 4 - Array multidimensi ~~~\n");

function dataHandling(data) {
    for (var i = 0; i < data.length; i++) {
      var dataa = data[i];
      console.log(
        `Nomor ID: ${dataa[0]} \nNama Lengkap: ${dataa[1]} \nTTL: ${dataa[2]} ${dataa[3]} \nHobi: ${dataa[4]} \n`
      );
    }
  }

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 
dataHandling(input);

console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 5 - Balik kata ~~~\n");

function balikKata(kata){
	var katabaru = ""
	for(var i = kata.length - 1 ; i >= 0 ;i--){
		katabaru += kata[i];
	}
	return katabaru
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 6 - Metode array~~~\n");

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(textInput) {
    var addData = textInput.splice(4, 1, "Pria", "SMA Internasional Metro");
    var addName = textInput.splice(1, 1, "Roman Alamsyah Elsharawy");
    var addProvince = textInput.splice(2, 1, "Provinsi Bandar Lampung");
    console.log(textInput);
  
    var splitDate = textInput.splice(3, 1);
    var date = splitDate.toString().split("/");
    var month = date[1];
  
    switch (month) {
      case "01": {
        console.log("Januari");
        break;
      }
      case "02": {
        console.log("Februari");
        break;
      }
      case "03": {
        console.log("Maret");
        break;
      }
      case "04": {
        console.log("April");
        break;
      }
      case "05": {
        console.log("Mei");
        break;
      }
    }
  
    var sortDate = date.sort(function (a, b) {
      return b - a;
    });
    console.log(sortDate);
  
    var formattedDate = splitDate.toString().split("/").join("-");
    console.log(formattedDate);
  
    var name = textInput[1].toString().slice(0, 15);
    console.log(name);
  }

dataHandling2(input);
