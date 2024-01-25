// Netflix's app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env['REACT_APP_FIREBASE'],
  authDomain: process.env['REACT_APP_ATH_DOMAIN'],
  projectId: process.env['REACT_APP_PROJECT_ID'],
  storageBucket: process.env['REACT_APP_STG_BKT'],
  messagingSenderId: process.env['REACT_APP_MSG_SENDER_ID'],
  appId: process.env['REACT_APP_APP_ID'],
  measurementId: process.env['REACT_APP_MEASUREMENT_ID']
};
