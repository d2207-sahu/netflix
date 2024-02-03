import styled from "styled-components";

const LanguageSelectContainer = styled.select`
    width: 100%;
    cursor: pointer;
    color: inherit;
    min-height: 16px;
    font-size: 1.3rem;
    border-color: white;
    border-style: solid;
    -webkit-filter: opacity( 100% );
    filter: opacity( 100% );
    padding: 1rem;
    margin: .5rem;
    line-height: 1.25rem;
    appearance: none;
    background: transparent;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const LanguageOption = styled.option`
    color: white;
    padding: .5rem;
    font-size: 1.3rem;
    margin: 1rem;
    background-color: black;
    &:checked{
        background-color: #323232;
    }
`;
export { LanguageOption, LanguageSelectContainer }