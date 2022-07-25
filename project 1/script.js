const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

// function showError(input, message){
//     const formControl=input.parentElement;
//     formControl.classname='form-control error';

// }

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

//creat add event lisner for submit button
//when submit event call than it call to fanction
form.addEventListener('submit',function(e){
    //stop page from reloading
    e.preventDefault();
    //console.log(username.value);
    if(username.value===''){
       showError(username , 'user name is required ')
    }else{
        showSuccess(username);
    }

    if(email.value===''){
        showError(email , 'user name is required ')
     }else{
         showSuccess(email);
     }

    if(password.value===''){
        showError(password , 'user name is required ')
     }else{
         showSuccess(password);
    }

    if(password2.value===''){
        showError(password2 , 'user name is required ')
     }else{
         showSuccess(password2);
     }

});

