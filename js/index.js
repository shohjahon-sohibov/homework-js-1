var intro = alert("welcome to our site")
var firstName = prompt("Write your First name, please", "Umar").trim();
var lastName = prompt("Write your Last name, please", "Sokhibov").trim();
var birthday = prompt("Write your Birthday, please", "").trim();
var address = prompt("Write your Address, please", "").trim();
var email = prompt("Write your Email, please", "").trim();
var password = prompt("create private paasword, please but we show to everyone that ho-ho-ho", "max 8 characters because l may forget").trim();
var phoneNumber = prompt("Write your phonenumber, please", "").trim();

console.log(
  ` First name: ${firstName}\n Last name: ${lastName}\n Birthday: ${birthday}\n Address: ${address}\n Email: ${email}\n Password: ${password}\n Phone number: ${phoneNumber}\n`
);