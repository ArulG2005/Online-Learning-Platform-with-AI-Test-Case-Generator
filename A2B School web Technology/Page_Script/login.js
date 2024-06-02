document.addEventListener("DOMContentLoaded", function() {
    const bubbleContainer = document.getElementById("bubble-container");
  
    
    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    
    function generateBubble() {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.top = getRandomNumber(0, window.innerHeight - 50) + "px";
      bubble.style.left = getRandomNumber(0, window.innerWidth - 50) + "px";
      bubbleContainer.appendChild(bubble);
  
      
      setTimeout(() => {
        bubble.remove();
      }, 3000);
    }
  
    
    const intervalId = setInterval(() => {
      generateBubble();
    }, 1000);
  
    
  });
  function createNewAccount() {
    
    const name = prompt("Enter your name:");
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    if (name && email && password) {
   
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
       
        document.cookie = `name=${name};`;
        document.cookie = `email=${email};`;
        document.cookie = `password=${password};`;
      }

      alert("Account created successfully!");
    } else {
      alert("Please provide valid information.");
    }
  }
  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    if (typeof(Storage) !== "undefined") {
     
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");

      if (email === storedEmail && password === storedPassword) {
        window.location.href = "main.html";
        
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      
      const cookies = document.cookie.split(";");

      let cookieEmail = null;
      let cookiePassword = null;

      cookies.forEach(cookie => {
        const [key, value] = cookie.trim().split("=");
        if (key === "email") cookieEmail = value;
        if (key === "password") cookiePassword = value;
      });

      if (email === cookieEmail && password === cookiePassword) {
        window.location.href = "main.html";
       
      } else {
        alert("Invalid email or password. Please try again.");
      }
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    const forgetPasswordLink = document.getElementById('forgetPasswordLink');

    forgetPasswordLink.addEventListener('click', function(event) {
      
        event.preventDefault();

       
        const userLoggedIn = true; 

        if (userLoggedIn) {
            alert("Sorry, you cannot change the password otherwise you can create new account for same mailId 😁.");
        } else {
            
           
        }
    });
});
