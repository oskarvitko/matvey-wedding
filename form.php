<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

$BOT_TOKEN = '6891137193:AAEgXMdu4Kd7x91MyAqxKaZjqrcp8TDv7yY';
$CHAT_IDS = ['668975944', '432613891'];

$apiURL = "https://api.telegram.org/bot" . $BOT_TOKEN . "/sendMessage";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body = file_get_contents("php://input");
    $json =   $requestData = json_decode($body, true);

    $result = true;
    foreach ($CHAT_IDS as $chatId) {
        $message = "✨ Гость оставил свои данные:\nИмя: " . $json['name'] . "\nФамилия: " . $json['surname'];

        if ($json['comment'] !== "") {
            $message = $message . "\nКомментарий: " . $json['comment'];
        }

        $message = $message . "\n";

        if ($json['willBe'] === true) {
            $message .= '✅ Присутствие подтверждено';
        } else {
            $message .= '⛔️ Гость будет отсутствовать';
        }

        $data = [
            'chat_id' => $chatId,
            'text' => $message,
        ];

        $options = [
            'http' => [
                'method' => 'POST',
                'header' => 'Content-Type: application/x-www-form-urlencoded',
                'content' => http_build_query($data),
            ],
        ];

        $context = stream_context_create($options);
        $response = file_get_contents($apiURL, false, $context);

        if ($repsonse === false) {
            $result = false;
        }
    }

    if ($result === false) {
        echo "Ошибка при отправке сообщения в Telegram!";
    } else {
        echo "Сообщение успешно отправлено в Telegram!";
    }
}
