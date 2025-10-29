<?php
    include('connexion.php');

    function login($email)
    {
        $sql = "SELECT email FROM publication_membre WHERE email = '%s'";
        $sql = sprintf($sql,$email);
        $requet = dbconnect()->query($sql);
        $rep_mail = $requet->fetch_assoc();
        if ($rep_mail) 
        {
            return ;
            fermerConnexion(dbconnect());
        }
        else
        {
            return 1;
            fermerConnexion(dbconnect());
        }
    }
?>