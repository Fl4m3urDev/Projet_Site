<html lang="fr">

<head>

<title>Resultat Division PHP</title>

<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>

Quotient =
<?php
$Dividende = $_POST["txtDividende"];
$Diviseur = $_POST["txtDiviseur"];
$quotient = $Dividende / $Diviseur;
echo "$quotient"; ?><br>

</body>

</html>