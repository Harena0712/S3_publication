<?php
    // if (isset($_GET["name"])) 
    // {
    //     $nom = urldecode($_GET["name"]);
    //     $name = json_decode($nom, true);
    // }
    // echo $name['Nom'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="../assets/js/javascript.js"></script>
    <link href="../assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/style.css">
    <title>Document</title>
</head>
<body>
    <main class="container">
        <div class="pub bg-light col-md-6 rounded container shadow mt-4 p-4">
            <form id="form_pub" class="row">
                <textarea name="pub" id="pub" cols="60" rows="3" class="col-md-12 input"></textarea>
                <input type="submit" value="Publier" class="col-md-10 ms-5 mt-3 btn rounded btn-outline-violet">
            </form>
        </div>
    
        <div id="div_coms" class="coms bg-light col-md-6 rounded container shadow mt-4 p-4" style="display: none;">
            <div id="publication" class="col-md-12 mb-4 retour cont_pub p-3"></div>
        
            <hr/> 
            <!-- <p></p> -->
            <div id="commentaire" class="col-md-9 mb-4 retour p-3" style="display: none;"></div>
            
            <form id="form_coms" class="row ms-2">
                <input type="text" name="coms" id="coms" placeholder="Commentaire" class="col-md-9 input">
                <input type="submit" value="Commenter" class="col-md-2 ms-4 btn rounded btn-outline-violet">
            </form>
        </div>
    </main>
</body>
</html>