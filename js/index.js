$(document).ready(function () {
    $('#content').hide().fadeIn(3000); 
function resetSign(event){
    var signData = ['greeting', 'userSign', 'tiles', 'subTotal', 'shipping', 'grandTotal'];
    for (var i=0; i<signData.length; i++){
        setTextContentByID(signData[i], '')
    }
    event.preventDefault();
}

// Create variables for the welcome message
var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';

// Create variables to hold details about the sign
var welcome;
var sign = '[not initialized]';
var tiles, subTotal, shipping, grandTotal;

function calcSign(){
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function initiateVars() {
  greeting = 'Howdy';
  name = 'Garett';
  message = 'Double check your order:';
  sign = 'JavaScript!';
  // Concatenate the three variables above to create the welcome message
  welcome = greeting + '! ' + name + ', ' + message;
  calcSign();
}

function setTextContentByID(getId, setMsg) {
  // Get the element that has an id of greeting
  var el = document.getElementById(getId);
  // Replace the content of that element with the personalized welcome message
  el.textContent = setMsg;
}

function setSign(){
setTextContentByID('greeting', welcome);
setTextContentByID('userSign', sign);
setTextContentByID('tiles', tiles);
setTextContentByID('subTotal', '$' + subTotal);
setTextContentByID('shipping', '$' + shipping);
setTextContentByID('grandTotal', '$' + grandTotal);
}

initiateVars();
setSign();

var el = document.getElementById('resetButton')
el.addEventListener('click', resetSign, false);
})