/* Une portion de ce code a été pris de https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery (Caroline Barriere) */

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}




function populateListProductChoices(slct1, slct2) {
    var booleanArray = slct1;
    var productTab = document.getElementById(slct2);
	
	
	productTab.innerHTML = "";
	

	products.sort(function(a, b) {
		var keyA = a.price;
		var keyB = b.price;
		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	});


    var optionArray = restrictListProducts(products, booleanArray);
		
	for (i = 0; i < optionArray.length; i++) {
		var divCard = document.createElement("div");
		divCard.className  = "card";

		var image = document.createElement("img");
		image.className  = "card";
		image.src = "images/${optionArray[i].name}.jpg";
		image.alt = optionArray[i].name;
		divCard.appendChild(image);

		var divCardBody = document.createElement("div");
		divCardBody.className  = "card-body";
		
		var labelCard = document.createElement("label");
		labelCard.className  = "card";
		
		var h2Card = document.createElement("h2");
		h2Card.innerText = optionArray[i].name;
		labelCard.appendChild(h2Card);
		
		labelCard.innerHTML += optionArray[i].price;

		var inputCard = document.createElement("input");
		inputCard.type = "checkbox";
		inputCard.name = "product";
		inputCard.value = optionArray[i].name;
		labelCard.appendChild(inputCard);

		divCardBody.appendChild(labelCard);

		divCard.appendChild(divCardBody);

		productTab.appendChild(divCard);
	}
}



function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var cart = document.getElementById('displayCart');
	cart.innerHTML = "";
	
	
	var para = document.createElement("p");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	cart.appendChild(para);

	var cartBody = document.createElement("div");
	cartBody.className = "products";

	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {

		
			for (let j=0; j<products.length; j+=1) {
				if (ele[i].value.indexOf(products[j].name) > -1){
					cartBody.appendChild(populateCartWithProduct(products[j]));
				}
			}

			chosenProducts.push(ele[i].value);
		}
	}
	
	cart.appendChild(cartBody);
	cart.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}


function populateCartWithProduct(product) {
	var divCard = document.createElement("div");
	divCard.className  = "card";

	var image = document.createElement("img");
	image.className  = "card";
	image.src = "images/${product.name}.jpg";
	image.alt = product.name;
	divCard.appendChild(image);

	var divCardBody = document.createElement("div");
	divCardBody.className  = "card-body";
	
	var h2Card = document.createElement("h2");
	h2Card.innerText = product.name;
	divCardBody.appendChild(h2Card);

	var labelCard = document.createElement("label");
	labelCard.className  = "card";
	labelCard.innerText = product.price;

	divCardBody.appendChild(labelCard);

	divCard.appendChild(divCardBody);

	return divCard;
}