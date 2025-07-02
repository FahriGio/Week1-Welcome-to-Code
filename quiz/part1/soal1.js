
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

let nama = "Giovani", peran = "Ksatria";
if(nama===""){
    console.log("nama wajib diisi");
}else if(peran===""){
    console.log("Pilih peranmu untuk memulai game");
}else{console.log("Selamat datang di dunia Proxytia, " + nama)}

if(peran==="Ksatria"){
    console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
}else if(peran==="Tabib"){
    console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka");
}else if(peran==="Penyihir"){
    console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
}else{console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")}


//code disini gunakan console.log untuk outputnya