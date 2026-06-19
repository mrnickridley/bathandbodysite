const productBody = document.getElementById("productBody");

//UPDATE PART OF THE PRODUCT PAGE/---------///////--------/
const addProductContainer = document.createElement('div');
addProductContainer.className = "addProductCon";
addProductContainer.id = "addProductCon";

productBody.appendChild(addProductContainer);

const addProductTitle = document.createElement('div');
addProductTitle.className = 'addProductTitleDiv';
const addProductTitleP = document.createElement('h3');
addProductTitleP.textContent = "Add Products To DB";
addProductTitleP.className = "addProductTitleP";
addProductTitle.appendChild(addProductTitleP);

const addProductForm =  document.createElement("form");
addProductForm.className = "addProductForm";

const addProductNameDiv = document.createElement('div');
addProductNameDiv.className = "addProductInput";
    const addProductNameLabel = document.createElement('label');
    addProductNameLabel.textContent = "productname:"
        const addProductNameInput = document.createElement('input');

const addProductDescriptionDiv = document.createElement('div');
addProductDescriptionDiv.className = "addProductInput";
    const addProductDescriptionLabel = document.createElement('label');
    addProductDescriptionLabel.textContent = "productdescription:"
        const addProductDescriptionInput = document.createElement('input');

const addProductPriceDiv = document.createElement('div');
addProductPriceDiv.className = "addProductInput";
    const addProductPriceLabel = document.createElement('label');
    addProductPriceLabel.textContent = "productprice:"
        const addProductPriceInput = document.createElement('input');

const addProductCategoryDiv = document.createElement('div');
addProductCategoryDiv.className = "addProductInput";
    const addProductCategoryLabel = document.createElement('label');
    addProductCategoryLabel.textContent = "productcategory:"
        const addProductCategoryInput = document.createElement('input');

const addProductSizeDiv = document.createElement('div');
addProductSizeDiv.className = "addProductInput";
    const addProductSizeLabel = document.createElement('label');
    addProductSizeLabel.textContent = "productsize:"
        const addProductSizeInput = document.createElement('input');

const addProductSexDiv = document.createElement('div');
addProductSexDiv.className = "addProductInput";
    const addProductSexLabel = document.createElement('label');
    addProductSexLabel.textContent = "productsex:"
        const addProductSexInput = document.createElement('input');

const addProductPhotopathDiv = document.createElement('div');
addProductPhotopathDiv.className = "addProductInput";
    const addProductPhotopathLabel = document.createElement('label');
    addProductPhotopathLabel.textContent = "productphotopath:"
        const addProductPhotopathInput = document.createElement('input');

const addButtonDiv = document.createElement('div');
addButtonDiv.className = "addProductInput";
    const addButton = document.createElement('button');
    addButton.type = "button";
    addButton.textContent = "ADD";
    addButton.className = "productAddButton";

addProductForm.appendChild(addProductNameDiv);
addProductNameDiv.appendChild(addProductNameLabel);
addProductNameDiv.appendChild(addProductNameInput);

addProductForm.appendChild(addProductDescriptionDiv);
addProductDescriptionDiv.appendChild(addProductDescriptionLabel);
addProductDescriptionDiv.appendChild(addProductDescriptionInput);

addProductForm.appendChild(addProductPriceDiv);
addProductPriceDiv.appendChild(addProductPriceLabel);
addProductPriceDiv.appendChild(addProductPriceInput);

addProductForm.appendChild(addProductCategoryDiv);
addProductCategoryDiv.appendChild(addProductCategoryLabel);
addProductCategoryDiv.appendChild(addProductCategoryInput);

addProductForm.appendChild(addProductSizeDiv);
addProductSizeDiv.appendChild(addProductSizeLabel);
addProductSizeDiv.appendChild(addProductSizeInput);

addProductForm.appendChild(addProductSexDiv);
addProductSexDiv.appendChild(addProductSexLabel);
addProductSexDiv.appendChild(addProductSexInput);

addProductForm.appendChild(addProductPhotopathDiv);
addProductPhotopathDiv.appendChild(addProductPhotopathLabel);
addProductPhotopathDiv.appendChild(addProductPhotopathInput);

addProductForm.appendChild(addButtonDiv);
addButtonDiv.appendChild(addButton);

addProductContainer.appendChild(addProductTitle);
addProductContainer.appendChild(addProductForm);

