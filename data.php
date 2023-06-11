<?php
$music = file_get_contents('data.json');

header('Content-Type: application/json');

// echo json_encode($music);
echo $music;
