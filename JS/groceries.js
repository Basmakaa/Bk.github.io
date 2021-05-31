/* Une portion de ce code a été pris de https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery (Caroline Barriere) */

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		vegan: true,
		dairyF: true,
		price: 1.5
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		vegan: false,
		dairyF: false,
		price: 2.00
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: true,
		price: 9.97
	},
	{
		name: "Bananas",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		vegan: true,
		dairyF: true,
		price: 2.43
	},
	{
		name: "Tomatoe",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		vegan: true,
		dairyF: true,
		price: 1.21
	},
	
	{
		name: "Onion",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		vegan: true,
		dairyF: true,
		price: 1.60
	},
	{
		name: "Milk",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: false,
		price: 4.35
	},
	{
		name: "Eggs",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: true,
		price: 2.69
	},
	{
		name: "Butter",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: false,
		price: 4.49
	},
	{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: false,
		price: 5.99
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		vegan: false,
		dairyF: true,
		price: 13.14
	},
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: true,
		price: 14.78 
	},
	{
		name: "Bacon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		vegan: false,
		dairyF: true,
		price: 3.99
	}
];

function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let index=0; index<products.length; index+=1) {
		if (chosenProducts.indexOf(products[index].name) > -1){
			totalPrice += products[index].price;
		}
	}

	totalPrice = Math.round(totalPrice * 100) / 100;
	return totalPrice;
}


function restrictListProducts(prods, restriction) {
	let restrictedProduct = [];
	for (let i=0; i<prods.length; i+=1) {
		//Vegetarian
		if ((restriction[0]) && (!prods[i].vegetarian)){
			continue;
		}
		//Gluten-Free
		if ((restriction[1]) && (!prods[i].glutenFree)){
			continue;
		}
		//organic
		if ((restriction[2]) && (!prods[i].organic)){
			continue;
		}
		//vegan 
		if ((restriction[3]) && (!prods[i].vegan)){
			continue;
		}
		//dairy Free
		if ((restriction[4]) && (!prods[i].dairyF)){
			continue;
		}
		restrictedProduct.push(prods[i]);
	}
	return restrictedProduct;
}
