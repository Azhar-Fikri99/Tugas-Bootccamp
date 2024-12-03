// luas lingkaran
// let phi = 3.14;
// let r = null;
// let luas = phi * r**2;
// let keliling = 2 * phi * r;


// let totalKEliling = 



function lingkaran(a,b){    
    let phi = 3.14;
    let r = null;
    // let luas = phi * r**2;
    let jari_jari = document.getElementById("jari").value;
    // let luas =  phi * jari_jari ** 2;
    let luas =  phi * jari_jari ** 2;        
    let keliling = 2 * phi * jari_jari;
    let hasil = `Luas :   ${luas}  keliling : ${keliling}`;
    document.getElementById("hasil").innerHTML = hasil; 
     
}


