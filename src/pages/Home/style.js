import styled from 'styled-components'

export const Background = styled.main`
    background-image: url(${(props) => props.$img});
    height: 100vh;
    background-position: center;
    background-size:cover;
    display:flex;
    align-items:center ;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100vh;
        background-color: #00000072;
    }
`
export const Info = styled.div`
    z-index: 2;
    background-color: #43464a6f; 
    background: linear-gradient(360deg, rgba(28, 29, 30, 0.5) 20%, rgba(0, 0, 0, 0.5) 90%);
    backdrop-filter: blur(5px);
    box-shadow: 0px 5px 50px #000000bd;
    width: 50%;
    padding: 20px;
    border-radius: 5px;
    ;
    h1{
        font-size: 45px;
        font-weight: 500;
        color: #fff;
    };
    p{
        font-weight: 300;
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 20px;
        color: #fff;
    }
    `
export const Poster = styled.div`
    z-index: 2;
    width: 300px;
    height:432px;
    box-shadow: 0px 5px 50px #000000bd;
    img{
        border-radius: 10px;
        width: 100%;
        height: 100%;
    };
    `

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-around;
    gap: 20px;
    height: 100%;
    width: 1500px;
    `
export const ContainerButtons=styled.div`
    display:flex;
    gap: 20px;
    margin-top: 30px;
`