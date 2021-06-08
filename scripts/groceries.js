// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
        hallal: true,
		category: "Vegetables",
		img: "images/Brocoli.jpg",
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
        hallal: true,
		category: "Grocery",
		img: "images/Bread.jpg",
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
        hallal: true,
		category: "Meat and Fish",
		img: "images/Salmon.jpg",
		price: 10.00
	},
	{
		name: "Butter",
		vegetarian: true,
		glutenFree: true,
		organic: true,
        hallal: true,
		category: "Grocery",
		img: "images/Butter.jpg",
		price: 3.50
	},
	{
		name: "yogurt",
		vegetarian: true,
		glutenFree: true,
		organic: false,
        hallal: true,
		category: "Dairy",
		img: "images/yogurt.jpg",
		price: 5.60
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
        hallal: true,
		category: "Meat and Fish",
		img: "images/chicken.jpg",
		price: 13.50
	},
	{
		name: "spaghetti",
		vegetarian: true,
		glutenFree: false,
		organic: false,
        hallal: true,
		category: "Grocery",
		img: "images/spaghetti.jpg",
		price: 1.50
	},
	{
		name: "tomatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
        hallal: true,
		category: "Vegetables",
		img: "images/tomatoes.jpg",
		price: 4.00
	},
	{
		name: "beef lasagna",
		vegetarian: false,
		glutenFree: false,
		organic: false,
        hallal: false,
		category: "Meat and Fish",
		img: "images/beef_lasagna.jpg",
		price: 9.99
	},
	
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
        hallal: true,
		category: "Fruits",
		img: "images/apples.jpg",
		price: 3.70
	},
	{
		name: "Bananas",
		vegetarian: true,
		glutenFree: true,
		organic: false,
        hallal: true,
		category: "Fruits",
		img: "images/Bananas.png",
		price: 0.90
	},
	{
		name: "peaches",
		vegetarian: true,
		glutenFree: true,
		organic: true,
        hallal: true,
		category: "Fruits",
		img: "images/peaches.jpg",
		price: 9.30
	},
	{
		name: "mango",
		vegetarian: true,
		glutenFree: true,
		organic: false,
        hallal: true,
		category: "Fruits",
		img: "images/mango.jpg",
		price: 1.20
	},
	{
		name: "blueberries",
		vegetarian: true,
		glutenFree: true,
		organic: true,
        hallal: true,
		category: "Fruits",
		img: "images/blueberries.jpg",
		price: 5.90
	},
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		organic: false,
        hallal: true,
		category: "Vegetables",
		img: "images/carrots.jpg",
		price: 2.80
	},
	{
		name: "onions",
		vegetarian: true,
		glutenFree: true,
		organic: true,
        hallal: true,
		category: "Vegetables",
		img: "images/onions.jpg",
		price: 3.20
	},
	{
		name: "peppers",
		vegetarian: true,
		glutenFree: true,
		organic: false,
        hallal: true,
		category: "Vegetables",
		img: "images/peppers.jpg",
		price: 3.99
	},
	{
		name: "shrimps",
		vegetarian: false,
		glutenFree: true,
		organic: false,
        hallal: true,
		category: "Meat and Fish",
		img: "images/shrimps.jpg",
		price: 12.00
	},
	{
		name: "breaded haddock",
		vegetarian: false,
		glutenFree: false,
		organic: false,
        hallal: false,
		category: "Meat and Fish",
		img: "images/breaded_haddock.jpg",
		price: 11.50
	},
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
        hallal: false,
		category: "Meat and Fish",
		img: "images/Steak.jpg",
		price: 8.40
	},
	{
		name: "sour cream",
		vegetarian: false,
		glutenFree: true,
		organic: false,
        hallal: true,
		category: "Dairy",
		img: "images/sour_cream.jpg",
		price: 3.50
	},
	{
		name: "mozzarella",
		vegetarian: false,
		glutenFree: true,
		organic: false,
        hallal: true,
		category: "Dairy",
		img: "images/mozzarella.jpg",
		price: 5.00
	},
	{
		name: "milk",
		vegetarian: false,
		glutenFree: true,
		organic: true,
        hallal: true,
		category: "Dairy",
		img: "images/milk.jpg",
		price: 4.00
	},
	{
		name: "coconut milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
        hallal: true,
		category: "Grocery",
		img: "images/coconut_milk.jpg",
		price: 3.00
	},
	{
		name: "corn",
		vegetarian: true,
		glutenFree: false,
		organic: false,
        hallal: true,
		category: "Grocery",
		img: "images/corn.jpg",
		price: 2.00
	},
	{
		name: "thyme",
		vegetarian: true,
		glutenFree: true,
		organic: false,
        hallal: true,
		category: "Grocery",
		img: "images/thyme.jpg",
		price: 5.50
	}
];

function filterCategory(cat){
	var prodList = [];

	for(i = 0; i < products.length; i++){
		if(products[i].category == cat){
			prodList.push(products[i]);
		}
	}

	return prodList;
}

function restrictListProducts(prods, restrictionsList) {

	console.log("Enter restrictProducts :");

	let products = [];

	// V GF O
	if (restrictionsList.includes("Vegan") && restrictionsList.includes("Gluten Free") && restrictionsList.includes("Organic")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].vegetarian == true && prods[i].glutenFree == true && prods[i].organic == true){
				products.push(prods[i]);
			}
		}
	}
	// V GF
	else if (restrictionsList.includes("Vegan") && restrictionsList.includes("Gluten Free")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].vegetarian == true && prods[i].glutenFree == true){
				products.push(prods[i]);
			}
		}
	}
	// V O
	else if (restrictionsList.includes("Vegan") && restrictionsList.includes("Organic")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].vegetarian == true && prods[i].organic == true){
				products.push(prods[i]);
			}
		}
	}
	// GF O
	else if (restrictionsList.includes("Organic") && restrictionsList.includes("Gluten Free")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].organic == true && prods[i].glutenFree == true){
				products.push(prods[i]);
			}
		}
	}
	// V
	else if (restrictionsList.includes("Vegan")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].vegetarian == true){
				products.push(prods[i]);
			}
		}
	}
	// GF
	else if (restrictionsList.includes("Gluten Free")) {
		for(i = 0; i < prods.length; i++){
			if(prods[i].glutenFree == true){
				products.push(prods[i]);
			}
		}
	}
    //h
   
	// O
	else if (restrictionsList.includes("Organic")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].organic == true){
				products.push(prods[i]);
			}
		}
	} else {
		for(i = 0; i < prods.length; i++){
			products.push(prods[i]);
		}
	}

	return products;
}