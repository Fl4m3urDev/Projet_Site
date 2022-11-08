<html lang="fr">

<head>

<title>Resultat Dilatation du Temps PHP</title>

<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>

Durée écoulée sur la terre =
<?php
define("vitesselumiere", 300000);
$VitesseFusee = $_POST["txtVitesseFusee"];
$DureeEcouleeFusee = $_POST["txtDureeEcouleeFusee"];
$Resultat = $DureeEcouleeFusee / sqrt (1 - (pow ($VitesseFusee,2) / pow (vitesselumiere,2)));
echo "$Resultat"; ?><br>

</body>

</html>