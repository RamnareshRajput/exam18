function init() {
	document.addEventListener("deviceready", deviceReady, true);
	delete init;
}

// check login detail is valid user name and password
function checkPreAuth() {

	var form = $("#loginForm");

	var u = $("#username", form).val();
	var p = $("#password", form).val();
	if (u != '' && p != '') {
		handleLogin();
	} else {

	}

}
function handleLogin() {
	var form = $("#loginForm");
	// disable the button so we can't resubmit while we wait
	// $("#submitButton", form).attr("disabled", "disabled");
	var u = $("#username", form).val();
	var p = $("#password", form).val();
	if (u != '' && p != '') {
		
		alert(u);
		var id = "63";

		$
				.ajax({
					type : 'GET',
					url : "http://myapps.retailapps.me/webservices.php/customer/login?",
					data : "merchant_id=" + id + "&email=" + u + "&password="
							+ p,
					contentType : "application/json; charset=utf-8",
					success : function(msg) {

						var obj = jQuery.parseJSON(msg);
						alert(obj.status);

						if (obj.status === "Success") {
							alert("sussssss");
							obj = "";
							$.mobile.changePage("Welcome.html");
						} else {

							navigator.notification.alert("Your login failed",
									function() {
									});
						}

					},

					error : function(xhr, ajaxOptions, thrownError) {
						alert('error');
					}

				});
	} else {
		// Thanks Igor!
		navigator.notification.alert("You must enter a username and password",
				function() {
				});
		// $("#submitButton").removeAttr("disabled");
	}
	return false;
}

function deviceReady() {

	$("#loginForm").on("submit", handleLogin);

}