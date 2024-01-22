import { createSlice } from '@reduxjs/toolkit';

const initialStateHindi = {
  language: 'hn-IN',
  footerConfig: {
    ctaHeading: 'डेवेलपर को कॉल करें? कॉल ',
    ctaLink: 'tel:+919109494838',
    ctaLinkText: '9109494838',
    footerLink: [
      { text: 'सामान्य प्रश्न', href: 'https://help.netflix.com/en/node/412' },
      { text: 'सहायता केंद्र', href: 'https://help.netflix.com/en/' },
      { text: 'उपयोग की शर्तें', href: 'https://help.netflix.com/legal/termsofuse' },
      { text: 'गोपनीयता', href: 'https://help.netflix.com/legal/privacy' },
      { text: 'कॉर्पोरेट जानकारी', href: 'https://help.netflix.com/legal/corpinfo' }
    ]
  }
};

const intialConfigState = {
  language: 'en-IN',
  languageText: null,
  authPage: {
    login:{
        
    }
  },
  footerConfig: {
    isVisible: true,
    ctaHeading: 'Call the Developer? Call ',
    ctaLink: 'tel:+919109494838',
    ctaLinkText: '9109494838',
    footerLink: [
      { text: 'FAQ', href: 'https://help.netflix.com/en/node/412' },
      { text: 'Help Centre', href: 'https://help.netflix.com/en/' },
      { text: 'Terms of Use', href: 'https://help.netflix.com/legal/termsofuse' },
      { text: 'Privacy', href: 'https://help.netflix.com/legal/privacy' },
      { text: 'Corporate Information', href: 'https://help.netflix.com/legal/corpinfo' }
    ]
  }
};

const configSlice = createSlice({
  name: 'config',
  initialState: intialConfigState,
  reducers: {
    addLanguageText: (state, action) => {
      state.languageText = action.payload;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const { changeLanguage, addLanguageText } = configSlice.actions;
export default configSlice.reducer;

export { initialStateHindi };
