import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    border-radius: 2rem;
    background-color: #555555;
    padding: 18px 14px;
    margin: 4px 0;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
        text-transform: capitalize;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.buttonLink {
        padding: 4px;
        background-color: #1100FF;
        color: #FAFAFA;
        margin: 2px;
        border-radius: 1rem;
    }

    span {
        background-color: #AAFAFA60;
        padding: .25rem 1rem;
        margin: .25rem 0;
        font-size: .625rem;
        border-radius: 1rem;
        filter: brightness(1.1);
        text-align: center;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`