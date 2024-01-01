import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { translationConfig } from '../config/translation-config'
import { FiSearch } from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom';
import { routingConfig } from '../router/routing-config';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearchSliceContainer, updateSearchText } from '../redux/slices/searchSlice';
import useDebounce from '../hooks/useDebounce';

const InputComponent = styled.input`    
    color: white;
    outline: none;
    border: none;
    background-color: black;
    padding: 4px;
    font-size: 1.4rem;
`

const SearchContainer = styled.div`
    border-color: white;
    border-radius: 0;
    border-width: ${props => props.$selected ? props.$selected : '1px'};
    padding: 4px;
    padding-top: 2px;
    margin-right: ${props => props.$selected ? '4px' : '12px'};
    display: flex;
    flex-direction: row;
    gap: 8px;
`

// TODO optimise this more.
const SearchComponent = () => {
    const searchRef = useRef();
    const { searchReduxText, showSearchSliceContainer } = useSelector(store => store.search)
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState(searchReduxText ? searchReduxText : '');
    const [searchToggled, setSearchToggled] = useState(showSearchSliceContainer);
    const searchDefferedValue = useDebounce(searchText);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('ref')
        dispatch(toggleSearchSliceContainer(searchToggled));
        if (searchRef?.current)
            searchRef?.current.focus()
    }, [searchToggled]);

    useEffect(() => {
        console.log('API Call')
        // Setting the text in redux, makes the useSearch Effect execute and call the API
        dispatch(updateSearchText(searchText));
        // Handles Routing
        if (searchDefferedValue && !(pathname?.includes(routingConfig.search))) {
            navigate(routingConfig.search);
        }
    }, [searchDefferedValue]);

    //TODO Later on want to useMemo thing
    return (
        <SearchContainer $selected={!searchToggled}>
            <FiSearch
            className='pt-2'
                color='white'
                size={searchToggled ? '2.7rem' : '2.6rem'}
                onClick={() => {
                    setSearchToggled(prevState => !prevState);
                }} />
            {searchToggled && <InputComponent value={searchText} ref={searchRef} placeholder={translationConfig.searchPlaceHolder} onChange={(value) => { setSearchText(value.target.value) }} />}
        </SearchContainer>
    )
}

export default SearchComponent