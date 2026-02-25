import styled from "styled-components"

export const Background = styled.div`
    z-index: -2;
    background-image: url(${(props) => props.image});
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100vh;
        background-color: #00000072;
    }

    &::after{
        content: '';
        position: absolute;
        bottom:0;
        left:0;
        width: 100%;
        height: 25vh;
        background-image: linear-gradient(to top, #000 , transparent );
    }
    `
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: -10vh;
    height: 100%;
    max-width: 1500px;
    
    `
export const Cover = styled.div`
    display: flex;
    align-items: flex-start;
    height: 100%;
    padding: 20px;
    width: 500px;
    img{
        width: 100%;
        border-radius: 20px;
        box-shadow: rgba(49, 48, 48, 0.25) 0px 7px 29px 0px;
    }
    `
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 50%;

    h2{
        font-size: 50px;
        font-weight: 700;
        margin-bottom: 10px;
        color: #fff;
    }

    p{
        font-size: 20px;
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`
