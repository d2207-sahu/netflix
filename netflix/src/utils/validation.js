import { emailRegex, passwordRegex } from "./constant";

export const validateEmail = (email) => emailRegex.test(email);

// TODO password validation is not working
export const validatePassword = (password) => passwordRegex.test(password);
