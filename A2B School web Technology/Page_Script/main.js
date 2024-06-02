document.addEventListener("DOMContentLoaded", function() {
    const componant1 = document.querySelector('.componant1');
    const componant2 = document.querySelector('.componant2');
    const componant3 = document.querySelector('.componant3');
  
    componant1.addEventListener('click', function() {
      window.location.href = 'java.html'; 
    });
  
    componant2.addEventListener('click', function() {
      window.location.href = 'problem.html'; 
    });
  
    componant3.addEventListener('click', function() {
      window.location.href = 'testcase.html'; 
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const userIcon = document.getElementById('userIcon');

    userIcon.addEventListener('click', function() {
       alert("Hello, hey fellow developer ❤️😍😘😁");
    });
});