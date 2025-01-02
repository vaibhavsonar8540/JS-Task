// Signup functionality
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Validate fields
    if (!username || !email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Create user object
    const user = { username, email, password };
  
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(user));
  
    alert("Account created successfully!");
    window.location.href = "login.html"; // Redirect to login page
  });

  

  