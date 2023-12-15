var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
// var searchInput = document.getElementById("searchInput");
var addBtn = document.getElementById("addBtn");
var UpdateBtn = document.getElementById("updateBtn");
var productContainer = [];

if (localStorage.getItem("product") != null) {
  productContainer = JSON.parse(localStorage.getItem("product"));
  displayProduct();
}

function addproduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescriptionInput.value,
  };
  productContainer.push(product);
  localStorage.setItem("product", JSON.stringify(productContainer));
  console.log(productContainer);
  displayProduct();
  clearForm();
}

function displayProduct() {
  var cartona = "";
  for (var i = 0; i < productContainer.length; i++) {
    cartona += `
        <tr>
        <td>${productContainer[i].name} </td>
        <td>${productContainer[i].price} </td>
        <td>${productContainer[i].category} </td>
        <td>${productContainer[i].desc} </td> 
        <td>
        <button onclick="setFormForUpdate(${i})" class="btn btn-outline-warning btn-sm">Update</button>
        </td>
        <td>
        <button onclick="deletProduct(${i}) ;" class="btn btn-outline-danger btn-sm">Delet</button>
        
        </td>
    </tr>`;
  }
  document.getElementById("bodyData").innerHTML = cartona;
}

function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescriptionInput.value = "";
}

function deletProduct(productIndex) {
  productContainer.splice(productIndex, 1);
  localStorage.setItem("product", JSON.stringify(productContainer));
  displayProduct();
}
//////// error fe al search m4 betl3
function searchProduct(term) {
  var matchedProduct = [];
  for (var i = 0; i < productContainer.length; i++) {
    if (
      productContainer[i].name.toLowerCase().includes(term.toLowerCase()) ==
      true
    ) {
      matchedProduct.push(productContainer[i]);
    }
  }
  displayProduct(matchedProduct);
}
/////////////////////////////////////////////////
function setFormForUpdate(i) {
  addBtn.classList.replace("d-block", "d-none");
  UpdateBtn.classList.replace("d-none", "d-block");
  productNameInput.value = productContainer[i].name;
  productPriceInput.value = productContainer[i].price;
  productCategoryInput.value = productContainer[i].category;
  productDescriptionInput.value = productContainer[i].desc;
}
