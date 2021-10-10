<?php
	$name = $_POST["name"];
	$phone = $_POST["phone"];
	$email = $_POST["email"];

	$userData = "Данные пользователя:\r\n" ."Имя: $name\r\n" ."Номер телефона: $phone\r\n" ."email: $email\r\n";

	$subject = "=?utf-8?B?".base64_encode("Поступила новая заявка с сайта")."?=";
	$headers = "Content-type: text/html; charset=UTF-8" . "\r\n";
	$headers = "From: raccoonorty.ru <info@raccoonorty.ru>\r\nReply-to: $email\r\n";

	$success = mail("makeroh77@gmail.com", $subject, $userData, $headers);
	echo $success;
?>