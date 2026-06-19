window.onload = captureCheckout();

//MAKES SURE THAT THE SCRIPT IS RUNNING AND CHECKS LOCAL STRORAGE FOR DATA//
if (localStorage.getItem('memberUsername') !== null) {
  console.log("usernames exists in localStorage");
} else {
  console.log("usernames does not exist in localStorage");
}
//MAKES SURE THAT THE SCRIPT IS RUNNING AND CHECKS LOCAL STRORAGE FOR DATA//

const checkoutPageBody = document.getElementById("checkoutPageBody");

//Checkout Product Section Part of Checkout Page//
const checkoutListCon= document.createElement('div');
checkoutListCon.className = "checkoutListCon";
checkoutListCon.id = "checkoutListCon";

checkoutPageBody.appendChild(checkoutListCon);

const checkoutTable = document.createElement('table');
checkoutTable.className = "checkoutTable";

checkoutListCon.appendChild(checkoutTable);

const checkoutTableBody = document.createElement('tbody');
checkoutTableBody.className = "checkoutTableBody";

checkoutTable.appendChild(checkoutTableBody);
//Checkout Product Section Part of Checkout Page//

//Proceed Checkout Button Part of Checkout Page//
const proceedCheckoutButton = document.createElement('button');
proceedCheckoutButton.textContent = "CHECKOUT";
proceedCheckoutButton.id = "proceedCheckoutButton";
proceedCheckoutButton.className = "proceedCheckoutButton";

checkoutPageBody.appendChild(proceedCheckoutButton);
//Proceed Checkout Button Part of Checkout Page//

//Total Price Part of Checkout Page//
const totalPriceCon = document.createElement('div');
totalPriceCon.id = "totalPriceCon";
totalPriceCon.className = "totalPriceCon";

const totalPriceLabel = document.createElement('label');
totalPriceLabel.className = "totalPriceLabel";
totalPriceLabel.textContent = "Total: $";

const totalPriceCount = document.createElement('span');
totalPriceCount.className = "totalPriceCount";

totalPriceCon.appendChild(totalPriceLabel);
totalPriceLabel.appendChild(totalPriceCount);
checkoutPageBody.appendChild(totalPriceCon);
//Total Price Part of Checkout Page// 

//Function to create the checkout process after you click the "Checkout" Button//
function createCheckout(){
  checkoutTableBody.innerHTML = "";

  const getProductsForCheckout = JSON.parse(localStorage.getItem('checkoutProducts'));

  let totalPrice = 0;

  getProductsForCheckout.forEach((item,index) => {
    const productRow = document.createElement("tr");
    productRow.setAttribute("data-index", index); // Add index as a data attribute

    const productNameCell = document.createElement("td");
    const productDescriptionCell = document.createElement("td");
    const productCategoryCell = document.createElement("td");
    const productSizeCell = document.createElement("td");
    const productPriceCell = document.createElement("td");
    const productCurrencyCell = document.createElement("td");
    const deleteButton= document.createElement("button");

    productNameCell.textContent = item.productname;
    productDescriptionCell.textContent = item.productdescription;
    productCategoryCell.textContent = item.productcategory;
    productSizeCell.textContent = item.productsize;
    productPriceCell.textContent = item.productprice;
    productCurrencyCell.textContent = "USD";
    deleteButton.textContent = "Delete"

    productRow.appendChild(productNameCell);
    productRow.appendChild(productDescriptionCell);
    productRow.appendChild(productCategoryCell);
    productRow.appendChild(productSizeCell);
    productRow.appendChild(productPriceCell);
    productRow.appendChild(productCurrencyCell);
    productRow.appendChild(deleteButton);

    checkoutTableBody.appendChild(productRow);

    totalPrice += parseFloat(item.productprice);

    deleteButton.onclick = function(){
                let newData = JSON.parse(localStorage.getItem("checkoutProducts")) || [];
                productRow.remove();
                
                // Remove the corresponding item from the data
                // Remove the item at the current index
                newData.splice(index, 1); 

                // Update localStorage
                localStorage.setItem("checkoutProducts", JSON.stringify(newData));
                
                // Re-render the table to refresh indices
                createCheckout();
            };
  });

  totalPriceCount.textContent = totalPrice.toFixed(2);

  proceedCheckoutButton.onclick = function(){
    //fetch('http://localhost:8095/paypalapi/createorder'
    fetch('/paypalapi/createorder'
      ,{
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    amount: totalPrice.toFixed(2).toString(),
                    currency: "USD"
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log("Order Created:", data);

                // Find the approval URL in the response data
                const links = data.links;
                const approvalLink = links.find(link => link.rel === "approve")

                if(approvalLink) {
                    window.location.href = approvalLink.href;
                }else{
                    console.error("Approval URL not found in the response.");
                    alert("Unable to redirect to PayPal for approval.");
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
  }

}
//Function to create the checkout process after you click the "Checkout" Button//

//Function to capture the checkout once order is complete//
function captureCheckout(){
    // Get the token from the URL
    const searchUrl = new URLSearchParams(window.location.search);
    const tokenId= searchUrl.get("token");
    
    if(tokenId){
        // Make a POST request to capture the payment
        //fetch(`http://localhost:8095/paypalapi/captureorder/${tokenId}`
        fetch(`/paypalapi/captureorder/${tokenId}`
          ,{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            console.log("This is the response object:", response);
            return response.json();
        })
        .then(data => {
            console.log("Payment Captured!:", data);
            localStorage.clear();
            window.location.href="../index.html"
        })
        .catch(error => {
            console.error("There was an error with the fetch operation:", error);
        })
        }
    }
//Function to capture the checkout once order is complete//

createCheckout();