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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'>
    <title>Daftar Film Terbaru</title>
</head>
<body>

    <!-- 
        div
        -h1
        -table
        --thead
        ---tr
        ---th
        ---tbody
        ---tr
        ----td

-->
    <div class="container">
    <h1 class='text-center mt-5-mb-4'>Daftar Film terbaru</h1>
    <table class = 'table table-striped table-hover'>
        <thead class='table-dark'>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Release Year</th>
                <th>Country</th>
            </tr>
        </thead>
         <tbody>
                <?php 
                // INI kita id nya di mulai dari 11
                // karean id gak boleh di tampilin, maka nya kita buat sebuah variable
                $no = 11  ;
                foreach($movies as $movie):
                ?> 
                   <tr>
                        <td><?= $no++;?></td>
                        <td><?php echo  $movie['title'];  ?> </td>
                        <td><?php echo  $movie['genre'];  ?> </td>
                        <td><?php echo  $movie['produser'];  ?> </td>
                        <td><?php echo  $movie['release_year'];  ?> </td>
                    </tr>
            
             <?php endforeach; ?>
          </tbody>
    </table>
</div> 
</body>
</html>