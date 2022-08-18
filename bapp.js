document.getElementById('btn-submit').addEventListener('click',function(){
  let emailField = document.getElementById('user-email');
  let email = emailField.value;
  
   let passwordFild = document.getElementById('user-password');
   let password = passwordFild.value;
   console.log(email)

   if (email === "akram@khan.com" && password ==="akram"){
       
   }
   else{
    alert('invalid user')
   }
})