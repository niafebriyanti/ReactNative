//TUGAS STRING
//Soal No. 1
var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';
console.log(word.concat(' ', second, ' ', third, ' ', fourth, ' ', fifth, ' ', sixth, ' ', seventh));

//Soal No. 2
var str = "I am going to be React Native Developer"; 

var exampleFirstWord = str.substr(0, 1); 
var exampleSecondWord = str.substr(2, 2); 
var exampleThirdWord = str.substr(5, 5);
var exampleFourthWord = str.substr(11, 2); 
var exampleFifthWord = str.substr(14, 2); 
var exampleSixthWord = str.substr(17, 5);  
var exampleSeventhWord = str.substr(23, 6); 
var exampleEighthWord = str.substr(30, 9);

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + exampleThirdWord); // do your own!
console.log('Fourth Word: ' + exampleFourthWord); // do your own!
console.log('Fifth Word: ' + exampleFifthWord); // do your own!
console.log('Sixth Word: ' + exampleSixthWord); // do your own!
console.log('Seventh Word: ' + exampleSeventhWord); // do your own!
console.log('Eighth Word: ' + exampleEighthWord); // do your own! 

//Soal No. 3
var str2 = 'wow JavaScript is so cool'; 

var firstWord2 = str2.substring(0, 3); 
var secondWord2 = str2.substring(4, 14); // do your own! 
var thirdWord2 = str2.substring(15, 17); // do your own! 
var fourthWord2 = str2.substring(18, 20); // do your own! 
var fifthWord2 = str2.substring(21, 25); // do your own! 

console.log('First Word: ' + firstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);

//Soal No. 4
var str3 = 'wow JavaScript is so cool'; 

var firstWord3 = str3.substring(0, 3); 
var secondWord3 = str3.substring(4, 14); // do your own! 
var thirdWord3 = str3.substring(15, 17); // do your own! 
var fourthWord3 = str3.substring(18, 20); // do your own! 
var fifthWord3 = str3.substring(21, 25); // do your own! 

var firstWordLength = firstWord3.length
var secondWordLength = secondWord3.length
var thirdWordLength = thirdWord3.length
var fourthWordLength = fourthWord3.length
var fifthWordLength = fifthWord3.length

console.log('First Word: ' + firstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength); 
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength); 
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength); 
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);




//TUGAS CONDITIONAL
//Soal if-else
var nama = "Jhon";
var peran = "Guard";


if (nama != " " && peran == " "){
    console.log("Hallo " + nama + ", Pilih peranmu untuk memulai game!");
}
else if (nama != " " && peran == "Penyihir"){
    console.log("Hallo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
}
else if (nama != " " && peran == "Guard"){
    console.log("Hallo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf!");
}
else if(nama != " " && peran == "Werewolf"){
    console.log("Hallo Werewolf " + nama + ", kamu akan memakan mangsa setiap malam!");
}
else {
    console.log("Nama harus diisi!")
}

//Soal Switch Case
var tanggal = 17; //assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 8; //assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; //assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal >= 1 && tanggal <= 31 && bulan >=1 && bulan <= 12 && tahun >= 1900 && tahun <=2200){
    switch (bulan) {
        case 1: {
            bulan = console.log(tanggal + " Januari " + tahun);
            break;
        }
        case 2: {
            bulan = console.log(tanggal + " Februari " + tahun);
            break;
        }
        case 3: {
            bulan = console.log(tanggal + " Maret " + tahun);
            break;
        }
        case 4: {
            bulan = console.log(tanggal + " April " + tahun);
            break;
        }
        case 5: {
            bulan = console.log(tanggal + " Mei " + tahun);
            break;
        }
        case 6: {
            bulan = console.log(tanggal + " Juni " + tahun);
            break;
        }
        case 7: {
            bulan = console.log(tanggal + " Juli " + tahun);
            break;
        }
        case 8: {
            bulan = console.log(tanggal + " Agustus " + tahun);
            break;
        }
        case 9: {
            bulan = console.log(tanggal + " September " + tahun);
            break; 
        }
        case 10: {
            bulan = console.log(tanggal + " Oktober " + tahun);
            break;
        }
        case 11: {
            bulan = console.log(tanggal + " November " + tahun);
            break;
        }
        case 12: {
            bulan = console.log(tanggal + " Desember " + tahun);
            break; 
        }   
        default:
            bulan = console.log("Masukkan format DD/MM/YYYY yang benar!");
    }
}
else{
    console.log("Masukkan format DD/MM/YYYY yang benar!");
}
