$(document).ready(function() {
	
	$(function(){
	    setTimeout(checkAuth,100);
	    
	});
	
	function checkAuth(){
		if(getCookie("username") != null) {
			window.location.replace("/home");
		}else {
			const button = document.querySelector("#btn");
			 button.addEventListener("click", (e) =>{
				 e.preventDefault();
				 console.log("fmm");
				 a();
			 });
			
		}
	}
	
	
	function getCookie(name) {
		 return document.cookie.split("=")[1];
	}
	
	
	async function a(){
		const email = $("#usrnm")[0].value;
		const pass = $("#pass")[0].value;
    $.ajax({
    	url: `/user/validate-credentials?username=${email}&password=${pass}`
    }).then(function(data, textStatus, xhr) {
    	if(xhr.status === 200){
    		createCookie(data);
    		window.location.replace("/home");
    	}else {
    		alert("Invalid credentials");
    	}
    }).fail(function (error) {
        alert("Invalid credentials");
    });
	}
});

function createCookie(value) {
	let cookie = escape("username") + "=" + escape(value) + ";";
	document.cookie = cookie;
	console.log(cookie);
	console.log("Saves username" + value + " in the cookie");
}

