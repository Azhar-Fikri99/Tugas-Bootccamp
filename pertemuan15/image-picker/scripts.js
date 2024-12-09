
$(document).ready(function(){
    $("#selectImg").change(function(){
        let picker = $(this).val();        
        let image = $("#imgFigure");

if(picker == "normal"){
    image.attr('src', 'img/Eevee.png');
    image.attr('width', 300);
    alert("ini adalah gambar Eevee");
}else if(picker == "fire"){
    image.attr('src', 'img/Flareon.png').attr('width', 300);
    alert("ini adalah gambar Flareon");
}else if(picker == "water"){
    image.attr('src', 'img/Vaporeion.png').attr('width', 300).attr('alt', "ini adalah gambar Vaporeion");
    alert("ini adalah gambar Vaporeion");
}else if(picker == "electric"){
    image.attr('src', 'img/Bolteon.png').attr('width', 300).attr('alt', "ini adalah gambar Bolteon");
    alert("ini adalah gambar Bolteon");
}else if(picker == "dark"){
    image.attr('src', 'img/Umbreon.png').attr('width', 300).attr('alt', "ini adalah gambar Umbreon");   
    alert("ini adalah gambar Umbreon");
}else if(picker == "psyhic"){
    image.attr('src', 'img/Espeon.png').attr('width', 300).attr('alt', "ini adalah gambar Espeon");   
    alert("ini adalah gambar Espeon");
}else if(picker == "grass"){
    image.attr('src', 'img/Leafeon.png').attr('width', 300).attr('alt', "ini adalah gambar Leafeon");   
    alert("ini adalah gambar Leafeon");
}else if(picker == "ice"){
    image.attr('src', 'img/Glaceon.png').attr('width', 300).attr('alt', "ini adalah gambar Glaceon");   
    alert("ini adalah gambar Glaceon");
}else{
    // image.alt = "Tidak ada gambar";
    alert("Tidak Valid");
}


    })
});
