document.getElementById('Myform').addEventListener('submit', function(event) {
            
    var name = document.getElementById('name').value;
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError')
    var email = document.getElementById('email').value;

    if (name === '' && email === '' ){
        nameError.innerHTML = 'Please, Enter name';
        emailError.innerHTML = 'Please, Enter Email';
        event.preventDefault(); 
        return;
    }else{
        
        nameError.textContent = ''; 
        emailError.textContent = ''; 

    }
    if (name === '') {
        nameError.innerHTML = 'Please, Enter name';
        event.preventDefault(); 
        return;
    } else {
        nameError.textContent = ''; 
    }


    
    if (email === '') {
        emailError.innerHTML = 'Please, Enter Email';
        event.preventDefault(); 
        return;
    } else {
        emailError.textContent = ''; 
    }  

});