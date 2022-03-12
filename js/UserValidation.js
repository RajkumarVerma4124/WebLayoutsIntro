const inputs = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

//Javascripy for text input validation
const text = document.querySelector('#name');
const errorInput = document.querySelector('#errorName');
text.addEventListener('input', () => {
    let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (!namePattern.test(text.value))
        errorInput.innerHTML = "It's Not In Correct Format";
    else
        errorInput.innerHTML = "";
});

//Javascript for password validation
const pwd = document.querySelector('#password');
const pwdError = document.querySelector('#errorPassword');
pwd.addEventListener('input', () => {
    let pwdPattern = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).{8,}$');
    let specialChar = new RegExp('\\W')
    let count = specialChar.test(pwd.value).count;
    if (!pwdPattern.test(pwd.value) && !count == 1)
        pwdError.innerHTML = "Password Is In Incorrect format";
    else
        pwdError.innerHTML = "";
});

//Javascript for email input validation
const email = document.querySelector('#email');
const emailError = document.querySelector('#errorEmail');
email.addEventListener('input', () => {
    let emailPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
    if (!emailPattern.test(email.value))
        emailError.innerHTML = "Email Is In Incorrect format";
    else
        emailError.innerHTML = "";
});

//Javascript for telephone validation
const tel = document.querySelector('#tel');
const errorTel = document.querySelector('#errorTel');
tel.addEventListener('input', () => {
    let phonePattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
    if (!phonePattern.test(phonePattern.value))
        errorTel.innerHTML = "Phone number Is In Incorrect format";
    else
        errorTel.innerHTML = "";
});

//Javascript for salary range
const salary = document.querySelector('#salary');
const outputSal = document.querySelector('#salary_output');
outputSal.textContent = salary.value;
salary.addEventListener('input', () => {
    outputSal.textContent = salary.value;
});