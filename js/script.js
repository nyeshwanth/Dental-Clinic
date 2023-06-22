let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .nav");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", function () {
  var scrollButton = document.getElementById("scroll-up-button");
  if (window.pageYOffset > 100) {
    scrollButton.classList.add("active");
  } else {
    scrollButton.classList.remove("active");
  }
});

document
  .getElementById("scroll-up-button")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

let form = document.forms["myForm"];
console.log(new FormData());
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var name = document.forms["myForm"]["name"].value;
  var number = document.forms["myForm"]["number"].value;
  var email = document.forms["myForm"]["email"].value;
  var date = document.forms["myForm"]["date"].value;

  var mobileCheck = /^[0-9]{10}$/;
  var emailCheck = /^[A-Za-z0-9.]+@[a-zA-Z]+\.[a-z]{2,3}$/;
  let data = new FormData(form);

  if (name == "") {
    alert("Please fill your name");
    return false;
  }

  if (!number.match(mobileCheck)) {
    alert("Please check your mobile number");
    return false;
  }
  if (email == "") {
    alert("Please fill your email address");
    return false;
  }
  if (!email.match(emailCheck)) {
    alert("Please provide valid email address");
    return false;
  }
  if (date == "") {
    alert("Please fill date");
    return false;
  }
  return serverCode(data);
});
function serverCode(data) {
  console.log(data);
  fetch(
    "https://script.google.com/macros/s/AKfycbyw1GGQe5-EGtKtWg6U7brQDmWCk78HCYUiGqt8JZP5GO5TZuHAcGnqOSxfCzO_dr6t/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => console.log(data));
  document.forms["myForm"]["name"].value = "";
  document.forms["myForm"]["email"].value = "";
  document.forms["myForm"]["number"].value = "";
  document.forms["myForm"]["date"].value = "";
}

function showLoading(button) {
  button.value = "Loading...";

  setTimeout(function () {
    button.value = "Done";

    setTimeout(function () {
      alert("Successfully Submitted");
    }, 500);
  }, 500);
}
document.addEventListener("DOMContentLoaded", function () {
  var scrollUpButton = document.getElementById("scroll-up-button");
  var whatsappContainer = document.getElementById("whatsapp-container");
  var contactLink = document.querySelector('.nav a[href="#contact"]');
  var homeLink = document.querySelector('.nav a[href="#home"]');
  var sections = document.querySelectorAll("section");

  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    scrollUpButton.style.display = "block";
    whatsappContainer.style.display = "block";

    var homeSection = document.getElementById("home");
    homeSection.scrollIntoView({ behavior: "smooth" });
  });

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    scrollUpButton.style.display = "block";
    whatsappContainer.style.display = "none";

    var contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

  // Event listener for section changes
  window.addEventListener("scroll", function () {
    var currentSection = null;

    // Find the current section based on scroll position
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 100; // Adjust offset as needed
      var sectionBottom = sectionTop + section.offsetHeight;
      var scrollPosition = window.pageYOffset;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section;
      }
    });

    // Show or hide WhatsApp button based on the current section
    if (currentSection && currentSection.id === "home") {
      whatsappContainer.style.display = "block";
    } else {
      whatsappContainer.style.display = "none";
    }
  });
});
