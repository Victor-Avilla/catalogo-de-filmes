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