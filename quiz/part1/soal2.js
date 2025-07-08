let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 5; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

switch(bulan){
case 1:
    bulan = "January"
    break;
case 2:
    bulan = "Febuary"
    break;
case 3:
    bulan = "March"
    break;
case 4:
    bulan = "April"
    break;
case 5:
   bulan = "May"
    break;
case 6:
    bulan = "Juni"
    break;
case 7:
    bulan = "July"
    break;
case 8:
    bulan = "August"
    break;
case 9:
    bulan = "September"
    break;
case 10:
    bulan = "October"
    break;
case 11:
    bulan = "November"
    break;
case 12:
    bulan = "December"
    break;
default:
    console.log("Kaga ada bulan ampe 12")
}

console.log(tanggal, bulan, tahun)