function saveProduct(){
    fetch('http://localhost:8095/inventory/saveproduct',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            productname: addProductNameInput.value,
            productdescription: addProductDescriptionInput.value,
            productprice: Number(addProductPriceInput.value),
            productcategory: addProductCategoryInput.value,
            productsize: addProductSizeInput.value,
            productsex: addProductSexInput.value,
            productphotopath: addProductPhotopathInput.value
        })
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log("Unit saved:", data);
        reloadPage();
    })
    .catch(error => {
        console.error("There was an error with the fetch operation:", error);
    })
}

addButton.addEventListener("click", saveProduct);
//UPDATE PART OF THE PRODUCT PAGE/---------///////--------/


//PRODUCT LIST PART OF THE BODY/---------///////--------/
const productListCon = document.createElement('div');
productListCon.className = "productListCon";
productListCon.id = "productListCon";

productBody.appendChild(productListCon);

const productTableTitle = document.createElement('div');
productTableTitle.className = 'productTableTitle';
const productTableTitleP = document.createElement('h3');
productTableTitleP.textContent = "PRODUCTS IN DB";
productTableTitleP.className = "productTableTitleP";
productTableTitle.appendChild(productTableTitleP);

const productTable = document.createElement('table');
productTable.className = "productInventoryTable";

const productId = document.createElement('th');
productId.textContent = "Id:"

const productName = document.createElement('th');
productName.textContent = "productName:"

const productDescription = document.createElement('th');
productDescription.textContent = "productDescription:"

const productPrice = document.createElement('th');
productPrice.textContent = "productPrice:"

const productCategory = document.createElement('th');
productCategory.textContent = "productCategory:"

const productSize = document.createElement('th');
productSize.textContent = "productSize";

const productSex = document.createElement('th');
productSex.textContent = "productSex";

const productPhotopath = document.createElement('th');
productPhotopath.textContent = "productPhotopath";

const deleteButt = document.createElement('th');
deleteButt.textContent = "DELETE";

const productTableBody = document.createElement('tbody');
productTableBody.className = "productTableBody";


productTable.appendChild(productId);
productTable.appendChild(productName);
productTable.appendChild(productDescription);
productTable.appendChild(productPrice);
productTable.appendChild(productCategory);
productTable.appendChild(productSize);
productTable.appendChild(productSex);
productTable.appendChild(productPhotopath);
productTable.appendChild(deleteButt);
productTable.appendChild(productTableBody);


productListCon.appendChild(productTableTitle);
productListCon.appendChild(productTable);

function getAllProducts(){
    fetch('http://localhost:8095/inventory/allproducts')
    .then(response => {
        console.log("This is the response object:", response);
        return response.json();
    })
    .then(products => {
        productTableBody.innerHTML = "";

        products.forEach(product => {
        const productRow = document.createElement("tr");

        const idCell = document.createElement("td");
        const productNameCell = document.createElement("td");
        const productDescriptionCell = document.createElement("td");
        const productPriceCell = document.createElement("td");
        const productCategoryCell = document.createElement("td");
        const productSizeCell = document.createElement("td");
        const productSexCell = document.createElement("td");
        const productPhotopathCell = document.createElement("td");
        const deleteCell = document.createElement("td");

        idCell.textContent = product.id;
        productNameCell.textContent = product.productname;
        productDescriptionCell.textContent = product.productdescription;
        productPriceCell.textContent = product.productprice;
        productCategoryCell.textContent = product.productcategory;
        productSizeCell.textContent = product.productsize;
        productSexCell.textContent = product.productsex;
        productPhotopathCell.textContent = product.productphotopath;
        

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteCell.appendChild(deleteButton);
        deleteButton.onclick = function(){
            deleteProduct();
            productRow.remove(product.id);
        }

        function deleteProduct(){
            fetch('http://localhost:8095/inventory/deleteproduct/' + product.id, {
                method: 'DELETE',
                header:{
                    'Content-Type':'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log("Unit deleted:", data)
            })
            .catch(error => {
                console.error("There was an error with the fetch operation:", error)
        })
}

        productRow.appendChild(idCell);
        productRow.appendChild(productNameCell);
        productRow.appendChild(productDescriptionCell);
        productRow.appendChild(productPriceCell);
        productRow.appendChild(productCategoryCell);
        productRow.appendChild(productSizeCell);
        productRow.appendChild(productSexCell);
        productRow.appendChild(productPhotopathCell);
        productRow.appendChild(deleteButton);

        productTableBody.appendChild(productRow);

        })
    })
    .catch(error => {
        console.error("There was an error with the fetch operation:", error)
    })
}

getAllProducts();
//----PRODUCT LIST PART OF BODY-----//


/**-------CALLED FUNCTIONS------ */
function reloadPage(){
    location.reload();
}
/**-------CALLED FUNCTIONS------ */