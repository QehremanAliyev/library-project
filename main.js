const nameContact = document.querySelector("#name-contact");
const emailContact = document.querySelector("#email-contact");
const addressContact = document.querySelector("#address-contact");
const phoneContact = document.querySelector("#phone-contact");
const sendButton = document.querySelector(".Send-button");
const errorAlert = document.querySelector(".error-alert");
const successALert = document.querySelector(".success-alert");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

sendButton.addEventListener("click", function () {
    if (
      !nameContact.value.trim() ||
      !emailContact.value.trim() ||
      !addressContact.value.trim() ||
      !phoneContact.value.trim() ||
      !emailPattern.test(emailContact.value)
      ) {
        errorAlert.style.display = "block";
        setTimeout(() => {
            errorAlert.style.display = "none";
        }, 3500);
        return;
      }
    
      const information = {
        contactName: nameContact.value,
        contactEmail: emailContact.value,
        contactAdress: addressContact.value,
        contactPhone: phoneContact.value,
      };
    
      successALert.style.display = "block";
    
      setTimeout(() => {
        successALert.style.display = "none";
        nameContact.value = "";
        emailContact.value = "";
        phoneContact.value = "";
        addressContact.value = "";
      }, 3500);
    });

    document.querySelector("#phone-contact").addEventListener("change", function() {
      let inputValue = parseInt(this.value);
      
      if (inputValue < 0) {
          this.value = Math.abs(inputValue); 
      }
  });
  