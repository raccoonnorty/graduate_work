<?php
	$nameEasy = $_POST["nameEasy"];
	$emailEasy = $_POST["emailEasy"];

	$userDataEasy = "Данные пользователя:\r\n" ."Имя: $nameEasy\r\n" ."email: $emailEasy\r\n";

	$subject = "=?utf-8?B?".base64_encode("Поступила новая заявка с сайта")."?=";

	$headersEasy = "Content-type: text/html; charset=UTF-8" . "\r\n";
	$headersEasy = "From: raccoonorty.ru <info@raccoonorty.ru>\r\nReply-to: $emailEasy\r\n";

	$success = mail("makeroh77@gmail.com", $subject, $userDataEasy, $headersEasy);
	echo $success;
?>