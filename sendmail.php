
<?php 
if (isset($_POST['sendermail'])) { 
    $ToEmail = 'b6@b6.hu'; 
    $EmailSubject = 'Site contact form'; 
    $mailheader = "MIME-Version: 1.0" . "\r\n";
    $mailheader .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $mailheader .= "From: ".$_POST["sendermail"]."\r\n"; 
    $mailheader .= "Reply-To: ".$_POST["sendermail"]."\r\n"; 
    $MESSAGE_BODY = "Name: ".$_POST["sendername"].""; 
    $MESSAGE_BODY .= "Email: ".$_POST["sendermail"].""; 
    $MESSAGE_BODY .= "Comment: ".nl2br($_POST["comment"]).""; 
    if (mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader)){ 
        echo '<script>alert("Your message was sent!");</script>';
    } else { 
        echo '<script>alert("Your message was not sent!");</script>';
    }
    unset($_POST['sendermail']);
    unset($_POST['sendername']);
    unset($_POST['comment']);
}
?>
<script>
    window.close();
</script>
