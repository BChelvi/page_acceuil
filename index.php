<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">

</head>
<body onload=init()>

    <container class="container">
        <header>

        </header>
        
        <nav class="navbar navbar-dark navbar-expand-md bg-color-1 sticky-top py-2">
            <div class="container-fluid">
                <div class="navbar-brand p-0" href="#" style="width:40px; height: 40px;">
                    <!-- <img src="./ma_page/assets/img/user.png" alt="" style="object-fit:cover;"
                        class="d-inline-block align-text-top rounded-circle w-100 h-100"> -->
                    <button class="btn btn-sm p-0" type="button">
                    <?php 
                                    if(isset($_SESSION["username"])) 
                                    echo "<img src='./img/user.jpg'  style='width:40px; height: 40px; border-radius:50%'>";
                                    else
                                    echo "<img src='./img/visiteur.png' style='width:40px; height: 40px; border-radius:50%'>";
                                    ?>
                        
                    
                    </button>
                    </div>
    
                <a class="nav-item nav-link disabled text-white">Bienvenue</a>
                <div><?php 
                                    if(isset($_SESSION["username"])) 
                                    echo "<form  action='logout.php' class='mx-2'><button type='submit'> Se déconnecter</button></form>";
                                    else
                                    echo "<div   onclick='connec()' action=''><button type=''> Se connecter</button></div>";
                                    ?>
                        </div>
    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Réalisations</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#">Liens utiles</a>
                        </li> -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Liens
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item disabled" href="#">Github</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://robert-michael-marco.e-osengo.fr/mes_travaux/7_liste_des_eleves/v2/index.html">Mes Camarades</a></li>
                                <li><a class="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://chelvi-sandin-benjamin-luc.e-osengo.fr/projets/whatsapp/v2/index.php">Messagerie</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                        </path>
                                    </svg>
                                </span>
                                <input type="text" class="form-control" placeholder="Chercher un projet" aria-label="search-bar" aria-describedby="search-bar" id="recherche">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main>
            
            <div id="canvas-bloc" class="">
                <canvas  id="Canvas1" class="d-flex"></canvas>
                <canvas  id="Canvas2" class="d-none"></canvas>
            </div>
            

            

        </main>

        <footer>

        </footer>


    </container>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="./main.js"></script>
</body>
</html>