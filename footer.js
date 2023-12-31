function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_o402gph";
    const templateID = "template_c7pw7em";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent succesfully");
        })
        .catch((err) => console.log(err));
}



// Initialize EmailJS with your user ID
emailjs.init("service_o73k35p");

document.getElementById('checkDosen').addEventListener('change', function () {
  if (this.checked) {
    showPopupForm();
  }
});

function showPopupForm() {
  // Show the modal using Bootstrap's modal method
  const popupModal = new bootstrap.Modal(document.getElementById('popupModal'));
  popupModal.show();
}

function submitForm() {
  // Get form data
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if the password is correct
  if (password !== 'sudah_dicek_dosen') {
    alert('Password incorrect. Email not sent.');
    return;
  }

  // Your EmailJS template ID and user ID
  const templateId = 'template_c7pw7em';

  // Send email using EmailJS
  emailjs.send('default_service', templateId, { to_email: email, to_password: password })
    .then(function (response) {
      console.log('Email sent successfully:', response);
      alert('Email sent successfully!');
      // You can add additional logic or actions here
    }, function (error) {
      console.error('Email failed to send:', error);
      alert('Email failed to send. Please try again.');
      // You can add additional error handling or actions here
    });

  // Hide the modal using Bootstrap's modal method
  const popupModal = new bootstrap.Modal(document.getElementById('popupModal'));
  popupModal.hide();
}