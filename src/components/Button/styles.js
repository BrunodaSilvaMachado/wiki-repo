import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #EAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    padding: 4px;
    width:${(props) => props.width};
    height: ${(props) => props.height};

    margin: 20px;

    &: hover {
        background-color: #FAFAFA40;
        cursor: pointer;
    }

    ${({variant})=>variant !== "primary" && css`
        background-color: #CC1155;
        color: #FAFAFA;
        margin: 2px;
    `}

`