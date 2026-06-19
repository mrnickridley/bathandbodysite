const accessoriesPageBody = document.getElementById("accessoriesPageBody");

if (localStorage.getItem('memberUsername') !== null) {
  console.log("usernames exists in localStorage");
} else {
  console.log("usernames does not exist in localStorage");
}

/*---SORT BOXES SECTION---*/
const sortBoxCon = document.createElement('div');
sortBoxCon.className = "sortBoxCon";

/*---"SORT BY:" Title---*/
const sortByTitleCon = document.createElement('div');
sortByTitleCon.textContent = "SORT BY:"
sortByTitleCon.className = "sortItem"
sortByTitleCon.id = "sortItemTitle";
/*---"SORT BY:" Title---*/

/*---"SORT BY: PRICE"---*/
const sortByPriceCon = document.createElement('span');
sortByPriceCon.className = "sortItem";
sortByPriceCon.textContent = "PRICE:"

const sortByPriceSelect = document.createElement('select');
sortByPriceSelect.id = "lowHighSelect";

const sortByPriceOptions = document.createElement('option');
const sortByPriceOptionsTwo = document.createElement('option');
const sortByPriceOptionsThree = document.createElement('option');

sortByPriceOptions.value = "Default";
sortByPriceOptions.textContent = "DEFAULT";

sortByPriceOptionsTwo.value = "lowToHigh";
sortByPriceOptionsTwo.textContent = "LOW TO HIGH";

sortByPriceOptionsThree.value = "highToLow";
sortByPriceOptionsThree.textContent = "HIGH TO LOW";

sortByPriceCon.appendChild(sortByPriceSelect);
sortByPriceSelect.appendChild(sortByPriceOptions);
sortByPriceSelect.appendChild(sortByPriceOptionsTwo);
sortByPriceSelect.appendChild(sortByPriceOptionsThree);
/*---"SORT BY: PRICE"---*/

/*---"SORT BY: SEX"---*/
const sortBySexCon = document.createElement('span');
sortBySexCon.className = "sortItem";
sortBySexCon.textContent = "SEX:"

const sortBySexSelect = document.createElement('select');
sortBySexSelect.id = "himHerSelect";

const sortBySexOptions = document.createElement('option');
const sortBySexOptionsTwo = document.createElement('option');
const sortBySexOptionsThree = document.createElement('option');

sortBySexOptions.value = "Both";
sortBySexOptions.textContent = "BOTH";

sortBySexOptionsTwo.value = "Him";
sortBySexOptionsTwo.textContent = "HIM";

sortBySexOptionsThree.value = "Her";
sortBySexOptionsThree.textContent = "HER";

sortBySexCon.appendChild(sortBySexSelect);
sortBySexSelect.appendChild(sortBySexOptions);
sortBySexSelect.appendChild(sortBySexOptionsTwo);
sortBySexSelect.appendChild(sortBySexOptionsThree);
/*---"SORT BY: SEX"---*/

/*---"SORT BY: CATEGORY"---*/
const sortByCategoryCon = document.createElement('span');
sortByCategoryCon.className = "sortItem";
sortByCategoryCon.textContent = "CATEGORY:"

const sortByCategorySelect = document.createElement('select');
sortByCategorySelect.id = "categorySelect";

const sortByCategoryOptions = document.createElement('option');
const sortByCategoryOptionsTwo = document.createElement('option');
const sortByCategoryOptionsThree = document.createElement('option');
const sortByCategoryOptionsFour = document.createElement('option');
const sortByCategoryOptionsFive = document.createElement('option');
const sortByCategoryOptionsSix = document.createElement('option');
const sortByCategoryOptionsSeven = document.createElement('option');
const sortByCategoryOptionsEight = document.createElement('option');
const sortByCategoryOptionsNine = document.createElement('option');
const sortByCategoryOptionsTen = document.createElement('option');

sortByCategoryOptions.value = "All Products";
sortByCategoryOptions.textContent = "ALL PRODUCTS";

sortByCategoryOptionsTwo.value = "Bodywash";
sortByCategoryOptionsTwo.textContent = "BODYWASH";

sortByCategoryOptionsThree.value = "Soap";
sortByCategoryOptionsThree.textContent = "SOAP";

