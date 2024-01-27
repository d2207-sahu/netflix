import React, { useEffect, useRef, useState } from 'react'
import { FiCrosshair, FiSearch } from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom';
import { routingConfig } from '../../router/routing-config';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearchSliceContainer, updateSearchText } from '../../redux/slices/searchSlice';
import useDebounce from '../../hooks/useDebounce';
import { useLanguage } from '../../context/LanguageContext';
import SearchContainer from '../../components/SearchComponents/SearchContainer';
import SearchInputComponent from '../../components/SearchComponents/SearchInputComponent';

// TODO optimise this more.
const SearchComponent = () => {
    const { languageData } = useLanguage();

    const searchRef = useRef();
    const { searchReduxText, showSearchSliceContainer } = useSelector(store => store.search)
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState(searchReduxText ? searchReduxText : '');
    const [searchToggled, setSearchToggled] = useState(showSearchSliceContainer);
    const searchDefferedValue = useDebounce(searchText);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(toggleSearchSliceContainer(searchToggled));
        if (searchRef?.current)
            searchRef?.current.focus()
    }, [searchToggled]);

    useEffect(() => {
        // Setting the text in redux, makes the useSearch Effect execute and call the API
        dispatch(updateSearchText(searchText));
        // Handles Routing
        if (searchDefferedValue && !(pathname?.includes(routingConfig.search))) {
            navigate(routingConfig.search);
        }
        if (!searchDefferedValue && (pathname?.includes(routingConfig.search))) {
            setSearchToggled(prev => !prev)
            navigate(routingConfig.home);
        }
    }, [searchDefferedValue]);

    //TODO Later on want to useMemo thing
    return (
        <SearchContainer $selected={!searchToggled}>
            <FiSearch
                className='pt-1'
                color='white'
                size={searchToggled ? '2.7rem' : '2.9rem'}
                onClick={() => {
                    setSearchToggled(prevState => !prevState);
                }} />
            {searchToggled && <SearchInputComponent
                value={searchText}
                ref={searchRef}
                placeholder={!languageData ? '' : languageData?.searchPlaceHolder}
                onChange={(value) => { setSearchText(value.target.value) }} />}
            {searchToggled ?
                <FiCrosshair
                    onClick={() => {
                        setSearchText('')
                        dispatch(updateSearchText(''));
                        setSearchToggled(prevState => !prevState);
                    }}
                    className='pt-1 '
                    size={'2.5rem'}
                    color='gray' /> : <></>}
        </SearchContainer>
    )
}

export default SearchComponent