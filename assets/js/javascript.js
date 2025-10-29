window.addEventListener("load", function () {
    
    // Accédez à l'élément form
    var form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // évite le submit par défaut

        var xhr = new XMLHttpRequest(); 
        var formData = new FormData(form);

        xhr.open("POST", "./pages/json.php", true);

        // Quand la requête est terminée
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        var retour = JSON.parse(xhr.responseText);
                        console.log(retour);

                        var resultat = document.getElementById("retour");
                        // Si 'retour' est un objet, affiche une propriété ou stringify
                        resultat.value = JSON.stringify(retour);
                    } catch(e) {
                        console.error("Erreur JSON : ", e);
                    }
                } else {
                    console.error("Erreur HTTP : " + xhr.status);
                }
            }
        };

        // En cas d'erreur réseau
        xhr.addEventListener("error", function(event) {
            alert("Oups! Quelque chose s'est mal passé.");
        });

        // Envoi des données du formulaire
        xhr.send(formData);
    });
});
