// template_mhhjvjf
// service_mtgvqk9
// frL6xIaCPC2JJrlCK
let isModalOpen = false;
let darkTheme = false;
function toggleContrast() {
  darkTheme = !darkTheme;
  if (darkTheme) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_mtgvqk9",
      "template_mhhjvjf",
      event.target,
      "frL6xIaCPC2JJrlCK",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please email me directly at kobe.halog@gmail.com.",
      );
    });
}

function toggleModal() {
  if (!isModalOpen) {
    document.body.classList += " modal--open";
    isModalOpen = true;
  } else {
    document.body.classList.remove("modal--open");
    isModalOpen = false;
  }
}
