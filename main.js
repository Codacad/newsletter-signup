const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  
 document.getElementById('subscribe-btn').onclick = function(){
    emailInput = document.getElementById('email');
    if(emailInput.value == ""){
      document.querySelector('.required').classList.add('show-required')
      document.querySelector('.invalid-email').classList.remove('show-invalid')
      emailInput.classList.add('error')
    } else if(!emailRegex.test(emailInput.value)){
      document.querySelector('.invalid-email').classList.add('show-invalid')
      document.querySelector('.required').classList.remove('show-required')
      emailInput.classList.add('error')
    }else{
      document.querySelector('.required').classList.remove('show-required')
      document.querySelector('.invalid-email').classList.remove('show-invalid')
      emailInput.classList.remove('error')
      document.querySelector('.success').classList.add('success-message')
      document.body.style.overflow = 'hidden'
      emailInput.value = ""
    }
 }

 document.getElementById('dismiss').onclick = function(){
  document.querySelector('.success').classList.remove('success-message')
  document.body.style.overflow = 'visible'

  document.querySelector('.success').style.transition = 'transform 100ms'
 }