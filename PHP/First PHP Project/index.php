<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First PHP Project</title>
</head>
<body>
    <form action="functions.php" method="get">
        <input type="text" name="num01" placeholder="number 1">
        <select name="oper">
            <label>Choose operation!</label>
            <option value="add">Add</option>
            <option value="sub">Subtract</option>
        </select>
        <input type="text" name="num02" placeholder="number 2">
        <button type="submit">Calculate!</button>
    </form>
</body>
</html>