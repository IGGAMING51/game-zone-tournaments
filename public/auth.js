document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const gameName = document.getElementById("gameName").value;
  const gameUid = document.getElementById("gameUid").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!gameName || !email || !password) {
    alert("Please fill all required fields");
    return;
  }

  console.log({
    gameName,
    gameUid,
    email,
    password
  });

  alert("Signup UI working perfectly 🎮");
});