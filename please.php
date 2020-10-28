<?php



// if honeypot not empty, show a success alert and exit
	// if honeypot empty, process POST data
		// if chatAction not 'none'
			// if chatAction = subscribe or unsubscribe, send simple email
			// if chatAction = change email address, send old address
			// if chatAction = other, send details
		// if triangleActio not 'none'
			// triangle email
		// if activistsAction not 'none'
			// activists email
		// show success alert
		
		



if(isset($_POST['fname'])){
// print_r($_POST);
// echo "<br />";
// sanitise
$fname = htmlspecialchars($_POST['fname']);
$lname = htmlspecialchars($_POST['lname']);
echo $fname.' '.$lname;
echo "<br />";
$email = htmlspecialchars($_POST['email']);
echo $email;
echo "<br />";
$oldEmail = htmlspecialchars($_POST['oldEmail']);
echo $oldEmail;
echo "<br />";
// chat stuff
$chatAction = htmlspecialchars($_POST['chatAction']);
echo $chatAction;
echo "<br />";
$chatDetails = htmlspecialchars($_POST['chatDetails']);
echo $chatDetails;
// show success message
// $msg = 'Thanks a bunch';

}



?>