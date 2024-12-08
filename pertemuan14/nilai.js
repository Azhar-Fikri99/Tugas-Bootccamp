class Nilai{
    //    Class nilai
    // i. Property: mata kuliah, nilai
    // ii. Method: grade(), getHasil()
    constructor(mata_kuliah, nilai){
        this.mata_kuliah = mata_kuliah;
        this.nilai = nilai;
    }

    grade(){
        if(this.nilai >= 85 && this.nilai <= 100){
            return "A";
        }else if(this.nilai >= 70 && this.nilai <= 84){
            return "B";
        }else if(this.nilai >= 56 && this.nilai <= 69){
            return "C";
        }else if(this.nilai >= 36 && this.nilai <= 55){
            return "D";
        }else if(this.nilai >= 0 && this.nilai <= 35){
            return "E";
        }else{
            return "tidak valid";
        }
    }

    getHasil(){
        if(this.nilai <= 60){
            return "Tidak Lulus";
        }else if(this.nilai > 60){
            return "Lulus";
        }else{
            return "Tidak Valid";
        }
    }
}

export default Nilai 