sortByCategoryOptionsFour.value = "Shampoo";
sortByCategoryOptionsFour.textContent = "SHAMPOO";

sortByCategoryOptionsFive.value = "Conditioner";
sortByCategoryOptionsFive.textContent = "CONDITIONER";

sortByCategoryOptionsSix.value = "Lotion";
sortByCategoryOptionsSix.textContent = "LOTION";

sortByCategoryOptionsSeven.value = "Handsoap";
sortByCategoryOptionsSeven.textContent = "HANDSOAP";

sortByCategoryOptionsEight.value = "Dental";
sortByCategoryOptionsEight.textContent = "DENTAL PRODUCTS";

sortByCategoryOptionsNine.value = "Towels";
sortByCategoryOptionsNine.textContent = "TOWELS";

sortByCategoryOptionsTen.value = "Accessories";
sortByCategoryOptionsTen.textContent = "ACCESSORIES";

sortByCategoryCon.appendChild(sortByCategorySelect);
sortByCategorySelect.appendChild(sortByCategoryOptions);
sortByCategorySelect.appendChild(sortByCategoryOptionsTwo);
sortByCategorySelect.appendChild(sortByCategoryOptionsThree);
sortByCategorySelect.appendChild(sortByCategoryOptionsFour);
sortByCategorySelect.appendChild(sortByCategoryOptionsFive);
sortByCategorySelect.appendChild(sortByCategoryOptionsSix);
sortByCategorySelect.appendChild(sortByCategoryOptionsSeven);
sortByCategorySelect.appendChild(sortByCategoryOptionsEight);
sortByCategorySelect.appendChild(sortByCategoryOptionsNine);
sortByCategorySelect.appendChild(sortByCategoryOptionsTen);
/*---"SORT BY: CATEGORY"---*/

/*---"SORT BY: BRANDS"---*/
const sortByBrandCon = document.createElement('span');
sortByBrandCon.className = "sortItem";
sortByBrandCon.textContent = "BRAND:"

const sortByBrandSelect = document.createElement('select');
sortByBrandSelect.id = "brandSelect";

const sortByBrandOptions = document.createElement('option');
const sortByBrandOptionsTwo = document.createElement('option');
const sortByBrandOptionsThree = document.createElement('option');
const sortByBrandOptionsFour = document.createElement('option');

sortByBrandOptions.value = "All Brands";
sortByBrandOptions.textContent = "ALL BRANDS";

sortByBrandOptionsTwo.value = "Dr. Bronners";
sortByBrandOptionsTwo.textContent = "DR. BRONNERS";

sortByBrandOptionsThree.value = "Mrs. Meyers";
sortByBrandOptionsThree.textContent = "MRS. MEYERS";

sortByBrandOptionsFour.value = "Native";
sortByBrandOptionsFour.textContent = "NATIVE";

sortByBrandCon.appendChild(sortByBrandSelect);
sortByBrandSelect.appendChild(sortByBrandOptions);
sortByBrandSelect.appendChild(sortByBrandOptionsTwo);
sortByBrandSelect.appendChild(sortByBrandOptionsThree);
sortByBrandSelect.appendChild(sortByBrandOptionsFour);
/*---"SORT BY: BRANDS"---*/

sortBoxCon.appendChild(sortByTitleCon);
sortBoxCon.appendChild(sortByPriceCon);
sortBoxCon.appendChild(sortBySexCon);
sortBoxCon.appendChild(sortByCategoryCon);
sortBoxCon.appendChild(sortByBrandCon);

accessoriesPageBody.appendChild(sortBoxCon);
/*---SORT BOXES SECTION---*/

/*---PRODUCT LIST & PRODUCT POP-UP SECTION---*/
const productsList = document.createElement('ul');
productsList.className = "productsUList";

const productsListTwo = document.createElement('div');
productsListTwo.className = "productsListTwo";

let productArray = [];
let productArrayTwo = [];
let productArrayFour = [];

const existingProductData = [];

function fetchProducts(){
//fetch('http://localhost:8095/inventory/Accessories')  
fetch('/inventory/Accessories')
.then(response => {
    console.log("response object:", response)
    return response.json();
})
.then(data => {
    productArray = data;
    productArrayTwo = data;
    productArrayFour = data;
    productsRender(productArray);
    productsRender(productArrayTwo);
    productsRender(productArrayFour);
})
.catch(error => {
    console.error("There was an error with the fetch operation:", error);
})
}

