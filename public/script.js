document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    gameName: document.getElementById("gameName").value,
    gameUID: document.getElementById("gameUID").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  const res = await fetch("/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  document.getElementById("msg").innerText = result.message;
});