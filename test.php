<?php

if(isset($_POST['perspective'])){

$perspective = htmlspecialchars($_POST['perspective']);
// $fname = htmlspecialchars($_POST['fname']);
// $lname = htmlspecialchars($_POST['lname']);
// $email = htmlspecialchars($_POST['email']);
// $oldEmail = htmlspecialchars($_POST['oldEmail']);
// // Chat
// $chatAction = htmlspecialchars($_POST['chatAction']);
// $chatDetails = htmlspecialchars($_POST['chatDetails']);
// // Triangle
// $triangleAction = htmlspecialchars($_POST['triangleAction']);
// $triangleDetails = htmlspecialchars($_POST['triangleDetails']);
// // Activists
// $activistsAction = htmlspecialchars($_POST['activistsAction']);
// $activistsDetails = htmlspecialchars($_POST['activistsDetails']);

echo $perspective;



echo file_get_contents("thanks.html");

}



?>