//Les codes ci dessous sont executé lors que la page est chargée
window.addEventListener("load", function () {
    
  function sendData() {
    var xhr = new XMLHttpRequest(); 


    // Liez l'objet FormData et l'élément form
    var formData = new FormData(form);

    // Définissez ce qui se passe si la soumission s'est opérée avec succès
    xhr.addEventListener("load", function(event) {
      $msg=(event.target.responseText!="")?event.target.responseText:"OK";
      alert($msg);
    });

    // Definissez ce qui se passe en cas d'erreur
    xhr.addEventListener("error", function(event) {
      alert('Oups! Quelque chose s\'est mal passé.');
    });

    // Configurez la requête
    xhr.open("POST", "formulaire.php");

    // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
    xhr.send(formData);
  }

    function submitForm()
    { 
        var email = document.getElementById("email").value;
        console.log(num);
        var xhr = new XMLHttpRequest(); 

        xhr.onreadystatechange  = function()
        { 
            if(xhr.readyState  == 4)
            {
                if(xhr.status  == 200) 
                {
                    var retour = JSON.parse(xhr.responseText);
                    console.log(xhr.responseText);

                    var resultat = document.getElementById("retour");
            
                    resultat.value = retour;
                } 
                else 
                {
                    document.dyn="Error code " + xhr.status;
                }
            }
        }; 
        //XMLHttpRequest.open(method, url, async)
        xhr.open("GET", "json.php?email=" + email,  true); 
        
        //XMLHttpRequest.send(body)
        xhr.send(null); 
    }

    // Accédez à l'élément form …
    var form = document.getElementById("myForm");

    // … et prenez en charge l'événement submit.
    form.addEventListener("submit", function (event) {
    event.preventDefault(); // évite de faire le submit par défaut

    sendData();
  });
});