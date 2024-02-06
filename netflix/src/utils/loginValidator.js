import { validateEmail, validateName, validatePassword } from './validation';

 const checkEmailAndPassword = (languageData, email, password, name, throwError) => {
  try {
    if (!validateEmail(email)) {
      return !languageData ? '' : languageData?.emailInvlaid;
    } else if (!validatePassword(password)) {
      return !languageData ? '' : languageData?.passwordInvlaid;
    } else if (name && !validateName(name)) {
      return !languageData ? '' : languageData?.nameInvalid;
    } else return '';
  } catch (e) {
    throwError('Internal Application Error, while validating.');
  }
};

export default checkEmailAndPassword