const accessoriesPageNavBody = document.getElementById("accessoriesPageBody");

const navBar = document.createElement("nav");
const optionBar = document.createElement("nav");

const getMemberUsernameData = localStorage.getItem('memberUsername');

//NAVIGATION PART OF THE BODY/---------///////--------/
const logoCon = document.createElement("div");
const logoAnchor = document.createElement("a");
const logoImageDiv = document.createElement("div");
const shopButtonCon = document.createElement("div");
const shopButtonAnchor = document.createElement("a");
const shopButtonP= document.createElement("p");
const saleButtonCon = document.createElement("div");
const blogButtonCon = document.createElement("div");
const blogButtonAnchor = document.createElement("a");
const blogButtonP= document.createElement("p");
const signInCon = document.createElement("div");
const signInAnchor = document.createElement("a");
const signInImageDiv = document.createElement("div");
const checkoutCon = document.createElement("div");
const checkoutAnchor = document.createElement("a");
const checkoutBubble= document.createElement("span");
const checkoutBubbleCounter = document.createElement('p');
const checkoutImageDiv = document.createElement("div");

function navigationBar(){
    document.addEventListener("DOMContentLoaded", function() {
    updatedNotification()
})

    //---navigaton logo----//
    logoCon.className = "navLogoCon";

    logoAnchor.href = "./index.html";

    /**the logo image goes into this div element */
    logoImageDiv.className = "logoImgDiv";
    /**the logo image goes into this div element */
    //---navigaton logo----//

    //---navigaton Shop button----//
    shopButtonCon.className = "shopCon"

    shopButtonAnchor.href = "./index.html";
    shopButtonAnchor.className = "shopButtonA"

    shopButtonP.textContent = "SHOP";
    shopButtonP.className= "shopButtonP";
    //---navigaton Shop button----//

     //---navigaton Blog button----//
    blogButtonCon.className = "bbCon"

    blogButtonAnchor.href = "#";
    blogButtonAnchor.className = "blogButtonA"

    blogButtonP.textContent = "BLOG";
    blogButtonP.className= "blogButtonP";
     //---navigaton Blog button----//

    //---navigaton sign-in----//
    signInCon.className = "signInLogoCon";

    signInAnchor.href = "./siteloginpage/loginpage.html";

    /**the logo image goes into this div element */
    signInImageDiv.className = "signInImgDiv";
    /**the logo image goes into this div element */
    //---navigaton sign-in----//

    //---navigaton checkout----//
    checkoutCon.className = "checkoutLogoCon";

    checkoutAnchor.href = "./sitecheckoutpage/checkoutpage.html";

    checkoutBubble.className = "checkoutNotification"   
    checkoutBubbleCounter.className = "checkoutCounter";
    checkoutBubble.appendChild(checkoutBubbleCounter);

    /**the logo image goes into this div element */
    checkoutImageDiv.className = "checkoutImgDiv";
    /**the logo image goes into this div element */
    //---navigaton checkout----//

    logoCon.appendChild(logoAnchor);
    logoAnchor.appendChild(logoImageDiv);

    shopButtonCon.appendChild(shopButtonAnchor);
    shopButtonAnchor.appendChild(shopButtonP);

    blogButtonCon.appendChild(blogButtonAnchor);
    blogButtonAnchor.appendChild(blogButtonP);

    signInCon.appendChild(signInAnchor);
    signInAnchor.appendChild(signInImageDiv);

    checkoutCon.appendChild(checkoutAnchor);
    checkoutAnchor.appendChild(checkoutImageDiv);
    checkoutCon.appendChild(checkoutBubble);

    navBar.appendChild(logoCon);
    navBar.appendChild(shopButtonCon);
    navBar.appendChild(blogButtonCon);
    navBar.appendChild(signInCon);
    navBar.appendChild(checkoutCon);

    function updatedNotification(){
        const updatedProductData = JSON.parse(localStorage.getItem("checkoutProducts")) || [];

        if(updatedProductData.length > 0){
            checkoutBubble.style.display = "flex";
            checkoutBubbleCounter.textContent = updatedProductData.length;
        } else {
            checkoutBubble.style.display = "none";
        }
    }

    document.addEventListener("DOMContentLoaded", updatedNotification);
    document.addEventListener("checkoutUpdated", updatedNotification);

    window.addEventListener("storage", function(event) {
    if (event.key === "checkoutProducts") {
        updatedNotification();
    }

});
}

