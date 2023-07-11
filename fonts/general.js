/*
***********************************************************
***********************************************************
COOKIES
***********************************************************
***********************************************************
*/


// Cree cookie
// Surce: http://www.w3schools.com/js/js_cookies.asp 
function setCookie(cname, cvalue, exdays) 
{   
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Obtene cookie
// Surce: http://www.w3schools.com/js/js_cookies.asp 
function getCookie(cname) 
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*
***********************************************************
BROWSERSKLINK
***********************************************************
***********************************************************
*/

function openTab(evt, xName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(xName).style.display = "block";
  evt.currentTarget.className += " active";
} 

/*
***********************************************************
***********************************************************
CURS
***********************************************************
***********************************************************
*/

function change_lang (lang_name)
{
	var counter = 0;
	
	var x = document.getElementsByClassName("cursBahsa");
	
	if (lang_name == "es") {
		// Hides all texts
		for (counter = 0; counter < x.length; counter++) {
			x[counter].style.display = "none";
		}
		
		// Show the desired language
		for (counter = 0; counter < document.getElementsByClassName("bahsaEs").length; counter++) {
			document.getElementsByClassName("bahsaEs")[counter].style.display = "block";
		}
	}
	else if (lang_name == "pt-br") {
		// Hides all texts
		for (counter = 0; counter < x.length; counter++) {
			x[counter].style.display = "none";
		}
		
		// Show the desired language
		for (counter = 0; counter < document.getElementsByClassName("bahsaPtbr").length; counter++) {
			document.getElementsByClassName("bahsaPtbr")[counter].style.display = "block";
		}
	}
	else if (lang_name == "fr") {
		// Hides all texts
		for (counter = 0; counter < x.length; counter++) {
			x[counter].style.display = "none";
		}
		
		// Show the desired language
		for (counter = 0; counter < document.getElementsByClassName("bahsaFr").length; counter++) {
			document.getElementsByClassName("bahsaFr")[counter].style.display = "block";
		}
	}
	else if (lang_name == "ru") {
		// Hides all texts
		for (counter = 0; counter < x.length; counter++) {
			x[counter].style.display = "none";
		}
		
		// Show the desired language
		for (counter = 0; counter < document.getElementsByClassName("bahsaRu").length; counter++) {
			document.getElementsByClassName("bahsaRu")[counter].style.display = "block";
		}
	}
	else {
		// Hides all texts
		for (counter = 0; counter < x.length; counter++) {
			x[counter].style.display = "none";
		}
		
		// Show the desired language
		for (counter = 0; counter < document.getElementsByClassName("bahsaEn").length; counter++) {
			document.getElementsByClassName("bahsaEn")[counter].style.display = "block";
		}
	}
}

function change_lection (lection)
{
	var counter = 0;
	
	var x = document.getElementsByClassName("mathmounCursDeil");
	
	// Hides all lections
	for (counter = 0; counter < x.length; counter++) {
		x[counter].style.display = "none";
	}
	
	// Move page to the top
	window.scrollTo(0, 0);
	
	// Shows the desired one
	document.getElementById(lection).style.display = "block";
}

function play_pause(player)
{
	var myAudio = document.getElementById(player);
	if (myAudio.paused)
	{
		myAudio.play();
	}
	else
	{
		myAudio.pause();
	}
}

function select_answer (is_it_correct, id)
{
	if (is_it_correct == 1) {
		document.getElementById(id).style.background = "#00FF00";
	}
	else {
		document.getElementById(id).style.background = "#FF0000";
	}
}

function toggle_spt ()
{
	var counter = 0;
	
	var x = document.getElementsByClassName("spt");
	
	if (x[1].style.display == "inline" || x[1].style.display == "block") {
		for (counter = 0; counter < x.length; counter++) {
			x[counter].style.display = "none";
		}
	}
	else if (x[1].style.display == "none") {
		for (counter = 0; counter < x.length; counter++) {
			x[counter].style.display = "inline";
		}
	}
	else {
		for (counter = 0; counter < x.length; counter++) {
			x[counter].style.display = "none";
		}
	}
	
	if (document.getElementById('spt_general_button').innerHTML == "<strong>{}</strong>") {
		document.getElementById('spt_general_button').innerHTML = "<strong><s>{}</s></strong>";
	}
	else if (document.getElementById('spt_general_button').innerHTML == "<strong><s>{}</s></strong>") {
		document.getElementById('spt_general_button').innerHTML = "<strong>{}</strong>";
	}
}

/*
***********************************************************
***********************************************************
HIDDEN ELEMENTS
***********************************************************
***********************************************************
*/



function kehl() 
{
	var x = document.getElementsByClassName("kohlen");
	var i;
	for (i = 0; i < x.length; i++)
	{
		x[i].style.display = "none";
	}
}


function auncovehr(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/*
***********************************************************
***********************************************************
SLIDES
***********************************************************
***********************************************************
*/


function passSlide (next) {
	var counter = 0;
	var x = document.getElementsByClassName("slides");
	
	// Hides all slides
	for (counter = 0; counter < x.length; counter++) {
		document.getElementsByClassName("slides")[counter].style.display = "none";
	}
	
	// Show the next slide
	document.getElementById(next).style.display = "block";
}

