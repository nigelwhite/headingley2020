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
$myDetails = '<p>My details are -<br/>
    Name: '.$name.'<br/>          
    Email: '.$email.'</p><hr/>';
$joiningDetails = '<p>Note to admins: we are signing up a new person, so we want to be sure they are a genuine Headingley resident. You can tell by scanning the answers they give to these 4 questions. You do not need to check for accuracy - it is usually obvious.</p>
    <p>My street: '.$street.'<br/>
    My postcode: '.$postcode.'<br/>
    My perspective: '.$perspective.'<br/>
    My hope in joinng: '.$myHope.'</p>';
$thanksAdmin = '<hr/><p>PS (from Nigel).<br/> Dear admin volunteer - Many thanks for your work for the community.</p>';
// assemble chat
$chatBody = '';
if ($chatAction === 'subscribe Chat') {
        $chatBody = '<h2>Please subscribe me to Chat</h2>'.$myDetails.$joiningDetails.$thanksAdmin;
    } elseif ($chatAction === 'unsubscribe Chat') {
        $chatBody = '<h2>Please unsubscribe me from Chat</h2>'.$myDetails.$thanksAdmin;
    } elseif ($chatAction === 'change email Chat') {
        $chatBody = '<h2>Please change my email on Chat</h2>
        <p>These are my current details -<br/>
        Name: '.$name.'<br/>          
        Email: '.$email.'</p>
        <p>This is my old email: '.$oldEmail.'</p>'.$thanksAdmin;
    } elseif ($chatAction === 'other Chat') {
        $chatBody = '<h2>Please change my Chat settings as follows</h2>
        <p>'.$chatDetails.'</p>'.$myDetails.$thanksAdmin;
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
    // echo 'Name: '.$fname.' '.$lname;
    // echo "<br />";
    // echo 'Email: '.$email;
    // echo "<br />";
    // echo 'Old email: '.$oldEmail;
    // echo "<br /><hr/>";
    
    
    // // joining stuff
    // echo 'Street: '.$street;
    // echo "<br />";
    // echo 'Postcode: '.$postcode;
    // echo "<br />";
    // echo 'Perspective: '.$perspective;
    // echo "<br />";
    // echo 'My hope in joining: '.$myHope;
    // redirect
    echo file_get_contents("thanks.html");

    }
}



?>