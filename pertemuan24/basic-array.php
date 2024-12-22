<?php
  //php array
  
  //empty arrray
//   cara bikin array ada 2 cara yaitu 1. pakai array() , 2. pakai kurung siku []
    $fruits = array();
    $cars = [];


    //Array dan isi nya
    $movies= array('action', 'romance', 'horror');

    $brands = ['iphone', 'Samsnug', 'Blackberry'];

    // cetak array
    // var_dump($fruits);

    // print $fruits;
    // var_dump($cars);

    
    // Cetak
    // var_dump($movies);
    // print_r ($brands);

    // Array ada 2 jenis
    // simple array | di hitung berdasarkan index
    
    $courses = ['Pemrograman', 'Animasi', 'Branding'];
    var_dump($courses[0]);

    // Associative Array | di hitung berdasarkan key
    $courses2 = [
                    'Mk01' => 'Pemrograman',
                    'MK02' => 'Animasi',
                    'Mk03' => 'Branding'
    ];

    echo $courses2["MK02"];


    // di javascript, kalau ada key and value itu adalah object

    
    //Multidimensional Array | di hitung bisa berdasarkan index dan/atau key
    // pakai associtive array, ada banyak cara sebener nya
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

    // var_dump($moviess_c);
    print_r($moviess_c);


    $movies_d = [
        ['title' => 'Budi Pekerti','genre' => 'Drama','produser' => "Adi",'release_year' => "2023"],
        ['title' => 'Residen Evil','genre' => 'Action','produser' => "Azhar",'release_year' => "2015"],
        ['title' => 'Toy Story 3','genre' => 'Action','produser' => "Fakhi",'release_year' => "2020"],
    ];

    // print_r($movies_d );
    var_dump($movies_d );

?>