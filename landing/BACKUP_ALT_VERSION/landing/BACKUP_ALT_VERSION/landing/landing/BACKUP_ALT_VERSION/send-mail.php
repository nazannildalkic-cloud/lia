<?php
/**
 * NANIL Pulse - Einfaches PHP Mail Script (Fallback)
 * Wird genutzt, wenn Hosting KEIN Netlify nutzt.
 * 
 * SENSITIVE DATEN WERDEN HIER GESPEICHERT.
 * Dieses Skript leitet die Formulardaten an die E-Mail weiter.
 */

// Konfiguration
$to_email = "nazandalkic@gmail.com";
$from_email = "noreply@nanil-pulse.com"; // Muss oft eine Domain des Hosters sein

// Datenbereinigung
function clean_input($data) {
    if(is_array($data)) return "";
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Betreff
    $subject = "NANIL Pulse Anfrage: " . (isset($_POST["subject"]) ? clean_input($_POST["subject"]) : "Kontaktformular");
    if(isset($_POST['form-name'])) {
        $subject = "NANIL Pulse: Neue " . clean_input($_POST['form-name']);
    }

    // Felder
    $name = isset($_POST["name"]) ? clean_input($_POST["name"]) : "Unbekannt";
    $email = isset($_POST["email"]) ? clean_input($_POST["email"]) : "Keine Email";
    $message = isset($_POST["message"]) ? clean_input($_POST["message"]) : "";
    
    // Co-Founder spezifische Felder
    $linkedin = isset($_POST["url"]) ? clean_input($_POST["url"]) : ""; /* Falls URL Feld */
    
    // Email Body
    $body = "Neue Nachricht von der Website:\n\n";
    $body .= "Name: $name\n";
    $body .= "E-Mail: $email\n";
    if($linkedin) $body .= "LinkedIn: $linkedin\n";
    $body .= "\nNachricht:\n$message\n";
    
    // Header
    $headers = "From: $from_email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Senden
    if (mail($to_email, $subject, $body, $headers)) {
        // Erfolg
        echo "<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Danke</title><style>body{background:#050505;color:white;font-family:sans-serif;text-align:center;padding-top:100px;}</style></head><body>";
        echo "<h1>Vielen Dank!</h1><p>Ihre Nachricht wurde gesendet.</p>";
        echo "<p><a href='index.html' style='color:#d4af37'>Zurück zur Startseite</a></p>";
        echo "</body></html>";
    } else {
        // Fehler
        echo "Es gab einen Fehler beim Senden. Bitte schreiben Sie direkt an: " . $to_email;
    }
} else {
    // Wenn direkt aufgerufen
    header("Location: index.html");
    exit();
}
?>
