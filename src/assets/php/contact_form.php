<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Décodez les données envoyées par le frontend
$data = json_decode(file_get_contents("php://input"), true);

$my_mail = 'henan.noel@gmail.com';

if (empty($data['email'])) {
    echo json_encode(["success" => false, "message" => "Veuillez renseigner votre adresse email"]);
    exit;
} elseif (!preg_match("#^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$#i", $data['email'])) {
    echo json_encode(["success" => false, "message" => "Votre adresse email n'est pas valide"]);
    exit;
} elseif (empty($data['message'])) {
    echo json_encode(["success" => false, "message" => "Veuillez renseigner votre message"]);
    exit;
} else {
    $email = htmlspecialchars($data['email']);
    $message = htmlspecialchars($data['message']);
    $headers = 'From: ' . $email;

    if (mail($my_mail, 'Message de ' . $email, $message, $headers)) {
        echo json_encode(["success" => true, "message" => "Votre message a bien été envoyé"]);
    } else {
        echo json_encode(["success" => false, "message" => "Une erreur est survenue, veuillez réessayer"]);
    }
}
