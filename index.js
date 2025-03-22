// template_nqz0v2i
// service_n3wdw77
// fAObXu_2oKBt1NaXA

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      'service_n3wdw77',
      'template_nqz0v2i',
      event.target,
      'fAObXu_2oKBt1NaXA'
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contatct me directly at hectorpena6590@gmail.com"
    )
   });
    }

    let isModalOpen = false;
    function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false;
            return document.body.classList.remove("modal--open");
        }
        isModalOpen = true;
        document.body.classList += " modal--open";
    }
