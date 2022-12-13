import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;

    margin: 20px 0 0 0;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const ImgStyled = styled.img`
    width:${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: 20px;
    border: 3px solid #FFFFFF;
`