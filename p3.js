//Kevin Hurst
  //add in event listener for form
	
	document.getElementById('shoppingBagItems').addEventListener('submit', estimateOrderTotal, false);
	
	function estimateOrderTotal(whenClicked) {
	
	event.preventDefault();		//otherwise the form simply reloads
	
	
	//ran into problems with strings and integers.  Found parseInt at w3schools.  

	
	var hats = parseInt(document.getElementById('orderHats').value, 10) || 0;
	//if (hats == NaN) {hats = 0};
	
	var coats = parseInt(document.getElementById('orderCoats').value, 10) || 0;
	//if (coats = NaN) coats = 0;

	var gloves = parseInt(document.getElementById('orderGloves').value, 10) || 0;
	//if (gloves = NaN) gloves = 0;
	
	var socks = parseInt(document.getElementById('orderSocks').value, 10) || 0;
	
	var quantityTotal = hats + coats + gloves + socks;
	
	
	var state = document.getElementById('shipping-states').value;
	var taxes = 1;
	if (state == 'UT') {taxes = 1.0685};

	
	var shipping = document.getElementById('shipping-methods').value;
	
	//switch worked better than the original if-then statement

	switch (shipping) {
		case 'Pickup' : shipping = 0;
		break;
		case 'USPS' : shipping = 2 * quantityTotal;
		break;
		case 'FedEx' : shipping = 3 * quantityTotal;
		break;
		case 'FedExAH' : shipping = 4 * quantityTotal;
		break;
	}

	//calculate shipping
	console.log(taxes)
	var freeShippingEstimate = (hats * 20 + coats * 50 + gloves * 25 + socks * 15) 
	if (freeShippingEstimate >= 200) {shipping = 0};
	//console.log(taxes);
	//calculate total cost
	
	var estimate = (hats * 20 + coats * 50 + gloves * 25 + socks * 15) * taxes + shipping;
	

	
	//estimate box
	document.getElementById('estimateBox').value = '$' + estimate.toFixed(2);
	
	
	//order summary
	document.getElementById('orderSummary').innerHTML = 'Item Count : ' + quantityTotal + '<br>';
	document.getElementById('orderSummary').innerHTML += 'Total Shipping:$ ' + shipping + '<br>';
}
	