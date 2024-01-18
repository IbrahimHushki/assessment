console.log("Add your name in {{name}}");
console.log("Add the current date in {{date}}");
console.log(
  "Add a dialog that triggers when the visitor clicks Contact information"
);

document.addEventListener("DOMContentLoaded", function () {
  const contactModal = document.getElementById("contactModal");

  //Function to change the name element
  const changeName = (name) => {
    const nameElement = document.getElementById("myName");
    nameElement.textContent = name;
  };

  changeName("Ibrahim Hushki");

  // Function to change the date to the current date
  document.getElementById("currentDate").textContent =
    new Date().toLocaleDateString();

  // Functions for opening and closing the contact modal
  const openContactModal = () => {
    contactModal.style.display = "block";
  };

  const closeContactModal = () => {
    contactModal.style.display = "none";
  };

  document
    .getElementById("contactElement")
    .addEventListener("click", openContactModal);

  document
    .getElementById("closeButton")
    .addEventListener("click", closeContactModal);

  // Function for closing contact modal by clicking anywhere
  window.addEventListener("click", function (event) {
    if (event.target === contactModal) {
      closeContactModal();
    }
  });
});
