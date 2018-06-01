function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

Object.keys(userLogin).forEach(function(key,index) {
    console.log(userLogin[key].id, userLogin[key].pass);
	if (username === userLogin[key].id && password === userLogin[key].pass){
		localStorage.setItem('loginUsername', JSON.stringify(userLogin[key].id));
		window.location = "timeline.html" // Redirecting to other page.
	}
});
}

