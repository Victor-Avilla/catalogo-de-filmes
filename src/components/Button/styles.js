import styled,{css} from "styled-components"

const buttonStyles = css`
    background:transparent;
    border: 2px solid #fff;
    border-radius: 20px;
    cursor: pointer;
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 500;
    
    &:hover{
        background: #fff;
        color: #B80000;
    }
    `
    export const RedButton = styled.button`
    ${buttonStyles}
    background: #B80000;
    border:4px solid transparent;
    box-shadow: 0px 0px 20px 2px #ff0000ff;
    
    &:hover{
        box-shadow: 0px 0px 20px 8px #B80000;
        background: #B80000;
        color: #fff;
    }
    `
    export const WhiteButton = styled.button`
    ${buttonStyles}
    
    `