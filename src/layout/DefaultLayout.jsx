import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const DefaultLayout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <footer>,mhg,xccchx,hgx,hgx,hgx</footer>
        </>
    )
}

export default DefaultLayout