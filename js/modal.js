(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();

// const paymentForm = window.document.forms.paymentForm;

// paymentForm.addEventListener('submit', onSubmit);

// function onSubmit(event) {
//   event.preventDefault;

//   const form = event.target;
//   const { userName, userEmail } = form.elements;

//   console.log("Hoorray! Form was submited");
//   console.log(userName.value, userEmail.value);

//   form.reset();
// }


