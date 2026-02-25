import styled from "styled-components"

export const Background = styled.div`
   height: 100vh;
   width: 100vw;
   z-index: 3;
   background-color: rgba(0, 0, 0, 0.45);
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   `
export const Container = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: fixed;
   max-width: 1200px;
   iframe{
      border: none;
   }
   `
export const CloseButton = styled.button`
   position: absolute;
   padding-bottom: 2px;
   top: -35px;
   right: -35px;
   width: 30px;
   height: 30px;
   cursor: pointer;
   background-color: transparent;
   border: #fff 1px solid;
   border-radius: 20px;
   color: #fff;
   font-size: 20px;

   &:hover{
      background-color:#B80000;
      color: #fff;
      border: none;
   }
   `