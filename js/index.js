// Code for our Form Validation 

// declaring variables for hidden/seen functionality 

const backBtns = document.querySelectorAll(`.option__btn--back`);
const nextBtns = document.querySelectorAll(`.option__btn--next`);
const formSections = document.querySelectorAll(`.form-section`);

// allows for iteration over the formSection nodelist 
let formSectionNum = 0;

// Function to update visibility of form sections
function updateVisibility() {

    // two parameters, checks for sectionClass, add that class if the index matches the # for formSectionNum 
    // Ex: if the index is 0, (first section), the `active` class will toggle if: the index # is equal to the formSectionNum
  formSections.forEach((sectionClass, i) => {
    sectionClass.classList.toggle(`active`, i === formSectionNum);
    sectionClass.classList.toggle(`hidden`, i !== formSectionNum);
});

}

// call on our function to clear classes, AKA formSection # === 0, so the first form is visible. 
        updateVisibility();

// Event listener for our buttons. We had select all of them with "querySelectorAll"
//  since there are multiple buttons on the page,  .forEach loops over all of them and waits for a click from the user

nextBtns.forEach((btn) =>{

    btn.addEventListener( `click`, () =>{

        // once clicked, we match up our iterator with the length of the nodelist -1 
        // (the list starts with an index of 0 and goes up to 2 but the technically the length is 3)
        if (formSectionNum < formSections.length -1){

            // when we click on a next button, we have to also update the section number so we are hiding and activating the correct section on our form
            // finally we run our updated number through our visibility function.
            // ex: if the formSectionNum === 2 , the last section will be active and the other 2 will be hidden since 
            // the donate .amount .form-section in our html actually === 0 and the .option .form-section === 1  
            formSectionNum++;
            updateVisibility();
            console.log(formSectionNum);

        }
    
    })
})

// Event listener for back buttons
// this logic is the same, except that this time, we check to make sure that formSectionNum is greater than 0
backBtns.forEach((btn) =>{

    btn.addEventListener(`click`, () => {

        if(formSectionNum > 0) {
         
            formSectionNum--;
            updateVisibility();
        }
        console.log(formSectionNum);
    });
});


// declaring variables for donate message and form validation 
const formSubmit = document.getElementById(`donateForm`);
const errorMessages = document.querySelectorAll(`.error`)



formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const firstName = document.getElementById(`fname`).value.trim();
  const lastName = document.getElementById(`lname`);
  const email = document.getElementById(`user-email`);
  const zip = document.getElementById(`zipcode`);
  const cvv = document.getElementById(`security-num`);


  let errorIndex = 0; 

  errorMessages.forEach((p) => {p.innerText = ""});

  if (firstName.length < 3) {
    errorMessages[0].innerText = "Name must be at least 2 characters";
    errorIndex++;
  }

  if(lastName.length < 3){

    errorMessages[1].innerText = `${errorMessages[0]}! Your name must be at least 2 characters too`
    errorIndex++;
  }

  if(zip.length < 5){

    errorMessages[2].innerText= "Invalid Zipcode"
    errorIndex++;
  }

  if(cvv.length < 3 ){

    errorMessages[3].innerHTML = "Invalid Security Code"
    errorIndex++;
  } 

   if (errorIndex === 0) {
  const donationAmount = e.target.amount.value;
  alert(`Thank you for donating $${donationAmount}!`);
  }

});







// donation message for users 
formSubmit.addEventListener("submit", (donate) => { 
    
    donate.preventDefault();
  
});





