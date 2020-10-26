<?php

if(!empty($_POST['fname'])){
print_r($_POST);
echo "<br />";
// sanitise
$fname = htmlentities($_POST['fname']);
echo $fname;
$lname = htmlentities($_POST['lname']);
echo $lname;
}
?>