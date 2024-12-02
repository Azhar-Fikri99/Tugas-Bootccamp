// gaji_pegawai

// pakai cara if dan inputan user
// informasi

alert("Ini Daftar Gaji Pegawai\n(*) Golongan_1 : Rp. 10.000.000 \n(*) Golongan_2 : Rp. 15.000.000 \n(*) Golongan_3 : Rp. 20.000.000\n\nMasukkan tingkatan Golongan Pegawai dengan kode dibawah yaitu\ng1 adalah Golongan_1\ng2 adalah Golongan_2\ng3 adalah Golongan_1");


         // tunjangan
         let tunjangan = null;

        //  status
        // let status = if nikah + golongan = 2.000.000
 

        // output
        let txt = "";
        

        // inputan user
        let inputData = prompt("Cek Gaji Pegaawai dengan memasukan  ");
        

        // logika if 
        if(inputData === "g1"){
                let gaji = g1 + tunjangan;
                txt += `Anda masukan kode : ${inputData} <br> Gaji Pegawai Golongan_1 adalah Rp. ${gaji}`;
                let yellow = document.getElementById("gaji");
                yellow.innerHTML = txt;
                yellow.style.background = "yellow";
                yellow.style.textAlign = "center";

        }else if(inputData == "g2"){
            let nikah = prompt("Apakah Anda Sudah Menikah ? jawab : \"iya atau tidak\"");
            if(nikah === "iya" || nikah == 'ya' || nikah === 'YA'){                    
                let tunjangan = 2000000;
                let gaji = g2 + tunjangan;
                txt += `Anda masukan kode : ${inputData} <br> Gaji Pegawai Golongan_2 adalah Rp. ${gaji} (Gol + Tunjangan)`;
                let aqua = document.getElementById("gaji");
                aqua.innerHTML = txt;
                aqua.style.background = "aqua";
                aqua.style.textAlign = "Center";
            }else{
                // 15000000
                let gaji = g2 + tunjangan;
                txt += `Anda masukan kode : ${inputData} <br> Gaji Pegawai Golongan_2 adalah Rp. ${gaji} (Gol)`;
                let aqua = document.getElementById("gaji");
                aqua.innerHTML = txt;
                aqua.style.background = "aqua";
                aqua.style.textAlign = "Center";
            }
        }else if(inputData == "g3"){
                let gaji = g3 + tunjangan;
                txt += `Anda masukan kode : ${inputData} <br> Gaji Pegawai Golongan_3 adalah Rp. ${gaji}`;
                let green = document.getElementById("gaji");
                green.innerHTML = txt;
                green.style.background = "green";
                green.style.color= "White";
                green.style.textAlign = "Center";
        }else{
                txt += `Anda masukan kode : ${inputData} <br>  Golongan tidak valid `;
                let red = document.getElementById("gaji");
                red.innerHTML = txt;
                red.style.background = "red"; 
                red.style.color= "White";
                red.style.textAlign = "Center";
        }
