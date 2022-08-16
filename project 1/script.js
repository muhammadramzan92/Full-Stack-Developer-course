const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');



function checkemail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,`${getinput(input)} is not valid`);
    }
}

function checkpass(input1,input2){
    if (input1.value !==input2.value){
        showError(input2, "Password does not match");

    }
}
function checklength(input, min, max){
    if(input.value.length<min){
        showError(input,`${getinput(input)} is needs to minimum ${min} is required`);
    }else if(input.value.length>max){
        showError(input,`${getinput(input)} is needs to maximum ${max} is required`);

    }else{
        showSuccess(input);
    }
}

function showError(input, message) {
   const formControl= input.parentElement;
   formControl.className = 'form-control error';
   const small= formControl.querySelector('small')
   small.innerText = message;

}
function showSuccess(input, message) {
    const formControl= input.parentElement;
    formControl.className = 'form-control success';
   
 
 }


 // Function to check if required fields have data
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
       if (input.value===''){
       // console.log(input.id);
        showError(input,`${getinput(input) } is required`)
       }else{
        showSuccess(input)
       }
    });
}

function getinput(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
//creat add event lisner for submit button
//when submit event call than it call to fanction
form.addEventListener('submit',function(e){
    //stop page from reloading
    e.preventDefault();
    //console.log(username.value);
checkRequired([username,email,password,password2])
checklength(username, 3, 10);
checklength(password, 3, 10);
checkemail(email);
checkpass(password,password2);

});

