var total = 0;

var groceryList = [
			{ item: "Bunch of carrots",
			  price: 1.65
			},
			{ item: "Pumpkin",
			  price: 3.15
			},
			{ item: "Milk",
			  price: 2.25
			}
	];


groceryList.forEach(function(obj){
		 
		 console.log(obj.name +": $"+ obj.price);
         total += obj.price;
});
console.log("Total= $" + total);

var list= document.getElementById('list');
var Ftotal = document.getElementById('totally');
var button = document.getElementById('button');
var total = 0;

groceryList.forEach(function(el) {
	var newList = document.createElement("li");
	newList.innerText += el.item + " $" + el.price;
	list.appendChild(newList);
	total += el.price;
	Ftotal.innerText = total;
});



button.addEventListener("click",function() {
	var newItem = getElementById("food").value;
	var newPrice = getElementById("price").value;
	var newNew = document.createElement('li');
	newNew.innerText += newItem + " $" + newPrice;
	list.appendChild(newNew);
	total += newPrice;
	Ftotal.innerText = total.toFixed(2);
});