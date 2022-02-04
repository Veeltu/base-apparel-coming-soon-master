
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const error =document.querySelector('#error-message');
const border =document.querySelector("#border");
const errorIcon =document.querySelector("#error-icon")
const thxx =document.querySelector("#thxx")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(isValid(input.value.trim())) {
        input.value = "";
        form.classList.add("hidden");
        thxx.classList.remove("hidden");
    } 
    else {
        border.classList.add("invalid");
        error.classList.remove("hidden");
        errorIcon.classList.remove("hidden");
    }
});
function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
