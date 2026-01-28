document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    gameName: document.getElementById("gameName").value,
    gameUid: document.getElementById("gameUid").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  if (!data.gameName || !data.email || !data.password) {
    alert("Please fill all required fields");
    return;
  }

  console.log("Signup Data:", data);

  alert("Signup UI working! Backend next 🚀");
});