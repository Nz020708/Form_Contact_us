 let form = document.querySelectorAll(".form-container"),
     firstname=document.querySelector(".first-name"),
     lastname=document.querySelector(".last-name"),
     email=document.querySelector(".email-form"),
     age=document.querySelector(".age-form"),
     button=document.querySelector("#btn")
     firstunder=document.querySelector("#first-minlength"),
     lastunder=document.querySelector("#last-minlength"),
     text=document.querySelector("#text"),
     result=document.querySelector("#result");

   firstunder.style.color="red";
   lastunder.style.color="red";
   text.style.color="red";

 button.addEventListener("click",()=>{
    if (firstname.value.length<3) {
        firstunder.innerText="Your first/last name must be at least 3 characters long."
       
    }
    else  if (lastname.value.length<3) {
        lastunder.innerText="Your first/last name must be at least 3 characters long."
            
    }
    else{
        if (email.value=="" || age.value=="")  {
            text.innerText="You must fill all blanks!"
        }
        else{
            form.remove();
            result.innerText+=`First name:${firstname.value} \nLast name:${lastname.value}\nEmail:${email.value}\nAge:${age.value}`
        }
    }
    
})






// function getData(e) {
//     e.preventDefault();
//     var formData = new FormData(form[0]);
//     alert(formData.get('firstname') + ' ' + formData.get('lastname') + ' ' + formData.get('email') + ' ' + formData.get('birthday'));
// }
// document.addEventListener('contentloaded', function () {
//     submitInput.addEventListener('click', getData, false);
// }, false)