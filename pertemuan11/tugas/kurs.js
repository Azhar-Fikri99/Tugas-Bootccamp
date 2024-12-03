// let 
function conversi(){
  let asing =  document.getElementById("uang_asing").value;
  
  let hasil = asing * 15937;

// let tukar = document.getElementById("nilaiTukar").value;
// let hasil = null;
// kita ambil nilai dari select
// if(tukar === "UStoRp"){
//      hasil = asing * 15937;
// }else if(tukar === "SGtoRp"){
//      hasil = asing * 11857;
// }else if(tukar === "RtoRp"){
//     hasil = asing * 3535;
// }else if(tukar === "YtoRp"){
//     hasil = asing * 107;
// }else if(tukar === "EUtoRp"){
//     hasil = asing * 16765;
// }else if(tukar === "RoRp"){
//     hasil = asing * 4244;
// }

    document.getElementById("rupiah").value = hasil;
}




function invers(){
    let rupiah2 =  document.getElementById("rupiah").value;
  
    let hasil2 = rupiah2  / 15937;
  
    //  let tukar2 = document.getElementById("nilaiTukar").value;
//     let hasil2 = null;

//     if(tukar2 === "UStoRp"){
//         hasil2 = rupiah2 / 15937;
//    }else if(tukar2 === "SGtoRp"){
//         hasil2 = rupiah2 / 11857;
//    }else if(tukar2 === "RtoRp"){
//        hasil2 = rupiah2 / 3535;
//    }else if(tukar2 === "YtoRp"){
//        hasil2 = rupiah2 / 107;
//    }else if(tukar2 === "EUtoRp"){
//        hasil2 = rupiah2 / 16765;
//    }else if(tukar2 === "RoRp"){
//        hasil2 = rupiah2 / 4244;
//    }
   
       document.getElementById("rupiah").value = hasil2;
}