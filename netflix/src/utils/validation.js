import {emailRegex, passwordRegex, nameRegex} from './constant';

export const validateEmail = (email) => emailRegex.test(email);

export const validatePassword = (password) => passwordRegex.test(password);

export const validateName = (name) => nameRegex.test(name);