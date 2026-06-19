const adminProductNavBody = document.getElementById("productBody");

const adminNavBar = document.createElement("nav");

//NAVIGATION PART OF THE BODY/---------///////--------/
const adminLogoCon = document.createElement("div")
const homepageButtonCon = document.createElement("div");
const productPageButtonCon = document.createElement("div");
const ordersButtonCon = document.createElement("div");
const signInCon = document.createElement("div");
function adminNavigationBar(){
    //---Admin Navigaton Logo----//;
    adminLogoCon.className = "navLogoCon";

    const adminLogoAnchor = document.createElement("a");
    adminLogoAnchor.href = "adminproductpage.html";

    /**the logo image goes into this div element */
    const adminLogoImageDiv = document.createElement("div");
    adminLogoImageDiv.className = "logoImgDiv";
    /**the logo image goes into this div element */
    //---Admin Navigaton Logo----//

    //---Navigaton Product Page button----//
    productPageButtonCon.className = "productPageCon"

    const productPageButtonAnchor = document.createElement("a");
    productPageButtonAnchor.href = "adminproductpage.html";
    productPageButtonAnchor.className = "productPageButtonA"

    const productPageButtonP= document.createElement("p");
    productPageButtonP.textContent = "PRODUCT PAGE";
    productPageButtonP.className= "productPageButtonP";
     //---Navigaton Product Page button----//

      //---navigaton Orders button----//
    ordersButtonCon.className = "ordersCon"

    const ordersButtonAnchor = document.createElement("a");
    ordersButtonAnchor.href = "../adminorderspage/adminorderspage.html";
    ordersButtonAnchor.className = "ordersButtonA"

    const ordersButtonP= document.createElement("p");
    ordersButtonP.textContent = "ORDERS";
    ordersButtonP.className= "ordersButtonP";
     //---navigaton orders button----//


    adminLogoCon.appendChild(adminLogoAnchor);
    adminLogoAnchor.appendChild(adminLogoImageDiv);

    productPageButtonCon.appendChild(productPageButtonAnchor);
    productPageButtonAnchor.appendChild(productPageButtonP);

    ordersButtonCon.appendChild(ordersButtonAnchor);
    ordersButtonAnchor.appendChild(ordersButtonP);

    adminNavBar.appendChild(adminLogoCon);
    adminNavBar.appendChild(productPageButtonCon);
    adminNavBar.appendChild(ordersButtonCon);

}

adminNavigationBar();
adminProductNavBody.appendChild(adminNavBar);
//NAVIGATION PART OF THE BODY/---------///////--------/