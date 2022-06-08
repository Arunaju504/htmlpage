function showLogin(){
    uname =document.getElementById("name").value;
    pass =document.getElementById("passcode").value;
    
    if(uname === 'vastpro' && pass === 'vastpro'){
        alert("hi "+uname+" Welcome");
    }else{
        alert("invalid password and username");
    }
}