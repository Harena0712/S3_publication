<?php
    include('connexion.php');

    function login($email, $mdp)
    {
        $sql = "SELECT Nom FROM publication_membre WHERE email = '%s' AND mdp = '%s'";
        $sql = sprintf($sql, $email, $mdp);
        $requet = dbconnect()->query($sql);
        $rep_mail = $requet->fetch_assoc();
        if ($rep_mail) 
        {
            return $rep_mail;
            fermerConnexion(dbconnect());
        }
        else
        {
            return "non";
            fermerConnexion(dbconnect());
        }
    }
?>