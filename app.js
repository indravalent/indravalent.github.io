const search = () => {
    const searchbox = document.getElementById("search_item").value.toUpperCase();
    const storeitems = document.getElementById("faq-box")
    const product = document.querySelectorAll(".faq-wrapper")
    const pname = storeitems.getElementsByTagName("label")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('label')[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

// send email //
function sendMail(){
    (function(){
        emailjs.init("McXZgfLFJqdnpVWSB"); // Accoint Public key
    })();

    var params = {
        sendername: document.querySelector("#sendername").value,
        subject: document.querySelector("#subject").value,
        replyto: document.querySelector("#replyto").value,
        message: document.querySelector("#pesan").value,
    };

    var serviceID = "service_o73k35p"; // Email Service ID
    var templateID = "template_9hup6qg"; //  Email template ID

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert("email sent succesfully!");
    })
    .catch();
}

// google translate //
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

// navbar //
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

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

