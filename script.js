// Explore Button
function scrollToSection()
{
    document.getElementById("about").scrollIntoView({
        behavior:"smooth"
    });
}

// Contact Form
var form = document.getElementById("contactForm");

form.addEventListener("submit", function(event)
{
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML =
    "<h3>WE GOT YOUR INFO.WILL CONTACT YOU BY THE TIME.</h3>" +
    "<hr>" +
    "<p><b>Name:</b> " + name + "</p>" +
    "<p><b>Email:</b> " + email + "</p>" +
    "<p><b>Message:</b> " + message + "</p>";

    form.reset();
});