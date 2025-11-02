window.addEventListener("load", function () {
    if (document.getElementById("myForm")) 
    {
        console.log("index");
        // Accédez à l'élément form index
        var form = document.getElementById("myForm");
    
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // évite le submit par défaut
    
            var xhr = new XMLHttpRequest(); 
            var formData = new FormData(form);
    
            xhr.open("POST", "./pages/json.php", true);
    
            // Quand la requête est terminée
            xhr.onreadystatechange = function() 
            {
                if(xhr.readyState  == 4)
                {
                    if(xhr.status  == 200) 
                    {
                        var retour = JSON.parse(xhr.responseText);
                        console.log(xhr.responseText);
    
                        if (retour != "non") 
                        {
                            var retourstr = JSON.stringify(retour);
                            window.location.href = "./pages/accueil.php?name=" + retourstr;
                        }
                        else
                        {
                            var resultat = document.getElementById("retour");
                            resultat.style.display = "block";
                            resultat.textContent = "Email ou mot de passe incorrect !";
                        }
                    } 
                    else 
                    {
                        document.dyn="Error code " + xhr.status;
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
    }

    if (document.getElementById("form_pub")) {
        console.log("dedans");
        // Accédez à l'élément form publication
        var form_pub = document.getElementById("form_pub");
    
        form_pub.addEventListener("submit", function (event) {
            event.preventDefault(); // évite le submit par défaut
    
            var xhr = new XMLHttpRequest(); 
            var formData = new FormData(form_pub);
    
            xhr.open("POST", "json.php", true);
    
            // Quand la requête est terminée
            xhr.onreadystatechange = function() 
            {
                if(xhr.readyState  == 4)
                {
                    if(xhr.status  == 200) 
                    {
                        var retour = JSON.parse(xhr.responseText);
                        console.log(xhr.responseText);
                        var publication = document.getElementById("publication");
                        publication.textContent = retour;
                        
                        var div_coms = document.getElementById("div_coms");
                        div_coms.style.display = "block";
                        
                        var pub = document.getElementById("pub");
                        pub.textContent = "";
                        
                    } 
                    else 
                    {
                        document.dyn="Error code " + xhr.status;
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
    } 

    
    if (document.getElementById("form_coms")) {
        console.log("coms");
        // Accédez à l'élément form publication
        var form_coms = document.getElementById("form_coms");
    
        form_coms.addEventListener("submit", function (event) {
            event.preventDefault(); // évite le submit par défaut
    
            var xhr = new XMLHttpRequest(); 
            var formData = new FormData(form_coms);
            
            xhr.open("POST", "json.php", true);
    
            // Quand la requête est terminée
            xhr.onreadystatechange = function() 
            {
                if(xhr.readyState  == 4)
                {
                    if(xhr.status  == 200) 
                    {
                        var retour = JSON.parse(xhr.responseText);
                        var commentaire = document.getElementById("commentaire");
                        commentaire.textContent = retour;
                        commentaire.style.display = "block";

                        var coms = document.getElementById("coms");
                        coms.textContent = "";
                    } 
                    else 
                    {
                        document.dyn="Error code " + xhr.status;
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
    } 
});