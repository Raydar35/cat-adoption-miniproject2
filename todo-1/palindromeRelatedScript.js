const palBtn = document.getElementById("palBtn");

palBtn.addEventListener("click", () => {
  const raw = document.getElementById("palInput").value;

  const normalized = raw.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (normalized.length === 0) {
    alert("Please enter a non-empty string.");
    const out = document.getElementById("palResult");
    out.textContent = "";
    return;
  }

  const reversed = normalized.split("").reverse().join("");
  const isPalindrome = normalized === reversed;

  const message = isPalindrome ? "Palindrome!" : "Not a palindrome.";
  alert(message);

  const out = document.getElementById("palResult");
  out.textContent = message;
  out.style.color = isPalindrome ? "green" : "red";
});