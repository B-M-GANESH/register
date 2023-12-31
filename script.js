const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
    e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success=true
    if(usernameVal===''){
        success=false
        setError(username,"user is required")
    }
    else{
        setSuccess(username)
    }
    if(emailVal===''){
        success=false
        setError(email,"Email is required")
    }
    else if(!validateEmail(emailVal)){
        success=false
        setError(email,"please enter valid email")
    }
    else{
        setSuccess(email)
    }
    if(passwordVal===''){
        success=false
        setError(password,"password is required")
    }
    else if(passwordVal.length<8){
        success=false
        setError(password,"atleast 8 characters")
    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal===''){
        success=false
        setError(cpassword,"confirm password is required")
    }
    else if(cpasswordVal!==passwordVal){
        success=false
        setError(cpassword,"confirm password is required")
    }
    else{
        setSuccess(cpasswordVal)
    }
    return success
}
function setError(element,message){
    const inputgroup=element.parentElement
    const errorElement=inputgroup.querySelector('.error')
    errorElement.innerText=message
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')

}
function setSuccess(element){
    const inputgroup=element.parentElement
    const errorElement=inputgroup.querySelector('.error')
    errorElement.innerText=''
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')

}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };






