// document.getElementById("btn").innerText.addEventListener("click",MinLength)
// function MinLength() {
//     let x=document.getElementById("minlength").innerText.required;
// }
// MinLength();
const formcont = document.querySelector(".form-container"),
    form = formcont.querySelectorAll(".form"),
    submitInput = form[0].querySelector('input[type="submit"]');
function getData(e) {
    e.preventDefault();
    var formData = new FormData(form[0]);
    alert(formData.get('firstname') + ' ' + formData.get('lastname') + ' ' + formData.get('email') + ' ' + formData.get('birthday'));
}
document.addEventListener('contentloaded', function () {
    submitInput.addEventListener('click', getData, false);
}, false)