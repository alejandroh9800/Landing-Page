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
   
       
if ( on_index = true && document.URL.includes("About-Me")){
    
     document.getElementById("home").style.borderBottom= '2px solid rgb(20, 40, 70)';
}
    
if ( on_index = true && document.URL.includes("Products")){
    
     document.getElementById("home").style.borderBottom= 'none';
}

if ( on_index = true && document.URL.includes("Contact")){
    
     document.getElementById("home").style.borderBottom= '2px solid rgb(20, 40, 70)';
}
    
else if ( on_index = true){
    
    document.getElementById("home").style.borderBottom= '2px #3882f6 solid';
}  
};
