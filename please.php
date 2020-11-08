<?php

if(isset($_POST['fname'])){
$fname = htmlspecialchars($_POST['fname']);
$lname = htmlspecialchars($_POST['lname']);
$email = htmlspecialchars($_POST['email']);
$oldEmail = htmlspecialchars($_POST['oldEmail']);
// Chat
$chatAction = htmlspecialchars($_POST['chatAction']);
$chatDetails = htmlspecialchars($_POST['chatDetails']);
// Triangle
$triangleAction = htmlspecialchars($_POST['triangleAction']);
$triangleDetails = htmlspecialchars($_POST['triangleDetails']);
// Activists
$activistsAction = htmlspecialchars($_POST['activistsAction']);
$activistsDetails = htmlspecialchars($_POST['activistsDetails']);




// general stuff
echo 'Name: '.$fname.' '.$lname;
echo "<br />";
echo 'Email: '.$email;
echo "<br />";
echo 'Old email: '.$oldEmail;
echo "<br /><hr/>";
// chat stuff
echo 'CHAT<br/>';
echo 'Action: '.$chatAction;
echo "<br />";
echo 'Details: '.$chatDetails;
echo "<br />";
// triangle stuff
echo 'TRIANGLE<br/>';
echo 'Action: '.$triangleAction;
echo "<br />";
echo 'Details: '.$triangleDetails;
echo "<br />";
// chat stuff
echo 'ACTIVISTS<br/>';
echo 'Action: '.$activistsAction;
echo "<br />";
echo 'Details: '.$activistsDetails;
// redirect
echo file_get_contents("thanks.html");

}



?>