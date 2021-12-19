function login(){  
			var email=document.getElementById("email").value;  
			var entered_username=document.getElementById("entered_username").value;  
			var password1=document.getElementById("password1").value;  
			//Code for password validation  
					// var letters = /^[A-Za-z]+$/; // Its not necessary
					var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  

			//other validations required code  
			if(email== '' ||entered_username ==''|| password1==''){  
				alert("Please, enter your Email, Username and Password");  
				}  
			else if (!email_val.test(email))  
			{  
			alert('Invalid email format please enter valid email id');  
			} 		
			else if(document.getElementById("password1").value.length > 11)  
			{  
			alert("Password must contain 11 character");  
			}  
			else if(document.getElementById("password1").value.length < 11)  
			{  
			alert("Password must contain 11 character");  
			}  
			else{  
			alert("Redirecting to ORDER NOW");  
			window.location="file:///C:/Users/Vitor/Documents/1.%20Ireland/NCI/Web%20Design/Week%206%20CA/CA2/Order%20Now.html";  
			}  
		} 
	
	
	function juan_restaurant(){  
	 
		var discount = document.getElementById('discount').value;  
		var quantity = document.getElementById('quantity').value; 
		var burrito = document.getElementById('burrito').value; 		
		var numbers = /^[0-9]+$/;	

		if(quantity ==''){  
				alert("Please, enter which size and how many would you like.");  
				} 
			
		
		else if (discount == "MEXTEXGOOD") {
			alert ("Your Discount Code has been accepted, you get 13.5% of discount");
			alert ("Thanks for order with us! Check your ORDER NUMBER in your email ");
			window.location="file:///C:/Users/Vitor/Documents/1.%20Ireland/NCI/Web%20Design/Week%206%20CA/CA2/Order%20Now.html";  
		}
		else if (discount != "MEXTEXGOOD") {
			alert ('Use the Code "MEXTEXGOOD" and get 13.5% of discount');
			}			
	}
	
	function supersize (){
		
		var burrito = document.getElementById('burrito').value; 		
		
		if (burrito == "Super Size = 17"){  
			alert("WARNING: You selected SuperSize!") 
		}
		
		
	}
	
	
		
		