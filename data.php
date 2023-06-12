<?php

header('Content-Type: application/json');

$music = file_get_contents('data.json');

if (isset($_GET['disc'])) {
    $json_music = json_decode($music, true);
    $info = $json_music[$_GET['disc']];
    $response = json_encode($info);
} else {
    $response = $music;
}

// rispondere con il json
// echo json_encode($music);
echo $response;
