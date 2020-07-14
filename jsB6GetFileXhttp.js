let path2terms = 'https://b6.hu/terms_of_use.php';
let path2policy = 'privacy_policy.htm';
let path2feedBack = 'feedback.php';


function loadXMLDoc(path2file, element) {
	alert(path2policy);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4) {
			if (this.status == 200) {
				document.getElementById(element).innerHTML += this.responseText;
			}
		}
	};

	xhttp.open("GET", path2file, true);
	xhttp.send();
}

function getTermsOfUse(element) {
	loadXMLDoc(path2terms, element);
}

function getPrivacyPolicy(element) {
	loadXMLDoc(path2policy, element);
}

function getFeedBack(element) {
	loadXMLDoc(path2feedBack, element);
}


