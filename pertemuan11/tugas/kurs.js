// let 
function conversi(){
  let asing =  document.getElementById("uang_asing").value;
  
  // let hasil = asing * 15937;

let tukar = document.getElementById("nilaiTukar").value;
let hasil = null;
// kita ambil nilai dari select

if(tukar === "UStoRp"){
     hasil = asing * 15937;
}else if(tukar === "SGtoRp"){
     hasil = asing * 11857;
}else if(tukar === "RtoRp"){
    hasil = asing * 3535;
}else if(tukar === "YtoRp"){
    hasil = asing * 107;
}else if(tukar === "EUtoRp"){
    hasil = asing * 16765;
}else if(tukar === "RoRp"){
    hasil = asing * 4244;
}

    document.getElementById("rupiah").value = hasil;
}


