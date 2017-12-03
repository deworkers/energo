<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'ff.wolf@yandex.ru, Kosmetika66@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Сообщение с сайта verona96.ru'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Страница: '.$_POST['page'].'</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>                        
                        <p>E-mail: '.$_POST['email'].'</p>
                        <p>Сообщение: <br> '.$_POST['text'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: verona96.ru <info@verona96.ru>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>