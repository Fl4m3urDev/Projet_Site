<html>
<body>
<?php
 function sum($Dividende, $Diviseur) {
    $Somme = $Dividende / $Diviseur;
    return $Somme;
}
$Dividende=$_POST['Dividende'];
$Diviseur=$_POST['Diviseur'];
echo "La somme est: ".sum($Dividende, $Diviseur);
?>
</body>
</html>