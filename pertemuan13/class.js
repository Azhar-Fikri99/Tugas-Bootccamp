
class Balok {

    constructor(panjang, lebar, tinggi){
        // this.panjang2=  Number(panjang);
        this.panjang2= panjang;
        this.lebar2 = lebar;
        this.tinggi2 = tinggi;
    }
    
    volmeBalok(){
        return this.panjang2 * this.lebar2 * this.tinggi2;
    }

    kelilingBalok(){
        return 4 *  ((this.panjang2)+ (this.lebar2) + (this.tinggi2)) ; 
    }

    luasBalok(){
        return 2 * [(this.panjang2 * this.lebar2) + (this.panjang2 * this.tinggi2) + (this.lebar2 * this.tinggi2)]; 
    }

}