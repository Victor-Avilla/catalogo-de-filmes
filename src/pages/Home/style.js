import styled from 'styled-components'

export const Background = styled.main`
    background-image: url(${(props) => props.img});
    height: 100vh;
    background-position: center;
    background-size:cover;
    display:flex;
    align-items:center ;
    justify-content: center;
    filter: blur();
`