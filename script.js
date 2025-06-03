const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const rules = {
  length: document.getElementById("length"),
  uppercase: document.getElementById("uppercase"),
  lowercase: document.getElementById("lowercase"),
  number: document.getElementById("number"),
  special: document.getElementById("special"),
  history: document.getElementById("history") // Placeholder for backend check
};

password.addEventListener("input", () => {
  const val = password.value;

  rules.length.classList.toggle("valid", val.length >= 8);
  rules.uppercase.classList.toggle("valid", /[A-Z]/.test(val));
  rules.lowercase.classList.toggle("valid", /[a-z]/.test(val));
  rules.number.classList.toggle("valid", /[0-9]/.test(val));
  rules.special.classList.toggle("valid", /[^A-Za-z0-9]/.test(val));

  // Note: Password history check must be done server-side
  rules.history.classList.add("valid"); // Simulated for UI
});

togglePassword.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});
