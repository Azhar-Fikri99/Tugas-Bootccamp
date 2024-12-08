import Nilai from "./nilai.js"
import Mahasiswa from "./mahasiswa.js"

class NilaiMahasiswa{
    //     Class nilai_mahasiswa
    // i. Property: gunakan rest parameter untuk menerima parameter dari
    //              class nilai dan class mahasiswa
    // ii. Tidak ada method

    // constructor(id,nama,nim, ipk, jenisKelamin , mata_kuliah, nilai){
    constructor(id, ...resta){
        this.id = id;
        // this.mahasiswa2 = new Mahasiswa(nama,nim, ipk, jenisKelamin );
        // this.nilai2 = new Nilai(mata_kuliah, nilai);
        // Kita ubah ke resta
        this.mahasiswa2 = new Mahasiswa(...resta);
        this.nilai3 = new Nilai([4], resta[5]);
    }
}

export default NilaiMahasiswa;