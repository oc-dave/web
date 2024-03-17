const fullName = document.getElementById("fullName");
const title = document.getElementById("title");
const sender = document.getElementById("senderEmail");
const content = document.getElementById("content");

function senderEmail() {
    Email.send({
        Host: "smtp.your-smtp-server.com",
        Username: "your-username",
        Password: "your-password",
        To: "recipient@example.com",
        From: senderEmail,
        Subject: title,
        Body: `Full Name: ${fullName}<br><br>${content}`,
    }).then(function (message) {
        alert("Mail sent successfully");
    });
}



