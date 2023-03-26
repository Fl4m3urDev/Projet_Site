<?php
// On se  connecte, voir code du fichier connexion.php ci-dessus
include('connexion.php'); // once : le fichier ne peut être inclus qu'une fois
// Envoi de la requête vers MySQL
$query = $connexion->query("SELECT * FROM utilisateur LIMIT 1");
// Les résultats retournés par la requête seront traités en 'mode' objet
$query->setFetchMode(PDO::FETCH_OBJ);
// Parcours des enregistrements retournés par la requête : premier, deuxième…
while($enregistrement = $query->fetch())
{
  // Affichage des champs nom et prenom de la table 'utilisateur'
  echo '<h1>', $enregistrement->nom, ' ', $enregistrement->prenom, '</h1>';
  echo '<h2>', $enregistrement->mel, ' ', $enregistrement->mot_de_passe, '</h2>';
}
?>