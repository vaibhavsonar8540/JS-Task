  // Login functionality
  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Retrieve stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    // Check if user data exists in localStorage
    if (storedUser) {
      // Check if credentials match
      if (storedUser.username === username && storedUser.password === password) {
        alert("Login successful!");
        window.location.href = "data.html"; // Redirect to the main page after login
      } else {
        alert("Invalid credentials!");
      }
    } else {
      alert("No user found. Please sign up first.");
    }
  });
  