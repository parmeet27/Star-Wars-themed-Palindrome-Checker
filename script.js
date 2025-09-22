document.getElementById("check-btn").addEventListener("click", () => {
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  if (input.trim() === "") {
    alert("Please input a value");
    return;
  }

  // Keep original text for displaying
  const originalText = input;

  // Processed text for palindrome checking
  const cleanedText = input.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reversedText = cleanedText.split("").reverse().join("");

  if (cleanedText === reversedText) {
    result.textContent = `${originalText} is a palindrome.`;
    result.style.color = "#90ee90"; // light green
  } else {
    result.textContent = `${originalText} is not a palindrome.`;
    result.style.color = "#ff7f7f"; // light red
  }
});
