const BASE_URL = "https://game-zone-tournaments.onrender.com/";
alert("JS LOADED");

// SIGNUP
async function signup() {
  const gameUid =
    document.getElementById("su_uid").value || "XXXXXXXXXX";
  const email = document.getElementById("su_email").value;
  const password = document.getElementById("su_pass").value;

  const res = await fetch(`${BASE_URL}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ gameUid, email, password })
  });

  const data = await res.json();
  document.getElementById("signupMsg").innerText =
    data.message || data.error;
}

// LOGIN
async function login() {
  const gameUid = document.getElementById("li_uid").value;
  const email = document.getElementById("li_email").value;
  const password = document.getElementById("li_pass").value;

  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ gameUid, email, password })
  });

  const data = await res.json();
  document.getElementById("loginMsg").style.color =
  res.ok ? "lightgreen" : "red";

}
