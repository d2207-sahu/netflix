import {translationConfig} from '../config/translation-config';
import {emailRegex, passwordRegex, nameRegex} from './constant';

const validateEmail = (email) => emailRegex.test(email);

const validatePassword = (password) => passwordRegex.test(password);

export const validateName = (name) => nameRegex.test(name);
/**
 * @function checkEmailAndPassword
 * @param {string} email
 * @param {string} password
 * @returns {string} Error Message if Invalid, and EMpty string if Valid
 */
export const checkEmailAndPassword = (email, password, name) => {
  if (!validateEmail(email)) {
    return translationConfig.emailInvlaid;
  } else if (!validatePassword(password)) {
    return translationConfig.passwordInvlaid;
  } else if (name && !validateName(name)) {
    return translationConfig.nameInvalid;
  } else return '';
};
