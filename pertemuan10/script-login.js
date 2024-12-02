// ===================================================================================================
// ===================================================================================================
// Login

// 1. Jika username “admin_nf” dan password “Digital75@NFA”, maka tampilkan “Selamat
//    datang! Anda login sebagai Administrator”.
// 2. Jika username “pegawai_nf” dan password “NFA123@dts”, maka tampilkan “Selamat
//    datang! Anda login sebagai Pegawai”.
// 3. Selain itu, tampilkan pesan “Username atau Password salah”
 
// inputan user
let username = prompt("Masukkan username : ");
let password = prompt("Masukkan Password : ");


// tampilan
let text = "";

if(username === Administrator ){
    if(password === passwdAdmin){      
        text += `Selamat datang! Anda login sebagai Administrator`;
        document.getElementById("jawaban").innerHTML = text
        document.getElementById("jawaban").style.background = "green";
        document.getElementById("jawaban").style.color = "white";
        document.getElementById("jawaban").style.textAlign = "center";
    }else{
        text += "Username atau Password salah";
        document.getElementById("jawaban").innerHTML = text
        document.getElementById("jawaban").style.background = "red";
        document.getElementById("jawaban").style.color = "white";
        document.getElementById("jawaban").style.textAlign = "center";
    }   
} else if(username === pegawai){
        if(password === passwdPegawai){      
            text += `Selamat datang! Anda login sebagai Pegawai`;
            document.getElementById("jawaban").innerHTML = text
            document.getElementById("jawaban").style.background = "green";
            document.getElementById("jawaban").style.color = "white";
            document.getElementById("jawaban").style.textAlign = "center";
        }else{
            text += "Username atau Password salah";
            document.getElementById("jawaban").innerHTML = text
            document.getElementById("jawaban").style.background = "red";
            document.getElementById("jawaban").style.color = "white";
            document.getElementById("jawaban").style.textAlign = "center";
        }
} else{
        text += "Username atau Password salah";
            document.getElementById("jawaban").innerHTML = text
            document.getElementById("jawaban").style.background = "red";
            document.getElementById("jawaban").style.color = "white";
            document.getElementById("jawaban").style.textAlign = "center";
}
