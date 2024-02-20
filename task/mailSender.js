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




// Get the phone number input field
const phoneNumberInput = document.getElementById('phone');

// Add event listener to listen for changes in the input value
phoneNumberInput.addEventListener('input', () => {
  // Retrieve the entered phone number value
  const phoneNumber = phoneNumberInput.value;

  // Regular expressions to match phone number patterns
  const mtnPattern = /^(\+234|0)803|806|810|813|814|816|903|906/;
  const gloPattern = /^(\+234|0)805|807|811|815|905|0705|0805|0807|0811|0815|0905/;
  const airtelPattern = /^(\+234|0)802|803|807|808|812|902|0701|0708|0802|0808|0812|0902/;
  const etisalatPattern = /^(\+234|0)809|810|818|908|0818|0908/;

  // Check the phone number against the patterns and update the UI
  if (mtnPattern.test(phoneNumber)) {
    // Display MTN logo
    // You can update the UI by adding the MTN logo image dynamically
  } else if (gloPattern.test(phoneNumber)) {
    // Display Glo logo
    // You can update the UI by adding the Glo logo image dynamically
  } else if (airtelPattern.test(phoneNumber)) {
    // Display Airtel logo
    // You can update the UI by adding the Airtel logo image dynamically
  } else if (etisalatPattern.test(phoneNumber)) {
    // Display Etisalat logo
    // You can update the UI by adding the Etisalat logo image dynamically
  } else {
    // No matching telecom provider found
    // You can update the UI to remove any previously displayed logo
  }
});