// créer une variable pour stocker la 'base de données' des produits dans
var products;

// utiliser fetch pour le récupérer et signaler toutes les erreurs
// qui se produisent dans l'opération de récupération
// une fois que les produits ont été chargés et formatés avec succès en tant qu'objet JSON
// en utilisant response.json(), exécutez la fonction initialize()
fetch('produits.json').then(function (response) {
  if (response.ok) {
    response.json().then(function (json) {
      products = json;
      initialize();
    });
  } else {
    console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
  }
});

// configure la logique de l'application, déclare les variables requises,
// contient toutes les autres fonctions
function initialize() {
  // récupérer les éléments de l'interface utilisateur que nous devons manipuler
  var category = document.querySelector('#category');
  var searchTerm = document.querySelector('#searchTerm');
  var searchBtn = document.querySelector('button');
  var main = document.querySelector('main');
  var nutri = document.querySelector('#nutri');

  // conserver une trace de la dernière catégorie et du dernier terme de recherche saisis
  var lastCategory = category.value;
  // idem pour nutri-score
  var lastnutri = nutri.value;
  // aucune recherche n'a encore été effectuée
  var lastSearch = '';

  // ceux-ci contiennent les résultats du filtrage par catégorie et par terme de recherche
  // finalGroup contiendra les produits qui doivent être affichés après
  // la recherche a été faite. Chacun sera un tableau contenant des objets
  // Chaque objet représentera un produit
  var categoryGroup = [];
  var finalGroup = [];

  // Pour commencer, définissez finalGroup pour qu'il soit égal à l'ensemble
  // de la base de données des produits
  // puis exécutez updateDisplay(), afin que TOUS les produits soient affichés initialement
  finalGroup = products;
  updateDisplay(); 

  // Définissez les deux pour qu'ils soient égaux à un tableau vide,
  // à temps pour que les recherches soient exécutées
  /* categoryGroup = [];
  finalGroup = []; */

  // lorsque le bouton de recherche est cliqué, invoquez selectCategory() pour démarrer
  // une recherche en cours pour sélectionner la catégorie de produits que nous souhaitons afficher
  searchBtn.onclick = selectCategory;

  function selectCategory(e) {
    // Utilisez preventDefault () pour arrêter la soumission du formulaire - cela ruinerait
    // l'expérience
    e.preventDefault();

    // Remettez-les à des tableaux vides, pour effacer la recherche précédente
    categoryGroup = [];
    finalGroup = [];

        lastnutri = nutri.value;
        lastCategory = category.value;
        lastSearch = searchTerm.value.trim();

        // les valeurs des éléments <option> sont en majuscules, tandis que les catégories
        // stocker dans le JSON (sous "type") sont en minuscules. Nous devons donc convertir
        // en minuscules avant de faire une comparaison
        var lowerCaseType = category.value.toLowerCase();
        for (var i = 0; i < products.length; i++) {
          // Si la propriété de type d'un produit est la même que la catégorie choisie, nous voulons
          // 'afficher, donc nous le poussons dans la catégorie Tableau de groupe
          if (products[i].type === lowerCaseType || category.value === 'All') {
          if (products[i].nutriscore === lastnutri || lastnutri === 'All'){
            categoryGroup.push(products[i]);
          }
        }
        // Exécutez select Products() une fois le filtrage terminé
        selectProducts();
      }
  }

  // selectProducts() Prend le groupe de produits sélectionné par selectCategory(), et plus loin
  // les filtre par le terme de recherche tnered (s'il a été saisi)
  function selectProducts() {
     // Si aucun terme de recherche n'a été saisi, il suffit de faire en sorte que le tableau finalGroup soit égal à categoryGroup
     // array — nous ne voulons pas filtrer davantage les produits — puis exécutez updateDisplay(). 
    if (searchTerm.value.trim() === '') {
      finalGroup = categoryGroup;
      updateDisplay();
    } else {
       // Assurez-vous que le terme de recherche est converti en minuscules
       // avant la comparaison. Nous avons gardé
       // les noms des produits sont en minuscules pour simplifier les choses 
      var lowerCaseSearchTerm = searchTerm.value.trim().toLowerCase();
       // Pour chaque produit dans categoryGroup, voir si le terme de recherche est contenu
       // dans le nom du produit (si le résultat indexOf() ne renvoie pas -1
       // cela signifie qu'il l'est) — si c'est le cas, alors poussez le produit sur le tableau finalGroup 
      for (var i = 0; i < categoryGroup.length; i++) {
        if (categoryGroup[i].nom.indexOf(lowerCaseSearchTerm) !== -1) {
          finalGroup.push(categoryGroup[i]);
        }
      }

      // exécuter updateDisplay() après ce deuxième tour de filtrage a été fait
      updateDisplay();
    }

  }

  // lancer le processus de mise à jour de l'affichage avec le nouvel ensemble de produits
  function updateDisplay() {
    // supprime le contenu précédent de l'élément <main>
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }

    // si aucun produit ne correspond au terme recherché, affiche un message "Aucun résultat à afficher"
    if (finalGroup.length === 0) {
      var para = document.createElement('p');
      para.textContent = 'Aucun résultat à afficher !';
      main.appendChild(para);
      // pour chaque produit que nous voulons afficher, passez son objet produit à fetchBlob()
    } else {
      modeAleatoire(finalGroup)
      for (var i = 0; i < finalGroup.length; i++) {
        showProduct(finalGroup[i]);
        console.log("showProduct")
      }
    }
  }

  /* mélangé le tableau finalGroup avec modeAléatoire */
  function modeAleatoire(arr){
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
  }

  // Affiche un produit dans l'élément <main>
  function showProduct(product) {
    // crée les éléments <section>, <h2>, <p> et <img>
    var section = document.createElement('section');
    var heading = document.createElement('h2');
    var para = document.createElement('p');
    var image = document.createElement('img');
    var nutri = document.createElement('p');

    // donnez à la <section> un nom de classe égal à la propriété "type"
    // du produit afin qu'il affiche la bonne icône
    section.setAttribute('class', product.type);

     // Donne le <h2> textContent égal à la propriété "nom" du produit, mais avec le premier caractère
     // remplacé par la version majuscule du premier caractère
    heading.textContent = product.nom.replace(product.nom.charAt(0), product.nom.charAt(0).toUpperCase());

     // Donne le <p> textContent égal à la propriété "prix" du produit, avec un signe $ devant
     // toFixed(2) est utilisé pour fixer le prix à 2 décimales, donc par exemple 1,40 est affiché
     // comme 1.40, pas 1.4.
    para.textContent = '€' + product.prix.toFixed(2);

    // Définissez le src de l'élément <img> sur l'ObjectURL et l'alt sur la propriété "nom" du produit
    image.src = 'images/' + product.image;
    image.alt = product.nom;
    nutri.textContent = product.nutriscore;
    nutri.style.marginRight = "155px";

    // ajoute les éléments au DOM le cas échéant, pour ajouter le produit à l'interface utilisateur
    main.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
    section.appendChild(image);
    section.appendChild(nutri);
  }
}
