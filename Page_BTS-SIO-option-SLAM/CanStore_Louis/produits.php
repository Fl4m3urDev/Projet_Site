<?php 
header("Content-type: application/json; charset=utf-8");
// On se connecte, voir cours
try {
    $dns = 'mysql:host=localhost;dbname=aspt1556_jardin'; // dbname : nom de la base
    $utilisateur = 'aspt1556_sio'; // root sur vos postes
    $motDePasse = 'aspt1556_bts'; // pas de mot de passe sur vos postes
    $connexion = new PDO( $dns, $utilisateur, $motDePasse );
    $connexion->exec('SET NAMES utf8');
  } catch (Exception $e) {
    echo "Connexion à MySQL impossible : ", $e->getMessage();
    die();
}

// Envoi de la requête vers MySQL
$select = $connexion->query("SELECT * FROM produits");
//reçu sous forme d'un seul tableau et transformation en Json
$produits = json_encode($select->fetchAll( PDO::FETCH_ASSOC ));
//$produits = json_encode( $array );

print_r ($produits);
?>