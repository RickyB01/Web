function anyErrors(obj) {
    var navBar = document.querySelector('.nav');
    var h3 = document.createElement('h3');
    var eTxt = document.createElement('eTxt');
    var password = document.querySelector('#pass');
    var repassword = document.querySelector('#repass');
    var current = obj.name;
    
    navBar.innerHTML = '';
      
    if (!obj.checkValidity() || obj.value.trim().length == 0) {
      h3.appendChild(document.createTextNode('Error'));
      if (obj.value.trim().length == 0 && current != 'pass') {
        eTxt.appendChild(document.createTextNode('This field is required.'));
      }
      
      if (current == 'pass' && (password.value.length != 6 || password.value.search(/[A-Z]/i) != 0 || password.value.search(/\d/) == - 1 || password.value.search(/[A-Z]/) == - 1)) {
        eTxt.appendChild(document.createTextNode('Password must be 6 characters long, must start with a character, must have a least 1 digit and 1 uppercase.'));
      } 
      
      else if (current == 'repass' && password.value != repassword.value) {
        eTxt.appendChild(document.createTextNode('Passwords do not match.'));
      }
       
      else if (current == 'fname' || current == 'lname') {
        eTxt.appendChild(document.createTextNode('This field can only contain letters and spaces.'));
      } 
      else if (current == 'email') {
        eTxt.appendChild(document.createTextNode('Please use format - name@host.com'));
      }
      navBar.appendChild(h3);
      navBar.appendChild(eTxt);
    }
    
    
    
    navBar.appendChild(h3);
    navBar.appendChild(eTxt);
  }
  
  
  function validate() {
    var navBar = document.querySelector('.nav');
    var password = document.signup.pass.value;
    var repassword = document.signup.repass.value;
    var  h3= document.createElement('h3');
    var eTxt = document.createElement('eTxt');
    navBar.innerHTML = '';
    h3.appendChild(document.createTextNode('Error'));
  
    
    
    if (password.length != 6 || password.search(/[A-Z]/i) != 0 || password.search(/\d/) == - 1 || password.search(/[A-Z]/) == - 1) {
      p.appendChild(document.createTextNode('Password must be 6 characters long, must start with a character, must have a least 1 digit and 1 uppercase.'));
      navBar.appendChild(h3);
      navBar.appendChild(eTxt);
      return false;
    }
    
    
    else
      return true;
  }

