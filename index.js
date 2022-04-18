$(document).ready(function () {
	$("#form").submit(function () {
		console.log("submitted");
		var nameLength = $("#name").val().length;
		var name = $("#name").val();
		var email = $("#email").val();
		var password1 = $("#password").val();
		var password2 = $("#confirmPassword").val();

		var nameRegex = /([0-9])/;
		var emailRegex =
			/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var passwordRegex1 =
			/([A-Z].*[a-z])|([a-z].*[A-Z])([0-9])+([!,%,&,@,#,$,^,*,?,_,~])/;
		var passwordRegex2 = /([0-9])/;
		var passwordRegex3 = /([!,%,&,@,#,$,^,*,?,_,~])/;

		// name validation
		if (nameLength < 3) {
			alert("Please enter valid name (*minimum 3 charectors)");
			return false;
		}
		if (nameRegex.test(name) == true) {
			alert("Please enter valid name (*should not contain numbers)");
			return false;
		}
		// email validation
		else if (emailRegex.test(email) == false) {
			alert("Please enter Correct Email");
			return false;
		}
		// password validation
		if (
			password1.length < 8 ||
			passwordRegex1.test(password1) == false ||
			passwordRegex2.test(password1) == false ||
			passwordRegex3.test(password1) == false
		) {
			alert("Please enter Strong Password");
			return false;
		}
		// password confirmation
		else if (password1 !== password2) {
			alert("Passwords doesn't match..!");
		} else {
			alert("Sign up Successful");
			return true;
		}
	});

	// password hide & show
	$("#imageContainer1").click(function () {
		var password = $("#password");
		if (password.attr("type") === "password") {
			password.attr("type", "text");
		} else {
			password.attr("type", "password");
		}
	});

	$("#imageContainer2").click(function () {
		var password = $("#confirmPassword");
		if (password.attr("type") === "password") {
			password.attr("type", "text");
		} else {
			password.attr("type", "password");
		}
	});

	// datepicker
	$("#datepicker").datepicker({ dateFormat: "dd-mm-yy" });
	// age
	$("#ageSelector").click(function () {
		var dob = $("#datepicker").datepicker("getDate");
		var today = new Date();
		var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
		$("#ageSelector").val(age);
	});
});
