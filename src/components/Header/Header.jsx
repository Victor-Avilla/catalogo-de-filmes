import { Container, Li, Menu } from "./styles"
import { Link, useLocation } from "react-router-dom"
import Logo from '../../assets/Devflix.png'
import { useState } from "react"
const Header = () => {
    const [changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()

    return (
        <Container>
            <img src={Logo} alt="icon" />
            <Menu>
                <Li $isActive={pathname === '/'}><Link to={'/'}>Home</Link></Li>
                <Li $isActive={pathname.includes('filmes')}><Link to={'/filmes'}>Filmes</Link></Li>
                <Li $isActive={pathname.includes('series')}><Link to={'/series'}>Series</Link></Li>
            </Menu>
        </Container>
    )
}

export default Header