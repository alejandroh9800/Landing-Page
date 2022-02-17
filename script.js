window.onload = (event) => {
    /*

if ( document.URL.includes("index") ) {

    document.getElementById("home").style.borderBottom= '2px #3882f6 solid';
}

*/

if ( document.URL.includes("About-Me") ) {

    document.getElementById("about").style.borderBottom= '2px #3882f6 solid';
}

 if ( document.URL.includes("Projects") ) {

    document.getElementById("projects").style.borderBottom= '2px #3882f6 solid';
}

 if ( document.URL.includes("Contact") ) {

    document.getElementById("contact").style.borderBottom= '2px #3882f6 solid';
}
    

if ( (on_index = true && document.URL.includes("Contact")) || (on_index = true && document.URL.includes("About")) || (on_index = true && document.URL.includes("Projects"))){
    
     document.getElementById("home").style.borderBottom= 'none';
}
    
else {
    
    document.getElementById("home").style.borderBottom= '2px #3882f6 solid';
}      
};
