import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    position: fixed;
    top:0;
    padding:10px 20px;
    width: 100%;
    background-color:#43464a6f; 
    background: linear-gradient(360deg, rgba(28, 29, 30, 0.5) 20%, rgba(0, 0, 0, 0.5) 90%);
    backdrop-filter: blur(5px);
    box-shadow: 0px 1px 50px #000000bd;


    img {
        width: 10%;
    }
`
export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 50px;

    `
export const Li = styled.li`
    font-weight: 500;
    cursor: pointer;
    font-size: 24px;
    position:relative;
    a{
        color: #fff;
        text-decoration: none;
    }
    &::after{
        content: '';
        height: 3px;
        width: ${(props) => (props.$isActive ? '100%' : 0)} ;
        background-color: #b80000;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%) ;
        transition: width 0.3s ease-in-out;

    }
    &:hover::after{
        width: 100%;
        }
    `