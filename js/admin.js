// admin.js
function adminLogin(username, password) {
    if ((username === "admin" || username === "ADMIN") && password === "12345") {
      return "Access granted";
    } else {
      return "Access denied";
    }
  }
  