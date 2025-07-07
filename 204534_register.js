document.getElementById("submit").addEventListener("submit", function(e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value.trim();
  const cardnumber = document.getElementById("cardnumber").value;

  const nameRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^\+?\d{10,15}$/;
  if (!nameRegex.test(fullname)) {
    alert("Full name should contain only letters.");
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();
  const calculatedAge = today.getFullYear() - birthDate.getFullYear();
  const isBirthdayPassed = (
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())
  );
  const finalAge = isBirthdayPassed ? calculatedAge : calculatedAge - 1;

  if (isNaN(birthDate.getTime())) {
    alert("Please enter a valid date of birth.");
    return;
  }

  if (finalAge < 18) {
    alert("You must be at least 18 years old.");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number (10-15 digits, optional + sign).");
    return;
  }

  if (!cardnumber) {
    alert("Please select an account type.");
    return;
  }

  // If all checks pass
  alert(`You have successfully registered as a game-leaser for Kenya GameStop.`);
});