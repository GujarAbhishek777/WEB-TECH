function fun(){
    Name=document.getElementById('n').value;
    Phn=document.getElementById('p').value;
    email=document.getElementById('e').value;
     psw=document.getElementById('psw').value;
     cpsw=document.getElementById('cpsw').value;

     if(psw==cpsw){
        alert("Welcome to Our Website "+Name);
        document.getElementById('abhi').href("http://127.0.0.1:5501/index.html");
     }else{
        alert("Password Mismatch is there");
     }
}

function can(){
    alert("registration cancelled Successfully");
    document.getElementById('abhi1').href("http://127.0.0.1:5500/index.html");

}