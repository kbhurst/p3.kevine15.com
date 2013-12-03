	//add in event listener for form
	
	document.getElementById("shoppingBagItems").addEventListener("submit", estimateOrderTotal, false);
	
	function estimateOrderTotal(whenClicked) {
	
	event.preventDefault();		//otherwise the form simply reloads
	
	if (document.getElementById("shipping-states").value === '') {
		alert("Please choose your state");
		
		<!--need? -->
		document.getElementById("shipping-states").focus();   //shows where error is located
		return;
	}
	
	var hats = parseInt(document.getElementById('orderHats').value, 10),
	if (hats == NaN) hats = 0;
	
	 coats = parseInt(document.getElementById('orderCoats').value, 10),
	if (coats = NaN) coats = 0;

	gloves = parseInt(document.getElementById('orderGloves').value, 10);
	//if (gloves = NaN) gloves = 0;
	
	var quantityTotal = hats + coats + gloves;
	
	var state = document.getElementById('shipping-states').value;
	var taxes = 1;
	if (state = 'UT') taxes = 1.0685;
	
	var shipping = document.getElementById('shipping-methods').value;