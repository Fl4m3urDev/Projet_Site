<html>
<body>
<?php
 function tableau($Pesanteur, $Instant) {
    $Y = $Pesanteur * $Instant * $Instant;
    return $Y;
}
$Pesanteur=$_POST['Pesanteur'];
$Instant=$_POST['Instant'];
echo "La somme est: ".tableau($Pesanteur, $Instant);
?>
</body>
</html>