function sendEmail() {
    const fullName = document.getElementById("fullName").value;
    const title = document.getElementById("title").value;
    const senderEmail = document.getElementById("senderEmail").value;
    const content = document.getElementById("content").value;

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
