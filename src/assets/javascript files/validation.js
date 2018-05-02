export function validation(){
    var name=document.getElementById("username").value;
    var pswd=document.getElementById("psw").value;
    var pattern = /@./;
    if(name.length == 0){
        document.getElementById("error").innerHTML="Enter Email id";
        return false;
    }
else
if(pattern.test(name)==false){
    document.getElementById("error").innerHTML="Enter the correct format"
    return false;
}
else{
    document.getElementById("error").innerHTML=" ";
}
if(pswd.length == 0){
    document.getElementById("error").innerHTML="Enter pswd";
    return false;
}
return true;
}