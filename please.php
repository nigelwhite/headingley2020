<?php

if(isset($_POST['fname'])){
$interests = htmlspecialchars($_POST['interests']);

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
// joining details
$street = htmlspecialchars($_POST['street']);
$postcode = htmlspecialchars($_POST['postcode']);
$perspective = htmlspecialchars($_POST['perspective']);
$myHope = htmlspecialchars($_POST['myHope']);





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
echo "<br />";
// joining stuff
echo 'Street: '.$street;
echo "<br />";
echo 'Postcode: '.$postcode;
echo "<br />";
echo 'Perspective: '.$perspective;
echo "<br />";
echo 'My hope in joining: '.$myHope;
// redirect
echo file_get_contents("thanks.html");

}



?>