function balok(){

    // kita buat oop nya

    let panjangg = Number(document.getElementById("panjang").value);
    let lebarr = Number(document.getElementById("lebar").value);
    let tinggii = Number(document.getElementById("tinggi").value);


    // buat 1 object panjang
    let v = new Balok(panjangg, lebarr, tinggii);
    let pa = v.volmeBalok();
    let ke = v.kelilingBalok();
    let lu = v.luasBalok();


    document.getElementById("tampilanPanjang").textContent =  `Panjang nya adalah ${pa}, keliling nya adalah ${ke}, luas nya adalah ${lu}`;


}