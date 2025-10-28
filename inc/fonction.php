<?php
    include('connexion.php');

    function login($email)
    {
        $sql = "SELECT email FROM membre WHERE email = '%s'";
        $sql = sprintf($sql,$email);
        $requet = dbconnect()->query($sql);
        $rep_mail = $requet->fetch_assoc();
        if ($rep_mail) 
        {
            return;
        }
        else
        {
            return 1;
        }
    }
?>