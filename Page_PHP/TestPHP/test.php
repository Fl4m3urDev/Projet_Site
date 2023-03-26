<html lang="fr">

<head>

<title>Titre de la page</title>

<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body> 

<?php

$t = date("H");

 

if ($t < "10") {

    echo "Have a good morning!";

} elseif ($t < "20") {

    echo "Have a good day!";

} else {

    echo "Have a good night!";

}

?>

</body>

</html>