function checkPassword(form) {
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password != confirmPassword) {
        alert("Passwords do not match!");
        return false;
      } else {
        return true;
      }
}