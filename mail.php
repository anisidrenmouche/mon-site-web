<?php
if ($_POST) {
  $fisrtname = $_POST['fisrtname'];
  $email  =  $_POST['email'];
  $lastname  =  $_POST['lastname'];
  $phone = $_POST['phone'];
  
  $headers  =  "Version MIME: 1.0\r\n"; // header mail format
  $headers  .=  "Type de contenu: text/plain; charset=iso-8859-1\r\n";
  $headers  .=  "De: $lastname <$email>\r\n Répondre à: $lastname <$email>\r\n X-Mailer: PHP";
  
  $message  =  $_POST['message'] . "\r\n Mail de : " . $_POST['firstname'] . " " . $_POST['lastname'] . '(tél. : ' . $_POST['phone'] . ')';
  
  $subject = "Prise de contact depuis le porte folio";
  $destinataire = "anisidrenmouche@hotmail.fr";
  if (mail($destinataire, $subject, $message, $headers)) {
    $response['status'] = 'success' ;
    $response['msg'] = 'votre courrier est envoyé' ;
  } else {
    $response['status'] = 'error' ;
    $response['msg'] =  'Une erreur' ;
  }
  header('Location:index.html');
}
?>
 
	