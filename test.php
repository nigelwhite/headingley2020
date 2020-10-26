<?php
if(isset($_POST['name'])){
print_r($_POST);
echo "<br />";
// how to prevent script in inputs
$name = htmlentities($_POST['name']);
echo $name;
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>trying this</h1>
    <form action="test.php" method="POST">
        Name: <input type="text" name="name">
        Colour: <input type="text" name="colour">
        <input type="submit" value="submit">
        <input type="reset" value="reset">
    </form>
</body>
</html>