navigationBar();
accessoriesPageNavBody.appendChild(navBar);
//NAVIGATION PART OF THE BODY/---------///////--------/

//OPTION BAR PART OF THE BODY/---------///////--------/
const optionBarContentDiv = document.createElement("div");
const allButton = document.createElement("div");
const allAnchor = document.createElement("a");
const allButtonP= document.createElement("p");
const accessoriesButton = document.createElement("div");
const accessoriesAnchor = document.createElement("a");
const accessoriesButtonP= document.createElement("p");
const membersOnlyButton = document.createElement("div");
const membersOnlyButtonP= document.createElement("p");
const membersLogoutButton = document.createElement('div');
const membersLogoutButtonP = document.createElement('p');

function navOptionBar(){
    optionBar.className = "optionBar";

    optionBarContentDiv.className = "optionBarContentDiv";

    //---Option Bar BATHROOM ESSENTIALS button----//
    allButton.className = "allButton";

    allAnchor.href = "./index.html";

    allButtonP.textContent = "BATHROOM ESSENTIALS";
    allButtonP.className= "allButtonP";
    //---Option Bar BATHROOM ESSENTIALS button----//

    //---Option Bar Accessories button----//
    accessoriesButton.className = "accessoriesButton"

    accessoriesAnchor.href = "./accessoriespage.html";
     
    accessoriesButtonP.textContent = "MERCH & ACCESSORIES";
    accessoriesButtonP.className= "accessoriesButtonP";
    //---Option Bar Accessories button----//

    //---Option Bar Members Only button----//
    membersOnlyButton.className = "membersOnlyButton"
     
    membersOnlyButtonP.textContent = "MEMBERS ONLY";
    membersOnlyButtonP.className= "membersOnlyButtonP";
    membersOnlyButtonP.id= "membersOnlyButtonP";

     //---Option Bar Members Logout button----//
    membersLogoutButton.className = "membersLogoutButton";
    membersLogoutButton.id = "membersLogoutButton";
    
    membersLogoutButtonP.textContent = "LOGOUT";

    if (localStorage.getItem('memberUsername') == null) {
            membersLogoutButton.style.display = "none";
        } else {
                membersLogoutButton.style.display = "block";
            }
    //---Option Bar Accessories button----//

    allButton.appendChild(allAnchor);
    allAnchor.appendChild(allButtonP);

    accessoriesButton.appendChild(accessoriesAnchor);
    accessoriesAnchor.appendChild(accessoriesButtonP);
    
    membersOnlyButton.appendChild(membersOnlyButtonP);
    membersOnlyButton.appendChild(membersLogoutButton);  
    membersLogoutButton.appendChild(membersLogoutButtonP);

    optionBarContentDiv.appendChild(allButton);
    optionBarContentDiv.appendChild(accessoriesButton);
    optionBarContentDiv.appendChild(membersOnlyButton);

    optionBar.appendChild(optionBarContentDiv);
}

function memberNameInNav(){
    if(localStorage.getItem('memberUsername')){
        membersOnlyButtonP.textContent= getMemberUsernameData;
        }
}

function memberLogout(){
    membersLogoutButton.addEventListener('click', () => {
        localStorage.removeItem('memberUsername');
        location.reload();
    })
}

navOptionBar();
memberNameInNav();
memberLogout();
accessoriesPageNavBody.appendChild(optionBar);
//OPTION BAR PART OF THE BODY/---------///////--------/