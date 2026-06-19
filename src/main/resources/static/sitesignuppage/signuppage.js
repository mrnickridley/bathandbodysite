const signupPageBody = document.getElementById("signupPageBody");

if (localStorage.getItem('memberUsername') !== null) {
  console.log("usernames exists in localStorage");
} else {
  console.log("usernames does not exist in localStorage");
}

/*---Signup FORM SECTION---*/
/*---Signup form con---*/
const signupFormCon = document.createElement('div');
signupFormCon.className = "signupFormCon";
signupFormCon.id = "signupFormCon";
/*---Signup form con---*/

/*---Signup  form---*/
const signupFormTag = document.createElement('form');
signupFormTag.className = "signupFormTag";
signupFormTag.id = "signupFormTag";
/*---Signup form---*/

/*---Signup form title---*/
const signupFormTitleCon = document.createElement('div');
signupFormTitleCon.className = "signupFormTitle";

const signupFormTitle = document.createElement('h3');
signupFormTitle.textContent = "Create Account"
/*---Signup form title---*/

/*---Signup form firstname input---*/
const signupFirstnameCon = document.createElement('div');
signupFirstnameCon.className = "newInputCon";

const signupFirstnameLabel = document.createElement('label');
signupFirstnameLabel.textContent = "FIRSTNAME:"

const signupFirstnameInput = document.createElement('input');
signupFirstnameInput.type = "text";
signupFirstnameInput.name = "firstname";
signupFirstnameInput.id = "signupFirstname";
signupFirstnameInput.required = true;
/*---Signup form firstname input---*/

/*---Signup form lastname input---*/
const signupLastnameCon = document.createElement('div');
signupLastnameCon.className = "newInputCon";

const signupLastnameLabel = document.createElement('label');
signupLastnameLabel.textContent = "LASTNAME:"

const signupLastnameInput = document.createElement('input');
signupLastnameInput.type = "text";
signupLastnameInput.name = "lastname";
signupLastnameInput.id = "signupLastname";
signupLastnameInput.required = true;
/*---Signup form lastname input---*/

/*---Signup form email input---*/
const signupEmailCon = document.createElement('div');
signupEmailCon.className = "newInputCon";

const signupEmailLabel = document.createElement('label');
signupEmailLabel.textContent = "EMAIL:"

const signupEmailInput = document.createElement('input');
signupEmailInput.type = "text";
signupEmailInput.name = "email";
signupEmailInput.id = "signupEmail";
signupEmailInput.required = true;
/*---Signup form email input---*/

/*---Signup form username input---*/
const signupUsernameCon = document.createElement('div');
signupUsernameCon.className = "newInputCon";

const signupUsernameLabel = document.createElement('label');
signupUsernameLabel.textContent = "USERNAME:"

const signupUsernameInput = document.createElement('input');
signupUsernameInput.type = "text";
signupUsernameInput.name = "username";
signupUsernameInput.id = "signupUsername";
signupUsernameInput.required = true;
/*---Signup form username input---*/

/*---Signup form password input---*/
const signupPasswordCon = document.createElement('div');
signupPasswordCon.className = "newInputCon";

const signupPasswordLabel = document.createElement('label');
signupPasswordLabel.textContent = "PASSWORD:"

const signupPasswordInput = document.createElement('input');
signupPasswordInput.type = "password";
signupPasswordInput.name = "password";
signupPasswordInput.id = "signupPassword";
signupPasswordInput.required = true;
/*---Signup form password input---*/

/*---Submit Info Button---*/
const submitNewDataCon = document.createElement('div');
submitNewDataCon.className = "submitNewDataCon";

const submitNewDataButton = document.createElement('button');
submitNewDataButton.textContent = "SUBMIT"
/*---Submit Info Button---*/

signupFormTag.appendChild(signupFormTitleCon);
signupFormTag.appendChild(signupFirstnameCon);
signupFormTag.appendChild(signupLastnameCon);
signupFormTag.appendChild(signupEmailCon);
signupFormTag.appendChild(signupUsernameCon);
signupFormTag.appendChild(signupPasswordCon);
signupFormTag.appendChild(submitNewDataCon);


signupFormTitleCon.appendChild(signupFormTitle);

signupFirstnameCon.appendChild(signupFirstnameLabel);
signupFirstnameCon.appendChild(signupFirstnameInput);

signupLastnameCon.appendChild(signupLastnameLabel);
signupLastnameCon.appendChild(signupLastnameInput);

signupEmailCon.appendChild(signupEmailLabel);
signupEmailCon.appendChild(signupEmailInput);

signupUsernameCon.appendChild(signupUsernameLabel);
signupUsernameCon.appendChild(signupUsernameInput);

signupPasswordCon.appendChild(signupPasswordLabel);
signupPasswordCon.appendChild(signupPasswordInput);

submitNewDataCon.appendChild(submitNewDataButton);

signupFormCon.appendChild(signupFormTag);
signupPageBody.appendChild(signupFormCon);
/*---FORM SECTION---*/

/*---Retrieve Member Data Funcion SECTION---*/
//toNull() converts "" → null
const toNull = (val) =>
  typeof val === "string" && val.trim() === "" ? null : val;
//toNull() converts "" → null

function saveNewMember(){
    let firstName = document.getElementById("signupFirstname").value;
    let lastName = document.getElementById("signupLastname").value;
    let eMail = document.getElementById("signupEmail").value;
    let userName = document.getElementById("signupUsername").value;
    let passWord = document.getElementById("signupPassword").value;

     if (!passWord || passWord.trim() === "") {
      throw new Error("Password is required");
    }

    //fetch('http://localhost:8095/memberinfo/signup'
        fetch('/memberinfo/signup'
        , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: toNull(firstName),
            lastname: toNull(lastName),
            email: toNull(eMail),
            username: toNull(userName),
            password: toNull(passWord)
        })
    })
    .then(response =>{
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
    .then(data => {
        console.log("Expense saved:", data);
        //reloadPage(); // Refresh the page after saving the expense
        window.location.href = '../siteloginpage/loginpage.html';
    })
}
/*
function reloadPage(){
    location.reload();
}
    */

submitNewDataButton.addEventListener('click', (e) => {
    e.preventDefault();
    saveNewMember();
});

/*---Retrieve Member Data Funcion SECTION---*/