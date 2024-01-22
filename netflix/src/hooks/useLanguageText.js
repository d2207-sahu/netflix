import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LanguageConfig } from '../config/translation-config';
import { addLanguageText } from '../redux/slices/configSlice';

// TODO save the thing in Localstorage
// have to change the URL accordingly
const useLanguagetext = () => {
  const config = useSelector((store) => store.config);
  const dispatch = useDispatch();

  // Later add the API call
  const fetchLanguageData = async () => {
    dispatch(addLanguageText(LanguageConfig[config.language]));
  };

  useEffect(() => {
    fetchLanguageData();
  }, [config?.language]);

  return config?.languageText;
};

export default useLanguagetext;
