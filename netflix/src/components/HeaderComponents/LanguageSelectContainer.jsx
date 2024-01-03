import styled from "styled-components";

const LanguageSelectContainer = styled.select`
    width: 100%;
    color: inherit;
    min-height: 16px;
    border-color: white;
    border-style: solid;
    -webkit-filter: opacity( 100% );
    filter: opacity( 100% );
    padding-left: .25rem;
    padding-bottom: 0.375rem;
    padding-top: 0.375rem;
    padding-right: .25rem;
    line-height: 1.25rem;
    appearance: none;
    background: transparent;
`;

const LanguageOption = styled.option`
    color: white;
    background-color: black;
    &:checked{
        background-color: #323232;
    }
`;
export { LanguageOption, LanguageSelectContainer }