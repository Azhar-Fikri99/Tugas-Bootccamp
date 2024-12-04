// Tulislah program untuk menghitung biaya parkir, yang dihitung berdasarkan lama parkir
// kendaraan yaitu selisih jam masuk dengan jam keluar kendaraan. 
// Jika parkir 2 jam pertama maka dikenakan biaya parkir 3.000 rupiah, 
// dan per jam berikut nya kena biaya tambahan yaitu : 1.000 rupiah.

function parkir(){
    // let harga = document.getElementById("harga");
    // harga.innerHTML = "BIAYA PARKIR 3000"
    let jamMasuk = Number(document.getElementById("masuk").value);
    let jamKeluar = Number(document.getElementById("keluar").value);


    // let total =  jamMasuk + jamKeluar;

    // let hasil = document.getElementById("harga").innerHTML = ": BIAYA PARKIR " + total;
    // console.log(typeof(hasil));
    
    let selisihWaktu = jamKeluar - jamMasuk ;
    let harga_1jam = 1000;
    let harga_2jam = 3000;
    let tambahanHarga = 1000;
    let jamHarga =  (selisihWaktu * 1000) + tambahanHarga ;

    if(selisihWaktu <= 2){        
        let hasil2 = document.getElementById("harga").innerHTML = ": BIAYA PARKIR " + harga_2jam;
    }else{
        let hasil2 = document.getElementById("harga").innerHTML = ": BIAYA PARKIR " + jamHarga;
    }
}