function productsRender(data){
    productsList.innerHTML = '';

    data.forEach(products => {
        const productConDiv = document.createElement('div');
        productConDiv.className = "productsDiv";

        const productsListItem = document.createElement('li');

        const productsImageDiv = document.createElement('div');
        productsImageDiv.className = "productImage";
        const productsImage = document.createElement('img');
        productsImage.src = products.productphotopath;
        productsImage.alt = 'Photo';
        productsImageDiv.appendChild(productsImage);

        const productsNameDiv = document.createElement('div');
        productsNameDiv.id = "productsName";
        productsNameDiv.className = "productsInfo";
        const productsName = document.createElement('h3');
        productsName.textContent = products.productname;
        productsNameDiv.appendChild(productsName);

        const productsDescriptionDiv = document.createElement('div');
        productsDescriptionDiv.id = "productsDescript";
        productsDescriptionDiv.className = "productsInfo";
        const productsDescription = document.createElement('p');
        productsDescription.textContent = products.productdescription;
        productsDescriptionDiv.appendChild(productsDescription);

        const productsCategoryDiv = document.createElement('div');
        productsCategoryDiv.id = "productsCategory";
        productsCategoryDiv.className = "productsInfo";
        const productsCategory = document.createElement('p');
        productsCategory.textContent = products.productcategory;
        productsCategoryDiv.appendChild(productsCategory);

        const productsSizeDiv = document.createElement('div');
        productsSizeDiv.id = "productsSize";
        productsSizeDiv.className = "productsInfo";
        const productsSize = document.createElement('p');
        productsSize.textContent = products.productsize;
        productsSizeDiv.appendChild(productsSize);

        const productsPriceDiv = document.createElement('div');
        productsPriceDiv.id = "productsPrice";
        productsPriceDiv.className = "productsInfo";
        const productsPrice = document.createElement('p');
        productsPrice.textContent = `Price: $${products.productprice}`;
        productsPriceDiv.appendChild(productsPrice);

         // Create and set the checkout button
        const checkoutButtonDiv = document.createElement('div');
        checkoutButtonDiv.id = "checkoutButt";
        checkoutButtonDiv.className = "productsInfo";
        const checkoutButton = document.createElement('button');
        checkoutButton.textContent = "CHECKOUT";
        checkoutButtonDiv.appendChild(checkoutButton);
        if (localStorage.getItem('memberUsername') == null) {
            checkoutButton.disabled = true;
        }

        productConDiv.appendChild(productsListItem);
        productsListItem.appendChild(productsImageDiv);
        productsListItem.appendChild(productsNameDiv);
        productsListItem.appendChild(productsDescriptionDiv);
        productsListItem.appendChild(productsCategoryDiv);
        productsListItem.appendChild(productsSizeDiv);
        productsListItem.appendChild(productsPriceDiv);
        productsListItem.appendChild(checkoutButtonDiv);

        productsList.appendChild(productConDiv);

        accessoriesPageBody.appendChild(productsList);

        productsImage.onclick = function(){
            productsListTwo.classList.add("active");
            productPopUp(products);
        }

        checkoutButton.onclick = function(){
            const existingProductData = JSON.parse(localStorage.getItem('checkoutProducts')) || [];

            existingProductData.push({
                productname: products.productname,
                productdescription: products.productdescription,
                productcategory: products.productcategory,
                productsize: products.productsize,
                productprice: products.productprice
            })

            localStorage.setItem('checkoutProducts', 
                JSON.stringify(existingProductData));

        document.dispatchEvent(new Event("checkoutUpdated"));
        }
    })
}

