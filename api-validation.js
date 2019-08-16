// JavaScript Document

//set up variables and store reference to the form, the email input and the span with class of error 
var form = document.querySelector('form'); 
var email = document.getElementById('e_mail'); 
var firstname= document.getElementById('first_name');
var age= document.getElementById('age');
var city= document.getElementById('cityy');


var alphaSet = /^[a-zA-Z]+$/;

var numSet = /^[0-9]+$/;
var error = document.querySelector('.error');
var errorfirst_name = document.querySelector('.errorfirst_name');
var error_age = document.querySelector('.error_age');
var error_cityy = document.querySelector('.error_cityy');

var asideHeading=document.querySelector('aside h2');



email.addEventListener("input", function (event) {
  if(email.validity.valid) {
    //in case there is an error message visible, we remove the error message 
    error.innerHTML = ""; //reset the content of the message
    error.className = "error"; //reset the visual state of the message
  }  
  
}, false); 

firstname.addEventListener("input", function (event) {
  if(firstname.value.match(alphaSet)) {
      //in case there is an error message visible, we remove the error message 
      errorfirst_name.innerHTML = ""; //reset the content of the message
      errorfirst_name.className = "error"; //reset the visual state of the message
    }  
  } ,false); 

 

    age.addEventListener("input", function (event) {
      if(age.value.match(numSet)) {
          //in case there is an error message visible, we remove the error message 
          error_age.innerHTML = ""; //reset the content of the message
          error_age.className = "error"; //reset the visual state of the message
        }  
      } ,false);

      city.addEventListener("input", function (event) {
        if(city.value.match('barrie')) {
            //in case there is an error message visible, we remove the error message 
            error_cityy.innerHTML = ""; //reset the content of the message
            error_cityy.className = "error"; //reset the visual state of the message
          }  
        } ,false); 

        
           

      

form.addEventListener("submit", function(event) {
  //each time the user tries to send the date, we are going to check if the email field is valid 
  if(!email.validity.valid) {
    //if the field is not valid, we display a custom error message 
    error.innerHTML = "enter a valid email please!"; 
    error.className = "error active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }
  if(!firstname.value.match(alphaSet)) {
    //if the field is not valid, we display a custom error message 
    
    errorfirst_name.innerHTML = "Enter Valid name please!"; 
    errorfirst_name.className = "error active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }
 
  if(!age.value.match(numSet)) {
    //if the field is not valid, we display a custom error message 
    
    error_age.innerHTML = "enter valid age please!"; 
    error_age.className = "error active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }

  
  if(!city.value.match('barrie')) {
    //if the field is not valid, we display a custom error message 
    
    error_cityy.innerHTML = "write barrie please!"; 
    error_cityy.className = "error active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }



}, false); 


