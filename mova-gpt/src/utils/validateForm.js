export const validateForm = (email, password) => {
  const validationResult = {};
  if (email.trim().length == 0)
    validationResult["emailErrorMessage"] = "Please enter email";
  if (password.length < 7) {
    validationResult["passwordErrorMessage"] =
      "password must contain atleast 7 characters";
    return validationResult;
  } else if (password.length > 15) {
    validationResult["passwordErrorMessage"] =
      "password must contain atmost 15 characters";
    return validationResult;
  }

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password);

  if (!isEmailValid)
    validationResult["emailErrorMessage"] = "please enter a valid email";

  if (!isPasswordValid)
    validationResult["passwordErrorMessage"] =
      "Password must one number and one special character";

  if (!isEmailValid || !isPasswordValid) return validationResult;

  return null;
};
