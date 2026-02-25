import styled from "styled-components"

export const Container = styled.div`
   border-radius: 20px;
   color: #fff;
   padding: 10px 20px;
   font-size: 18px;
   font-weight: 500;

   h2{
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      margin: 0px 0px 10px 10px;
   }
   .swiper-wrapper{
      display:flex;
   }
   img{
      cursor: pointer;
      width: 200px;
      &:hover{
         transform: scale(1.05);
         transition: 0.5s;
      }
   }

   `