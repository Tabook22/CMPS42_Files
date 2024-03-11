document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if(username === "" || password === "") {
      alert("Username and password are required.");
      return;
    }
    
    // Normally, here you would send the data to the server
    console.log("Username:", username, "Password:", password);
    alert("Login successful (simulated)");
  });
  