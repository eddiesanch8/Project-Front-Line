console.log(`I connected!`);

const mainForm = document.getElementById("volunteer")
const errorMsg = document.querySelectorAll(".error")


mainForm.addEventListener('submit', (e) => {

e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phonenumber = document.getElementById('phonenumber').value.trim();

  let errorCount = 0;

//   This will clear all error messages <p> tags
  errorMsg.forEach((p) => p.innerText = "");

   if (name.length < 3) {
    errorMsg[0].innerText = "Name must be at least 3 characters";
    errorCount++;
  }

  if(email.innerText = " "){

    errorMsg[1].innerText = "Email is required"
  }

  if (phonenumber.length< 9){
    errorMsg[2].innerText = "Phone number mist be 9 digits"

  }

    if (errorCount === 0) {
    alert("No errors, submitting");
}



})
  