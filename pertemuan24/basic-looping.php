<?php
    for($x = 1; $x < 10; $x++){
        // echo '<br> Bilangan ' . $x;
    }

    // echo '<hr>';
    // cetak bilangan 10 s/d 1 dengan looping for
    for($y = 10; $y >= 1; $y--):
        // echo '<br/> Bilangan ' . $y; 
    endfor;


    //foreach  : khusus melakukan looping untuk element array
    // foreach pakai di aliaskan, cara nya pakai as
    // looping array

     //Multidimensional Array | di hitung bisa berdasarkan index dan/atau key
    // pakai associtive array, ada banyak cara sebener nya
    // ada 2 pengertian pada foreach, yaitu 
    // 1. bisa pakai key and value ,
    // 2. bisa pakai value saja
    // foreach ($variable as $key => $value) {
    //     # code...
    // }


    // foreach ($variable as $value) {
    //     # code...
    // }

    //===========================================================

    $courses2 = [
        'Mk01' => 'Pemrograman',
        'MK02' => 'Animasi',
        'Mk03' => 'Branding'    
    ];

    // kita coba tampilkan listing
    // echo "<ul>";
    // foreach($courses2 as $code => $course2b){

    //     echo "<li> Mata Kuliah $courses2 memiliki kode : $code </li>";
    //     echo "<li> Mata Kuliah $courses2 memiliki kode : $code </li>";
    //     echo "<li> Mata Kuliah $courses2 memiliki kode : $code </li>";
    // }
    // echo "</ul>";


    $movies_b = [
        'title' => 'Budi Pekerti',
        'genre' => 'Drama',
        'produser' => "Adi",
        'release_year' => "2023"
    ];

    $movies_b2 = [
        'title' => 'Residen Evil',
        'genre' => 'Action',
        'produser' => "Azhar",
        'release_year' => "2015"
    ];


    $movies_b3 = [
        'title' => 'Toy Story 3',
        'genre' => 'Action',
        'produser' => "Fakhi",
        'release_year' => "2020"
    ];

    $moviess_c =[$movies_b, $movies_b2, $movies_b3];



    $movies_d = [
        ["title" => 'Budi Pekerti','genre' => 'Drama','produser' => "Adi",'release_year' => "2023"],
        ['title' => 'Residen Evil','genre' => 'Action','produser' => "Azhar",'release_year' => "2015"],
        ['title' => 'Toy Story 3','genre' => 'Action','produser' => "Fakhi",'release_year' => "2020"],
    ];

    // foreach($courses2 as $id => $course){
    //     ECHO '<br/>' . $course  ;
    // }

    // tampilkan data title, genre, relase_year
    // Gunakan listing
    // print_r($courses2);
    // print_r($movies_d);

    
    // INFO : Kaau pakai aray untuk foreach itu, lebih baik pakai petik satu aja ('), karnea kalau petik 2, akan error
    // echo "<ul>";
    foreach($movies_d as $movie ){
        echo "<li>" . $movie['title'] . "</li>";        
        echo "<li>" . $movie['genre'] . "</li>";        
        echo "<li>" . $movie['produser'] . "</li>";        
        echo "<li>" . $movie['release_year'] . "</li>";       
    }
    // echo "</ul>";
?>