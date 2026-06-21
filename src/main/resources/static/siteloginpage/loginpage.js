const loginPageBody = document.getElementById("loginPageBody");

if (localStorage.getItem('memberUsername') !== null) {
  console.log("usernames exists in localStorage");
} else {
  console.log("usernames does not exist in localStorage");
}

/*---Log-In FORM SECTION---*/
/*---Log-in form con---*/
const loginFormCon = document.createElement('div');
loginFormCon.className = "loginFormCon";
loginFormCon.id = "loginFormCon";
/*---Log-In form con---*/

/*---log in  form---*/
const loginFormTag = document.createElement('form');
loginFormTag.className = "loginFormTag";
loginFormTag.id = "loginFormTag";
/*---log in form---*/

/*---long in form title---*/
const loginFormTitleCon = document.createElement('div');
loginFormTitleCon.className = "loginFormTitle";

const loginFormTitle = document.createElement('h3');
loginFormTitle.textContent = "Log-In"
/*---log in form title---*/

/*---log-in form username input---*/
const loginUsernameCon = document.createElement('div');
loginUsernameCon.className = "inputCon";

const loginUsernameLabel = document.createElement('label');
loginUsernameLabel.textContent = "USERNAME:"

const loginUsernameInput = document.createElement('input');
loginUsernameInput.type = "text";
loginUsernameInput.name = "username";
loginUsernameInput.id = "loginUsername";
loginUsernameInput.required = true;
/*---log-in form username input---*/

/*---log-in form password input---*/
const loginPasswordCon = document.createElement('div');
loginPasswordCon.className = "inputCon";

const loginPasswordLabel = document.createElement('label');
loginPasswordLabel.textContent = "PASSWORD:"

const loginPasswordInput = document.createElement('input');
loginPasswordInput.type = "password";
loginPasswordInput.name = "password";
loginPasswordInput.id = "loginPassword";
loginPasswordInput.required = true;
/*---log-in form password input---*/

/*---Submit Info Button---*/
const submitDataCon = document.createElement('div');
submitDataCon.className = "submitDataCon";

const submitDataButton = document.createElement('button');
submitDataButton.type = "button";
submitDataButton.textContent = "SUBMIT"
/*---Submit Info Button---*/

/*---log-in form signup link input---*/
const signUpLinkCon = document.createElement('div');
signUpLinkCon.className = "signUpLinkCon";

const signUpLinkAnchor = document.createElement('a');
signUpLinkAnchor.href = "../sitesignuppage/signuppage.html"

const signUpLinkP = document.createElement('p');
signUpLinkP.textContent = "Don't Have An Account?"
/*---log-in form signup link input---*/

loginFormTag.appendChild(loginFormTitleCon);
loginFormTag.appendChild(loginUsernameCon);
loginFormTag.appendChild(loginPasswordCon);
loginFormTag.appendChild(submitDataCon);
loginFormTag.appendChild(signUpLinkCon);

loginFormTitleCon.appendChild(loginFormTitle);

loginUsernameCon.appendChild(loginUsernameLabel);
loginUsernameCon.appendChild(loginUsernameInput);

loginPasswordCon.appendChild(loginPasswordLabel);
loginPasswordCon.appendChild(loginPasswordInput);

submitDataCon.appendChild(submitDataButton);

signUpLinkCon.appendChild(signUpLinkAnchor);
signUpLinkAnchor.appendChild(signUpLinkP);

loginFormCon.appendChild(loginFormTag);
loginPageBody.appendChild(loginFormCon);
/*---FORM SECTION---*/

/*---Retrieve Member Data Funcion SECTION---*/
function getMemberData(){
    let userName = document.getElementById('loginUsername').value;
    let passWord = document.getElementById('loginPassword').value;

    fetch("http://localhost:8095/memberinfo/signin"
  //fetch('/memberinfo/signin'
            , {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    username: userName,
    password: passWord
  })
})
.then(res => res.json())
.then(data => {
  if (data.success) {
    console.log("Login successful");
    localStorage.setItem("memberUsername", userName)
    window.location.href = '../index.html';
  } else {
    console.log("Invalid credentials");
  }
})
.catch(err => console.error(err));
}

submitDataButton.addEventListener('click',getMemberData)
/*---Retrieve Member Data Funcion SECTION---*/