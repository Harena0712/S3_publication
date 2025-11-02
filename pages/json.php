<?php
	include('../inc/fonction.php');
	header( "Content-Type: application/json"); 

	$email = null;
	$mdp = null;
	if (isset($_POST["email"]) && isset($_POST["mdp"])) 
	{
		$email = $_POST["email"];
		$mdp = $_POST["mdp"];
		$retour = login($email, $mdp);
	}
	
	$pub = null;
	if (isset($_POST["pub"])) 
	{
		$retour = $_POST["pub"];
	}

	$coms = null;
	if (isset($_POST["coms"])) 
	{
		$retour = $_POST["coms"];
	}
	// sleep(3);
	echo json_encode($retour);
?>