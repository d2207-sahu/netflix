import styled from "styled-components";

const LanguageSelectContainer = styled.select`
    width: 100%;
    color: inherit;
    min-height: 16px;
    font-size: 1.3rem;
    border-color: white;
    border-style: solid;
    -webkit-filter: opacity( 100% );
    filter: opacity( 100% );
    padding: .5rem;
    line-height: 1.25rem;
    appearance: none;
    background: transparent;
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