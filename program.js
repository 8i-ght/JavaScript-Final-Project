"use strict"

window.addEventListener("load", function(){
    calcCart();
    var cart= document.forms.cart;
    cart.elements.modelQty.onchange = calcCart;
    var InsuranceOptions = document.querySelectorAll('input[name = "insurance"]');
    var ShippingOptions = document.querySelectorAll('input[name = "shipping"]');
    for (var i = 0; i < ShippingOptions.length; i++) {
      ShippingOptions[i].onclick = calcCart;
    }
    for (var i= 0; i < InsuranceOptions.length; i++) {
      InsuranceOptions[i].onclick = calcCart;
    }
  });
  
  
  function calcCart(){
      var cart = document.forms.cart;
      var machineCost = cart.elements.modelCost.value;
      var qIndex = cart.elements.modelQty.selectedIndex;
      var qty = cart.elements.modelQty[qIndex].value;
  
      var orderCost = machineCost * qty;
      cart.elements.orderCost.value = formatUSCurrency(orderCost);
  
      var shipCost = document.querySelector('input[name = "shipping"]:checked').value * 1;
      cart.elements.shippingCost.value = formatNumber(shipCost, 2);

      var insurCost = document.querySelector('input[name = "insurance"]:checked').value * 1;
      cart.elements.insuranceCost.value = formatNumber(insurCost, 2);
  
      
      cart.elements.subTotal.value = formatNumber(orderCost + shipCost, 2);
      cart.elements.subTotal.value = formatNumber(orderCost + insurCost, 2);
  
  
      var salesTax = 0.05 * (orderCost+shipCost);
      cart.elements.salesTax.value = formatNumber(salesTax, 2);
  
      cart.elements.cartTotal.value = formatUSCurrency((orderCost+shipCost+salesTax+insurCost), 2);

  
      cart.elements.shippingType.value = document.querySelector('input[name ="shipping"]:checked').nextSibling.nodeValue;
      cart.elements.insuranceType.value = document.querySelector('input[name ="insurance"]:checked').nextSibling.nodeValue;
      }
  
  
  
  
  
  
  
  
  
  function formatNumber(val, decimals) {
     return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                           maximumFractionDigits: decimals});
  }
  
  function formatUSCurrency(val) {
     return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
  }
 
 
 
 
 
 
 
 function formatNumber(val, decimals) {
    return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                          maximumFractionDigits: decimals});
 }
 
 function formatUSCurrency(val) {
    return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
 }