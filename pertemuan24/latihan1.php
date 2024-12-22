<?php
    require_once "movies_data.php";
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