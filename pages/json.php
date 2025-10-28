<?php
	include('./inc/fonction.php');
	header( "Content-Type: application/json"); 

	$email = $_GET["email"];
	$retour = login($email);
	// sleep(3);
	echo json_encode($retour);
?>