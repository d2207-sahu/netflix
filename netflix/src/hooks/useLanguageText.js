import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LanguageConfig } from '../config/translation-config';
import { addLanguageText } from '../redux/slices/appSlice';

// TODO save the thing in Localstorage
const useLanguagetext = () => {
  const app = useSelector((store) => store.app);
  const dispatch = useDispatch();

  // Later add the API call
  const fetchLanguageData = async () => {
    dispatch(addLanguageText(LanguageConfig[app.languages]));
  };

  useEffect(() => {
    fetchLanguageData();
  }, [app?.languages]);

  return app?.languageText;
};

export default useLanguagetext;
