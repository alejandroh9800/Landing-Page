window.onload = (event) => {

if ( document.URL.includes("index") ) {

    document.getElementById("home").style.borderBottom= '2px #3882f6 solid';
}

else if ( document.URL.includes("About-Me") ) {

    document.getElementById("about").style.borderBottom= '2px #3882f6 solid';
}

 if ( document.URL.includes("Projects") ) {

    document.getElementById("projects").style.borderBottom= '2px #3882f6 solid';
}

else if ( document.URL.includes("Contact") ) {

    document.getElementById("contact").style.borderBottom= '2px #3882f6 solid';
}
    
   if ( document.URL.includes("Landing-Page") ) {

    document.getElementById("home").style.borderBottom= '2px #3882f6 solid';
} 
    
    
/*
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
  });
*/
};

/*
 
if(window.location.href=="file:///home/alejandrohernandez/repos/Landing-Page/index.html")

    {
        nent.getElementById("home").style.borderBottom= '2px #3882f6 solid';
        console.log("Hello world!"); 
    }

    document.getElementById("demo").innerHTML =
    "The full URL of this page is:<br>" + window.location.href; 

    else ( document.URL.includes("projects") ) {

    document.getElementById("projects").style.borderBottom= '2px #3882f6 solid';
}
*/