function productPopUp(products){
    productsListTwo.innerHTML = "";

    const productDiv = document.createElement('div');
    productDiv.className = "productsDivTwo"

    const exitButton = document.createElement('button');
    exitButton.textContent = 'X';
    exitButton.className = "exButton";
    exitButton.onclick=function(){
        productsListTwo.classList.remove("active");
    }

    const imageDiv = document.createElement('div');
    imageDiv.className = "popupImage";
    const image = document.createElement('img');
    image.src = products.productphotopath;
    image.alt = 'Photo';
    imageDiv.appendChild(image);

    const nameDiv = document.createElement('div');
    nameDiv.className = "popupName"
    const name = document.createElement('h3');
    name.textContent = products.productname;
    nameDiv.appendChild(name);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = "popupDescription";
    const description = document.createElement('p');
    description.textContent = products.productdescription;
    descriptionDiv.appendChild(description);

    const categoryDiv = document.createElement('div');
    categoryDiv.className = "popupCategory"; 
    const category = document.createElement('p');       
    category.textContent = products.productcategory;
    categoryDiv.appendChild(category);

    const sizeDiv = document.createElement('div');
    sizeDiv.className = "popupSize";
    const size = document.createElement('p');
    size.textContent = products.productsize;
    sizeDiv.appendChild(size);
    

    const priceDiv = document.createElement('div');
    priceDiv.className = "popupPrice"
    const price = document.createElement('p');
    price.textContent = `Price: $${products.productprice}`;
    priceDiv.appendChild(price);

    const checkoutButtDiv = document.createElement('div');
    checkoutButtDiv.className = "checkoutB";
    const checkoutButt = document.createElement('button');
    checkoutButt.textContent = "CHECKOUT"
    checkoutButtDiv.appendChild(checkoutButt);
    if (localStorage.getItem('memberUsername') == null) {
            checkoutButt.disabled = true;
        }

    productDiv.appendChild(imageDiv);
    productDiv.appendChild(nameDiv);
    productDiv.appendChild(descriptionDiv);
    productDiv.appendChild(categoryDiv);
    productDiv.appendChild(sizeDiv);
    productDiv.appendChild(priceDiv);
    productDiv.appendChild(checkoutButtDiv);

    productsListTwo.appendChild(exitButton);
    productsListTwo.appendChild(productDiv);

    accessoriesPageBody.appendChild(productsListTwo);

    checkoutButt.onclick = function(){
            const existingProductData = JSON.parse(localStorage.getItem('checkoutProducts')) || [];

            existingProductData.push({
                productname: products.productname,
                productdescription: products.productdescription,
                productcategory: products.productcategory,
                productsize: products.productsize,
                productprice: products.productprice
            })

            localStorage.setItem('checkoutProducts', 
                JSON.stringify(existingProductData));

        document.dispatchEvent(new Event("checkoutUpdated"));
        }
}
/*---PRODUCT LIST AND PRODUCT POP-UP WINDOW SECTION---*/

/*---SORT FUNCTIONALITY---*/
function lowHighSort(lowHighOptions){
let productSort;
if(lowHighOptions === "lowToHigh"){
    productSort = [...productArray].sort((a,b) => a.productprice - b.productprice);
} else if(lowHighOptions === "highToLow"){
    productSort = [...productArray].sort((a,b) => b.productprice - a.productprice);
} else {
    productSort = productArray;
}

productsRender(productSort);
}

function sexSort(genderOptions){
    let genderSort;
    if(genderOptions === "Him"){
        genderSort = productArrayTwo.filter(a => a.productsex === "Men");
    } else if (genderOptions === "Her"){
        genderSort = productArrayTwo.filter(a => a.productsex === "Women");
    } else {
        genderSort = productArrayTwo
    }

    productsRender(genderSort);
}


function brandSort(brandOptions){
    let brandSort;
    if(brandOptions === "Dr. Bronners"){
        brandSort = productArrayFour.filter(a => a.productname === "Dr. Bronner's");
    } else if(brandOptions === "Mrs. Meyers"){
        brandSort = productArrayFour.filter(a => a.productname === "Mrs. Meyers");
    } else if(brandOptions === "Native"){
        brandSort = productArrayFour.filter(a => a.productname === "Native");
    } else {
        brandSort= productArrayFour;
    }

    productsRender(brandSort);
}

sortByPriceSelect.addEventListener('change', function(){
    const priceSelected = this.value;
    lowHighSort(priceSelected)
})

sortBySexSelect.addEventListener('change', function(){
    const sexSelected = this.value;
    sexSort(sexSelected);
})

sortByBrandSelect.addEventListener('change', function(){
    const brandSelected = this.value;
    brandSort(brandSelected);
})

/*---SORT FUNCTIONALITY---*/

//localStorage.clear();
fetchProducts();