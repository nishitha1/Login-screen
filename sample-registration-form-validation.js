function formValidation()  
{  
var passid = document.registration.passid;  
var uname = document.registration.username;  
var uadd = document.registration.address;  
var bloodgroup = document.registration.bloodgroup;  
var uemail = document.registration.email;  
{  
if(allLetter(uname))  
{  
if(alphanumeric(uadd))  
{   
if(bloodgroupselect(bloodgroup))  
{  
if(allnumeric(uzip))  
{  
if(ValidateEmail(uemail))  
{  
if(validsex(umsex,ufsex))  
{  
}  
}   
}  
}   
}  
}  
}  

return false;  
  
}
function passid_validation(passid,mx,my)  
{  
var passid_len = passid.value.length;  
if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
{  
alert("Password should not be empty / length be between "+mx+" to "+my);  
passid.focus();  
return false;  
}  
return true;  
}  
function allLetter(uname)  
{   
var letters  =  /^[A-Za-z]+$/;  
if(uname.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Username must have alphabet characters only');  
uname.focus();  
return false;  
}  
}  
function alphanumeric(uadd)  
{   
var letters = /^[0-9 a-z A-Z]+$/;  
if(uadd.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('User address must have alphanumeric characters only');  
uadd.focus();  
return false;  
}  
}  
function bloodgroupselect(bloodgroup)  
{  
if(bloodgroup.value == "Default")  
{  
alert('Select your bloodgroup from the list');  
bloodgroup.focus();  
return false;  
}  
else  
{  
return true;  
}  
}    
function ValidateEmail(uemail)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(uemail.value.match(mailformat))  
{  
return true;  
}  
else  
{  
alert('You have entered an invalid email address!');  
uemail.focus();  
return false;  
}  
} 