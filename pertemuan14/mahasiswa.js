class Mahasiswa{
    // Class mahasiswa
    // i. Property: nim, nama, jenis kelamin, dan ipk
    // ii. Method: predikat()

    constructor(nama,nim, ipk, jenisKelamin ){
        this.name = nama;
        this.nim = nim;
        this.ipk = ipk;
        this.gender = jenisKelamin;
    }

//     predikat()
// Kondisi Output
// ipk > 0 dan ipk < 2.0 Cukup
// ipk >= 2.0 dan ipk < 3.0 Baik
// ipk >= 3.0 dan ipk < 3.75 Memuaskan
// ipk >= 3.75 dan ipk <= 4 CumLaude
// Selain itu Tidak valid!

    predikat(){
        if(this.ipk > 3.75 && this.ipk <= 4){
            return "CumLaude";
        }else if(this.ipk >= 3.0 && this.ipk < 3.75){
            return "Memuaskan";
        }else if(this.ipk >= 2.0 && this.ipk < 3.0){
            return "Baik";
        }else if(this.ipk >= 0 && this.ipk < 2.0){
            return "Cukup";
        }else{
            return "Tidak Valid";
        }
    }
}

export default Mahasiswa;