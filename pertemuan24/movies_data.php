<?php
  // array masuk ke tipe data kolektif
  // object nanti masuk nya class
  
  $movies= [
        ['id' => 11, "title" => 'Budi Pekerti','genre' => 'Drama','produser' => "Adi",'release_year' => "2023"],
        ['id' => 12,'title' => 'Residen Evil','genre' => 'Action','produser' => "Azhar",'release_year' => "2015"],
        ['id' => 13,'title' => 'Toy Story 3','genre' => 'Action','produser' => "Fakhi",'release_year' => "2020"],
        ['id' => 14,'title' => 'Delisha','genre' => 'Action','produser' => "Fakhi",'release_year' => "2011"],
        ['id' => 15,'title' => 'Alita Battle Angle ','genre' => 'Action','produser' => "Robert",'release_year' => "2004"]
    ];

    //looping data $movies
    foreach($movies as $movie){
        echo 'id : ' . $movie['id'] ;
        // echo 'title : ' . $movie['title'];
        // echo 'genre : ' . $movie['genre'];
        // echo 'produser : ' . $movie['produser'];
        // echo 'release_year : ' . $movie['release_year'];
        // echo "<br>";
        
    }

?>