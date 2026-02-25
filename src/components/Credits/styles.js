import styled from "styled-components"

export const Title = styled.h3`
    color: #fff;
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 10px;`

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    div{
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }
    img{
        width: 150px;
        height:100%;
        border-radius:15px;
    } 
    p{
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        margin-top: 10px;
    }
    `