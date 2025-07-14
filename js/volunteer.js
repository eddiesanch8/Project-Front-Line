console.log(`I connected!`);

const form = document.getElementById("volunteer")
const errormsg = document.getElementById("error")

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phonenumber = document.getElementById('phonenumber').value.trim();
//error messages for inputs
    if(name.length < 3){
        errormsg.innerText = "Name must be at least 3 characters";
        return;
    }

    if(!email.includes('@') || !email.includes(".com")){
        errormsg.innerText = "Email is not valid";
        return;
    }

    if (phonenumber.length < 9 ){
        errormsg.innerText = "Phone number must be 10 digits";
        return;
    }
//successful input
    errormsg.innerText = " ";
    alert("No errors, submitting")

})