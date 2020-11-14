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
// assemble stuff
$name = $fname.' '.$lname;
$myDetails = '<p>My details<br/>
    Name: '.$name.'<br/>          
    Email: '.$email.'</p><hr/>';
// assemble chat
$chatBody = '';
if ($chatAction === 'subscribe Chat') {
        $chatBody = '<h2>Please subscribe me to Chat</h2>'.$myDetails;
    } elseif ($chatAction === 'unsubscribe Chat') {
        $chatBody = '<h2>Please unsubscribe me from Chat</h2>'.$myDetails;
    }


    if (! empty ($interests) || $perspective === 'dont reside here') {
        echo file_get_contents("thanks.html");
    }
    else {
            if ($chatAction != 'no action') {
                // chat email
                echo $chatBody;
            }
            
            if ($triangleAction != 'no action') {
                // triangle email
                echo 'TRIANGLE<br/>';
                echo 'Action: '.$triangleAction;
                echo "<br />";
                echo 'Details: '.$triangleDetails;
                echo "<br /><hr/>";
            }

            if ($activistsAction != 'no action') {
                // activists email
                echo 'ACTIVISTS<br/>';
                echo 'Action: '.$activistsAction;
                echo "<br />";
                echo 'Details: '.$activistsDetails;
                echo "<br /><hr/>";
            }



    // general stuff
    echo 'Name: '.$fname.' '.$lname;
    echo "<br />";
    echo 'Email: '.$email;
    echo "<br />";
    echo 'Old email: '.$oldEmail;
    echo "<br /><hr/>";
    
    
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
}



?>