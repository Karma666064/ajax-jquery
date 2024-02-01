<?php

$test = $_POST['test'];

try echo json_encode($test);
catch (/Throwable $th) echo $th->getMessage();