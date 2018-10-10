var paymentmethod ='';
if(document.getElementsByName("paymentMethod")[0].checked){
    paymentmethod = "Credit card";
}
else if(document.getElementsByName("paymentMethod")[1].checked){
    paymentmethod = "Debit card";
} 
else {
    paymentmethod = "PayPal";
}

var formdata = {}
formdata["firstname"] = document.getElementById("firstName").value + document.getElementById("lastName").value
formdata["username"] = document.getElementById("username").value
formdata["email"] = document.getElementById("email").value
formdata["address"] = document.getElementById("address").value
formdata["address2"] = document.getElementById("address2").value
formdata["country"] = document.getElementById("country").value
formdata["state"] = document.getElementById("state").value
formdata["zip"] = document.getElementById("zip").value
formdata["save-info"] = document.getElementById("save-info").value
formdata["same-address"] = document.getElementById("same-address").value
formdata["payment-method"] = paymentmethod
formdata["card-name"] = document.getElementById("cc-name").value
formdata["card-number"] = document.getElementById("cc-number").value
formdata["card-expiry"] = document.getElementById("cc-expiration").value
formdata["card-cvv"] = document.getElementById("cc-cvv").value

console.log({formdata});