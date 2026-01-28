// SIGNUP
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let uid = document.getElementById("gameUID").value.trim();
    if (!uid) uid = "XXXXXXXXXX";

    const data = {
      gameName: document.getElementById("gameName").value,
      gameType: document.getElementById("gameType").value,
      gameUID: uid,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    document.getElementById("msg").innerText = result.message;
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      email: document.getElementById("loginEmail").value,
      password: document.getElementById("loginPassword").value,
    };

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    document.getElementById("msg").innerText = result.message;
  });
}
